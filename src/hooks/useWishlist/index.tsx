import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { GameCardProps } from 'components/GameCard'
import { useQueryWishlist } from 'graphql/queries/wishlist'
import { useSession } from 'next-auth/client'
import { gameSliderMapper } from 'utils/mappers'
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'
import { useMutation } from '@apollo/client'
import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST
} from 'graphql/mutations/wishlist'
import {
  MutationCreateWishlist,
  MutationCreateWishlistVariables
} from 'graphql/generated/MutationCreateWishlist'
import {
  MutationUpdateWishlistt,
  MutationUpdateWishlisttVariables
} from 'graphql/generated/MutationUpdateWishlistt'

export type WishlistContextData = {
  items: GameCardProps[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  loading: boolean
}

export const WishlistContextDefaultValues: WishlistContextData = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => false,
  removeFromWishlist: () => false,
  loading: false
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [session] = useSession()
  const [wishlistId, setWishlistId] = useState<string | null>()
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

  const [createList] = useMutation<
    MutationCreateWishlist,
    MutationCreateWishlistVariables
  >(MUTATION_CREATE_WISHLIST, {
    context: { session },
    onCompleted: (data) => {
      setWishlistItems(data?.createWishlist?.wishlist?.games || [])
      setWishlistId(data?.createWishlist?.wishlist?.id)
    }
  })
  const [updateList] = useMutation<
    MutationUpdateWishlistt,
    MutationUpdateWishlisttVariables
  >(MUTATION_UPDATE_WISHLIST, {
    context: { session },
    onCompleted: (data) => {
      setWishlistItems(data?.updateWishlist?.wishlist?.games || [])
    }
  })

  useEffect(() => {
    setWishlistItems(data?.wishlists[0]?.games || [])
    setWishlistId(data?.wishlists[0]?.id)
  }, [data])

  const isInWishlist = (id: string) => {
    return wishlistItems.some((item) => item.id === id)
  }

  const wishlistIds = useMemo(
    () => wishlistItems.map((game) => game.id),
    [wishlistItems]
  )

  const addToWishlist = (id: string) => {
    if (!wishlistId) {
      return createList({
        variables: {
          input: {
            data: {
              games: [...wishlistIds, id]
            }
          }
        }
      })
    }

    return updateList({
      variables: {
        input: {
          where: { id: wishlistId },
          data: {
            games: [...wishlistIds, id]
          }
        }
      }
    })
  }

  const removeFromWishlist = (id: string) => {
    if (wishlistId) {
      updateList({
        variables: {
          input: {
            where: { id: wishlistId },
            data: {
              games: wishlistIds.filter((gameId) => gameId !== id)
            }
          }
        }
      })
    }
  }

  return (
    <WishlistContext.Provider
      value={{
        items: gameSliderMapper(wishlistItems),
        addToWishlist,
        isInWishlist,
        removeFromWishlist,
        loading
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)
