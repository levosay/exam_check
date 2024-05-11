import { TimeState } from '@/src/modules/TestModule/TestModule.d'

export interface IProgressExamProps {
  current: number
  total: number
  timeState: TimeState
  setTimeState: (state: TimeState) => void
}
