import { createContext, useContext, useEffect, useState } from 'react'
import { GameCardProps } from 'components/GameCard'
import { useQueryWishlist } from 'graphql/queries/wishlist'
import { useSession } from 'next-auth/client'
import { gameSliderMapper } from 'utils/mappers'
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'

export type WishlistContextData = {
  items: GameCardProps[]
  isInWishlist: (id: string) => boolean
  // addToWishlist: (id: string) => void
  // removeFromWishlist: (id: string) => void
  loading: boolean
}

export const WishlistContext = createContext<WishlistContextData | undefined>(
  undefined
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [session] = useSession()
  const [wishlistItems, setWishlistItems] = useState<
    QueryWishlist_wishlists_games[]
  >([])

  const { data, loading } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string
    }
  })

  useEffect(() => {
    setWishlistItems(data?.wishlists[0]?.games || [])
  }, [data])

  const isInWishlist = (id: string) => {
    return wishlistItems.some((item) => item.id === id)
  }

  // const addToWishlist = (id: string) => {
  //   return id
  // }
  // const removeFromWishlist = (id: string) => {
  //   return id
  // }

  return (
    <WishlistContext.Provider
      value={{
        items: gameSliderMapper(wishlistItems),
        // addToWishlist,
        isInWishlist,
        // removeFromWishlist,
        loading
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => {
  const context = useContext(WishlistContext)

  if (context === undefined) {
    throw new Error(`useWishlist must be used within a WishlistProvider`)
  }

  return context
}
