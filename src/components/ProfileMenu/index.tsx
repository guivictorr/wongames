import { signOut } from 'next-auth/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  AccountCircle,
  ExitToApp,
  FormatListBulleted
} from 'styled-icons/material-outlined'
import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: `/profile/${'me' | 'orders' | 'logout'}` | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  const { push } = useRouter()

  return (
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link isActive={activeLink === '/profile/me'} title="My account">
          <AccountCircle size={24} />
          <span>My account</span>
        </S.Link>
      </Link>
      <Link href="/profile/orders" passHref>
        <S.Link isActive={activeLink === '/profile/orders'} title="My orders">
          <FormatListBulleted size={24} />
          <span>My orders</span>
        </S.Link>
      </Link>
      <S.Link
        isActive={activeLink === '/profile/logout'}
        title="Sign out"
        role="button"
        onClick={async () => {
          const { url } = await signOut({
            callbackUrl: '/',
            redirect: false
          })

          push(url)
        }}
      >
        <ExitToApp size={24} />
        <span>Sign out</span>
      </S.Link>
    </S.Nav>
  )
}

export default ProfileMenu
