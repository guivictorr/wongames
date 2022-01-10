import { Settings } from 'react-slick'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import Slider from 'components/Slider'

import * as S from './styles'
import { useState } from 'react'
import { Close } from 'styled-icons/material-outlined'

type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const settings: Settings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const Gallery = ({ items, ...rest }: GalleryProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <S.Wrapper {...rest}>
      <Slider settings={settings}>
        {items.map(({ label, src }) => (
          <S.Image
            role="button"
            key={`thumb-${label}`}
            src={src}
            alt={`Thumb - ${label}`}
            onClick={() => setIsModalOpen(true)}
          />
        ))}
      </Slider>
      <S.Modal
        aria-label="modal"
        aria-hidden={isModalOpen}
        isOpen={isModalOpen}
      >
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsModalOpen(false)}
        >
          <Close size={40} />
        </S.Close>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
