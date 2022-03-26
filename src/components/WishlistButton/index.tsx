import Button, { ButtonProps } from 'components/Button'
import Spinner from 'components/Spinner'
import { useWishlist } from 'hooks/useWishlist'
import { useSession } from 'next-auth/client'
import { useState } from 'react'
import { Favorite, FavoriteBorder } from 'styled-icons/material-outlined'

type WishlistButton = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({ id, hasText, size = 'small' }: WishlistButton) => {
  const [loading, setLoading] = useState(false)
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist()
  const [session] = useSession()
  const buttonLabel = isInWishlist(id)
    ? 'Remove from wishlist'
    : 'Add to wishlist'

  const toggleWishlist = async () => {
    setLoading(true)
    isInWishlist(id) ? await removeFromWishlist(id) : await addToWishlist(id)
    setLoading(false)
  }

  if (!session) return null

  return (
    <Button
      size={size}
      aria-label={buttonLabel}
      role="button"
      onClick={toggleWishlist}
      minimal
      icon={
        loading ? (
          <Spinner />
        ) : isInWishlist(id) ? (
          <Favorite />
        ) : (
          <FavoriteBorder />
        )
      }
    >
      {hasText && buttonLabel}
    </Button>
  )
}

export default WishlistButton
