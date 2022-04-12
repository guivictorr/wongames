import { FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Session } from 'next-auth'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import {
  PaymentIntent,
  StripeCardElement,
  StripeCardElementChangeEvent
} from '@stripe/stripe-js'
import { ErrorOutline, ShoppingCart } from 'styled-icons/material-outlined'

import { useCart } from 'hooks/useCart'
import { createPayment, createPaymentIntent } from 'utils/stripe/methods'

import Button from 'components/Button'
import { FormLoading } from 'components/Form'
import Heading from 'components/Heading'
import * as S from './styles'

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const [error, setError] = useState<string | null>(null)
  const [disabled, setDisabled] = useState(true)
  const [freeGames, setFreeGames] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const [loading, setLoading] = useState(false)
  const stripe = useStripe()
  const { push } = useRouter()
  const elements = useElements()
  const { items } = useCart()

  const handleCardChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : null)
  }

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)

    if (!stripe || !elements) return

    if (freeGames) {
      saveOrder()
      push('/success')
      return
    }

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement) as StripeCardElement
      }
    })

    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`)
      setLoading(false)
    } else {
      setError(null)
      setLoading(false)
      push('/success')
      saveOrder(payload.paymentIntent)
    }
  }

  const saveOrder = async (paymentIntent?: PaymentIntent) => {
    const { data } = await createPayment({
      items,
      paymentIntent,
      token: session.jwt as string
    })

    return data
  }

  useEffect(() => {
    async function setPaymentMode() {
      if (!items.length) return

      const data = await createPaymentIntent({
        items,
        token: session.jwt as string
      })

      if (data.freeGames) {
        setFreeGames(true)
        return
      }

      if (data.error) {
        setError(data.error)
        return
      }

      setFreeGames(false)
      setClientSecret(data.client_secret)
    }

    setPaymentMode()
  }, [items, session])

  return (
    <S.Wrapper>
      <form onSubmit={handleFormSubmit}>
        <S.Body>
          <Heading line="bottom" size="small" color="black">
            Payment
          </Heading>
          {freeGames ? (
            <S.FreeGames>Only free games, click buy and enjoy!</S.FreeGames>
          ) : (
            <CardElement
              options={{
                hidePostalCode: true,
                style: {
                  base: {
                    fontSize: '16px'
                  }
                }
              }}
              onChange={handleCardChange}
            />
          )}
          {error && (
            <S.Error>
              <ErrorOutline size={23} />
              {error}
            </S.Error>
          )}
        </S.Body>

        <S.Footer>
          <Link href="/" passHref>
            <Button as="a" fullWidth minimal>
              Continue shopping
            </Button>
          </Link>
          <Button
            icon={loading ? <FormLoading /> : <ShoppingCart />}
            fullWidth
            disabled={!freeGames && (disabled || !!error)}
          >
            {loading ? <span hidden>Loading</span> : 'Buy now'}
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  )
}
export default PaymentForm
