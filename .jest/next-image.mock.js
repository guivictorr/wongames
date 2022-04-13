/* eslint-disable no-import-assign */
import * as nextImage from 'next/image'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (value) => {
    return <img {...value} />
  }
})
