import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const Main = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 32rem 1fr;
      grid-gap: calc(${theme.grid.gutter} * 2);
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    padding: ${theme.spacings.xsmall};
  `}
`
