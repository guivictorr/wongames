import { HighlightFragment } from 'graphql/generated/HighlightFragment'
import { QueryGames_games } from 'graphql/generated/QueryGames'
import { QueryHome_banners } from 'graphql/generated/QueryHome'
import { formatNumber } from 'utils/format'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    title: banner.title,
    subtitle: banner.subtitle,
    img: `http://localhost:1337${banner.image?.url}`,
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
        img: `http://localhost:1337${game.cover?.url}`,
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
        backgroundImage: `http://localhost:1337${highlight.background?.url}`,
        floatImage: `http://localhost:1337${highlight.floatImage?.url}`,
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
    img: `http://localhost:1337${game.cover?.url}`,
    price: formatNumber(game.price, {
      style: 'currency',
      currency: 'USD'
    }),
    title: game.name
  }))
}
