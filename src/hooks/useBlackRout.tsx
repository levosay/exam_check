import { useRouter } from 'next/router'
import { useMemo } from 'react'

export const useBlackRout = () => {
  const router = useRouter()
  const asPath = router.asPath

  const isNestedPath = useMemo(() => {
    const path = router.asPath
    return path.split('/').filter((item) => item.length).length > 1
  }, [router])

  const prevPath = useMemo(() => {
    const path = router.asPath
    const reversePath = path.split('').reverse()
    const indexEndPath = reversePath.findIndex((item) => item === '/')
    const filterPath = reversePath.filter((item, index) => {
      if (index > indexEndPath) return item
    })

    return filterPath.reverse().join('')
  }, [router])

  const toPrevPath = () => {
    router.push(prevPath)
  }

  const toHomePath = () => {
    router.push('/')
  }

  const toCustomRoute = (route: string) => {
    router.push(route)
  }

  const toNotFound = () => {
    router.push('/404')
  }

  const toBack = () => {
    router.back()
  }

  return {
    asPath,
    isNestedPath,
    prevPath,
    toPrevPath,
    toHomePath,
    toCustomRoute,
    toNotFound,
    toBack
  }
}
