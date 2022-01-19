import Link from 'next/link'
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from 'styled-icons/material-outlined'
import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: `/profile/${'me' | 'cards' | 'orders' | 'logout'}`
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="profile/me" passHref>
      <S.Link isActive={activeLink === '/profile/me'} title="My account">
        <AccountCircle size={24} />
        <span>My account</span>
      </S.Link>
    </Link>
    <Link href="profile/cards" passHref>
      <S.Link isActive={activeLink === '/profile/cards'} title="My cards">
        <CreditCard size={24} />
        <span>My cards</span>
      </S.Link>
    </Link>
    <Link href="profile/orders" passHref>
      <S.Link isActive={activeLink === '/profile/orders'} title="My orders">
        <FormatListBulleted size={24} />
        <span>My orders</span>
      </S.Link>
    </Link>
    <Link href="/logout" passHref>
      <S.Link isActive={activeLink === '/profile/logout'} title="Sign out">
        <ExitToApp size={24} />
        <span>Sign out</span>
      </S.Link>
    </Link>
  </S.Nav>
)

export default ProfileMenu
