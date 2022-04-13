import { HighlightFragment } from 'graphql/generated/HighlightFragment'
import { QueryGames_games } from 'graphql/generated/QueryGames'
import { QueryHome_banners } from 'graphql/generated/QueryHome'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'
import { formatNumber } from 'utils/format'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    title: banner.title,
    subtitle: banner.subtitle,
    img: `${process.env.NEXT_PUBLIC_IMAGE_HOST}${banner.image?.url}`,
    ...(banner.button && {
      buttonLabel: banner.button.label,
      buttonLink: banner.button.link
    }),
    ...(banner.ribbon && {
      ribbon: banner.ribbon.title,
      ribbonColor: banner.ribbon.color,
      ribbonSize: banner.ribbon.size
    })
  }))
}

export const gameSliderMapper = (
  games: QueryGames_games[] | undefined | null
) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `${process.env.NEXT_PUBLIC_IMAGE_HOST}${game.cover?.url}`,
        price: game.price
      }))
    : []
}

export const highlightMapper = (
  highlight: HighlightFragment | null | undefined
) => {
  return highlight
    ? {
        title: highlight.title,
        subtitle: highlight.subtitle,
        backgroundImage: `${process.env.NEXT_PUBLIC_IMAGE_HOST}${highlight.background?.url}`,
        floatImage: `${process.env.NEXT_PUBLIC_IMAGE_HOST}${highlight.floatImage?.url}`,
        buttonLabel: highlight.buttonLabel,
        buttonLink: highlight.buttonLink,
        alignment: highlight.alignment
      }
    : {}
}

export const cartMapper = (games: QueryGames_games[] | null | undefined) => {
  if (!games) {
    return []
  }

  return games?.map((game) => ({
    id: game.id,
    img: `${process.env.NEXT_PUBLIC_IMAGE_HOST}${game.cover?.url}`,
    price: formatNumber(game.price, {
      style: 'currency',
      currency: 'USD'
    }),
    title: game.name
  }))
}

export const ordersMapper = (orders: QueryOrders_orders[]) => {
  return orders
    ? orders.map((order) => {
        return {
          id: order.id,
          paymentInfo: {
            flag: order.card_brand,
            img: order.card_brand ? `/img/cards/${order.card_brand}.png` : null,
            number: order.card_last4
              ? `**** **** **** ${order.card_last4}`
              : 'Free Game',
            purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(order.created_at))}`
          },
          games: order.games.map((game) => ({
            id: game.id,
            title: game.name,
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: `${process.env.NEXT_PUBLIC_IMAGE_HOST}${game.cover?.url}`,
            price: formatNumber(game.price, {
              style: 'currency',
              currency: 'USD'
            })
          }))
        }
      })
    : []
}
