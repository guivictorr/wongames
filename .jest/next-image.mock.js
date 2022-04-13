/* eslint-disable no-import-assign */
import * as nextImage from 'next/image'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (value) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { objectFit, ...rest } = value
    return <img {...rest} />
  }
})
