import { EditableState, QuestionText } from '@/src/modules'

export type IFormQuestionsTextProps =
  Pick<QuestionText, 'position' | 'test'>
  & {
  onSave: (question: QuestionText) => void
  handlerEditable: (state: EditableState) => void
}
