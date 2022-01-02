import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'
import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon?: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>

const buttonModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    size = 'large',
    fullWidth = false,
    hasIcon,
    minimal = false
  }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    text-decoration: none;
    background: linear-gradient(
      178.59deg,
      #ff5f5f -14.51%,
      #f062c0 102.86%,
      #f23131 102.86%
    );

    &:hover {
      background: ${minimal
        ? 'none'
        : 'linear-gradient(180deg, #e35565 0%, #d958a6 50%)'};
    }

    cursor: pointer;
    border-radius: ${theme.border.radius};
    border: 0;
    padding: ${theme.spacings.xxsmall};

    ${!!size && buttonModifiers[size](theme)}
    ${fullWidth && buttonModifiers.fullWidth()}
    ${!!hasIcon && buttonModifiers.withIcon(theme)}
    ${minimal && buttonModifiers.minimal(theme)}
  `}
`
