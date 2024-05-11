import { FunctionComponent, useEffect } from 'react'
import { ITimerProps } from './Timer.d'

export const Timer: FunctionComponent<
  ITimerProps
> = ({ timeState, setTimeState }): JSX.Element => {
  const minText = timeState.min >= 10 ? timeState.min : `0${timeState.min}`
  const secText = timeState.sec >= 10 ? timeState.sec : `0${timeState.sec}`

  const createTimer = () => {
    const now = +new Date()
    return (currentTime: number) => {
      const diff = currentTime - now
      const hours = Math.floor(diff / 1000 / 60 / 60 % 24)
      const min = Math.floor(diff / 1000 / 60 % 60)
      const sec = Math.floor(diff / 1000 % 60)
      setTimeState({ hours, min, sec })
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

  return <span>{timeState.hours}:{minText}:{secText}</span>
}
