import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon?: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth'>

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
  withIcon: () => css`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${({ theme }) => theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size = 'large', fullWidth, hasIcon }) => css`
    color: ${theme.colors.white};
    background: linear-gradient(
      178.59deg,
      #ff5f5f -14.51%,
      #f062c0 102.86%,
      #f23131 102.86%
    );
    cursor: pointer;
    border-radius: ${theme.border.radius};
    border: 0;
    padding: ${theme.spacings.xxsmall};

    ${!!size && buttonModifiers[size](theme)}
    ${!!fullWidth && buttonModifiers.fullWidth()}
    ${!!hasIcon && buttonModifiers.withIcon()}
  `}
`
