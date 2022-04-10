import { CardElement } from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import Button from 'components/Button'
import Heading from 'components/Heading'
import { useState } from 'react'
import { ErrorOutline, ShoppingCart } from 'styled-icons/material-outlined'
import * as S from './styles'

const PaymentForm = () => {
  const [error, setError] = useState<string | null>(null)
  const handleCardChange = async (event: StripeCardElementChangeEvent) => {
    setError(event.error ? event.error.message : null)
  }

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
          onChange={handleCardChange}
        />
        {error && (
          <S.Error>
            <ErrorOutline size={23} />
            {error}
          </S.Error>
        )}
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
