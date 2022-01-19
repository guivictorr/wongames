import { GetServerSideProps } from 'next'
import Cart, { CartProps } from 'templates/Cart'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import cartItems from 'components/CartList/mock'
import cards from 'components/PaymentOptions/mock'

function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export const getServerSideProps: GetServerSideProps<CartProps> = async () => {
  return {
    props: {
      cards,
      items: cartItems,
      total: '$ 430,00',
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock
    }
  }
}

export default CartPage
