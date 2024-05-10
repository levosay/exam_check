import { IHookFormValues } from '@/src/types/forms'

export interface IFormQuestionsProps {
  id: string
  addQuestion: (data: IHookFormValues) => void
}
