const APP_KEY = 'WONGAMES'

export const getStorageItem = (key: string) => {
  if (typeof window === 'undefined') return

  const item = window.localStorage.getItem(`${APP_KEY}_${key}`)

  return JSON.parse(item!)
}

export const setStorageItem = (key: string, value: string | string[]) => {
  if (typeof window === 'undefined') return

  return window.localStorage.setItem(`${APP_KEY}_${key}`, JSON.stringify(value))
}
