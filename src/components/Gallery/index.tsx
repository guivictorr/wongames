import { useEffect, useRef, useState } from 'react'
import SlickSlider, { Settings } from 'react-slick'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import Slider from 'components/Slider'

import * as S from './styles'
import { Close } from 'styled-icons/material-outlined'

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const commonSettings: Settings = {
  arrows: true,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const settings: Settings = {
  ...commonSettings,
  slidesToShow: 4,
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
  ]
}

const modalSettings: Settings = {
  ...commonSettings,
  slidesToShow: 1
}

const Gallery = ({ items, ...rest }: GalleryProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalSliderRef = useRef<SlickSlider>(null)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsModalOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.Wrapper {...rest}>
      <Slider settings={settings} ref={modalSliderRef}>
        {items.map(({ label, src }, index) => (
          <S.Image
            role="button"
            key={`thumb-${label}`}
            src={src}
            alt={`Thumb - ${label}`}
            onClick={() => {
              setIsModalOpen(true)
              modalSliderRef.current?.slickGoTo(index, true)
            }}
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

        <S.Content>
          <Slider ref={modalSliderRef} settings={modalSettings}>
            {items.map(({ label, src }, index) => (
              <S.Image
                role="img"
                key={`gallery-${index}`}
                src={src}
                alt={label}
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
