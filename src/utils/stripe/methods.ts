import { PaymentIntent } from '@stripe/stripe-js'
import { CartItem } from 'hooks/useCart'

type FetcherParams = {
  body: string
  token: string
  url: string
}

const fetcher = async ({ body, token, url }: FetcherParams) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body
  })

  return await response.json()
}

type CreatePaymentIntentProps = {
  token: string
  items: CartItem[]
}

export const createPaymentIntent = async ({
  items,
  token
}: CreatePaymentIntentProps) => {
  return fetcher({
    body: JSON.stringify({ cart: items }),
    token,
    url: '/orders/create-payment-intent'
  })
}

type CreatePaymentParams = {
  items: CartItem[]
  paymentIntent: PaymentIntent
  token: string
}

export const createPayment = async ({
  items,
  paymentIntent,
  token
}: CreatePaymentParams) => {
  return fetcher({
    body: JSON.stringify({
      cart: items,
      paymentIntentId: paymentIntent.id,
      paymentMethod: paymentIntent.payment_method
    }),
    token,
    url: '/orders'
  })
}
