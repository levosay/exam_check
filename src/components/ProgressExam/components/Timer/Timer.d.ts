import { TimeState } from '@/src/modules/TestModule/TestModule.d'

export interface ITimerProps {
  message?: string
  timeState: TimeState
  setTimeState: (state: TimeState) => void
}
