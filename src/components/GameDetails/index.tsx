import { Apple, Windows, Linux } from '@styled-icons/fa-brands'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

type Platform = 'mac' | 'windows' | 'linux'

export type GameDetailsProps = {
  platforms: Platform[]
}

const GameDetails = ({ platforms }: GameDetailsProps) => {
  const platformIcons = {
    mac: <Apple title="mac" size={18} />,
    windows: <Windows title="windows" size={18} />,
    linux: <Linux title="linux" size={18} />
  }

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading line="left" color="white" lineColor="secondary">
          Game details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>Gearbox Software</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>Gearbox Software</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Platform</S.Label>
          <S.IconsWrapper>
            {platforms.map((platform) => (
              <S.Icon key={platform}>{platformIcons[platform]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>Gearbox Software</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>Gearbox Software</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>Gearbox Software</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
