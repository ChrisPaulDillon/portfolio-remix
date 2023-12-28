import { useEffect, useState } from 'react'

export const useIsScrolling = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false)

  const handleScroll = () => {
    const position = window.pageYOffset
    setIsScrolling(position > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { isScrolling }
}
