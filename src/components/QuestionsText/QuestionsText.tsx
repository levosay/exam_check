import { FunctionComponent } from 'react'
import { TQuestionsTextProps } from './QuestionsText.d'

export const QuestionsText: FunctionComponent<
  TQuestionsTextProps
> = ({ id, question }): JSX.Element => {
  return <div className={''}>{question}</div>
}
