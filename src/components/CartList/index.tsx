import Button from 'components/Button'
import Empty from 'components/Empty'
import GameItem from 'components/GameItem'
import Loader from 'components/Loader'
import { useCart } from 'hooks/useCart'
import Link from 'next/link'

import * as S from './styles'

export type CartListProps = {
  hasButton?: boolean
}

const CartList = ({ hasButton = false }: CartListProps) => {
  const { items, total, loading } = useCart()

  if (loading) {
    return (
      <S.Loading>
        <Loader />
      </S.Loading>
    )
  }

  return (
    <S.Wrapper isEmpty={!items.length}>
      {items.length ? (
        <>
          {items.map((item) => (
            <GameItem key={item.title} {...item} />
          ))}

          <S.Footer>
            {!hasButton && <span>Total:</span>}
            <S.Total>{total}</S.Total>
            {hasButton && (
              <Link href="/cart" passHref>
                <Button as="a">Buy now</Button>
              </Link>
            )}
          </S.Footer>
        </>
      ) : (
        <>
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
          />
        </>
      )}
    </S.Wrapper>
  )
}

export default CartList
