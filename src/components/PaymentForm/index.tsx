import { CardElement } from '@stripe/react-stripe-js'
import Button from 'components/Button'
import Heading from 'components/Heading'
import { ShoppingCart } from 'styled-icons/material-outlined'
import * as S from './styles'

const PaymentForm = () => {
  return (
    <S.Wrapper>
      <S.Body>
        <Heading line="bottom" size="small" color="black">
          Payment
        </Heading>
        <CardElement
          options={{
            hidePostalCode: true
          }}
        />
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button icon={<ShoppingCart />} fullWidth>
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}
export default PaymentForm
