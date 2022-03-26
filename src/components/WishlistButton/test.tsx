import userEvent from '@testing-library/user-event'
import {
  WishlistContextData,
  WishlistContextDefaultValues
} from 'hooks/useWishlist'
import { render, screen } from 'utils/test-utils'

import WishlistButton from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')

useSession.mockImplementation(() => [
  {
    jwt: '123',
    user: {
      email: 'email@gmail.com'
    }
  }
])

describe('<WishlistButton />', () => {
  it('should render a button to add to wishlist', () => {
    const wishlistProviderProps: WishlistContextData = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false
    }

    const { container } = render(<WishlistButton id="1" />, {
      wishlistProviderProps
    })

    expect(
      screen.getByRole('button', { name: 'Add to wishlist' })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a button to remove from wishlist', () => {
    const wishlistProviderProps: WishlistContextData = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton id="1" />, {
      wishlistProviderProps
    })

    expect(
      screen.getByRole('button', { name: 'Remove from wishlist' })
    ).toBeInTheDocument()
  })

  it('should render a button with add to wishlist text', () => {
    const wishlistProviderProps: WishlistContextData = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false
    }

    render(<WishlistButton id="1" hasText />, {
      wishlistProviderProps
    })

    expect(screen.getByText('Add to wishlist')).toBeInTheDocument()
  })

  it('should render a button with remove from wishlist text', () => {
    const wishlistProviderProps: WishlistContextData = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton id="1" hasText />, {
      wishlistProviderProps
    })

    expect(screen.getByText('Remove from wishlist')).toBeInTheDocument()
  })

  it('should not render if not logged', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const useSession = jest.spyOn(require('next-auth/client'), 'useSession')

    useSession.mockImplementationOnce(() => [null])

    const wishlistProviderProps: WishlistContextData = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton id="1" hasText />, {
      wishlistProviderProps
    })

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('should add item to the wishlist', () => {
    const wishlistProviderProps: WishlistContextData = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false,
      addToWishlist: jest.fn()
    }

    render(<WishlistButton id="1" hasText />, {
      wishlistProviderProps
    })

    userEvent.click(screen.getByRole('button', { name: 'Add to wishlist' }))

    expect(wishlistProviderProps.addToWishlist).toHaveBeenCalledWith('1')
  })

  it('should add item to the wishlist', () => {
    const wishlistProviderProps: WishlistContextData = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true,
      removeFromWishlist: jest.fn()
    }

    render(<WishlistButton id="1" hasText />, {
      wishlistProviderProps
    })

    userEvent.click(
      screen.getByRole('button', { name: 'Remove from wishlist' })
    )

    expect(wishlistProviderProps.removeFromWishlist).toHaveBeenCalledWith('1')
  })
})
