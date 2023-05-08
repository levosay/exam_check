import { useEffect } from 'react'

export const useScrollBlock = (allow: boolean) => {
  const blockScroll = () => {
    const scrollWidth = window.innerWidth - document.body.offsetWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollWidth}px`
  }

  const allowScroll = () => {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ``
  }
  useEffect(() => {
    if (allow) {
      blockScroll()
    }
    return () => {
      allowScroll()
    }
  }, [allow])
}
