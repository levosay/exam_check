import { FunctionComponent, useEffect, useState } from 'react'
import { ITimerProps } from './Timer.d'

export const Timer: FunctionComponent<
  ITimerProps
> = (): JSX.Element => {
  const [time, setTime] = useState({
    hours: 0,
    min: 0,
    sec: 0
  })

  const minText = time.min >= 10 ? time.min : `0${time.min}`
  const secText = time.sec >= 10 ? time.sec : `0${time.sec}`

  const createTimer = () => {
    const now = +new Date()
    return (currentTime: number) => {
      const diff = currentTime - now
      const hours = Math.floor(diff / 1000 / 60 / 60 % 24)
      const min = Math.floor(diff / 1000 / 60 % 60)
      const sec = Math.floor(diff / 1000 % 60)
      setTime({ hours, min, sec })
    }
  }

  const startTimer = createTimer()

  useEffect(() => {
    startTimer(+new Date())
    const interval = setInterval(() => startTimer(+new Date()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={'flex gap-2'}>
      <span>{time.hours}:{minText}:{secText}</span>
    </div>
  )
}
