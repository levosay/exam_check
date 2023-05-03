import { IQuestions, QuestionTypes } from 'api/models/questions'

export const questions: IQuestions[] = [
  {
    id: 1,
    type: QuestionTypes.checkbox,
    question: 'В каком году было крещение Руси?',
    answers: [
      {
        id: 1,
        title: '1994',
      },
      {
        id: 2,
        title: '2077',
      },
      {
        id: 3,
        title: '1812',
      },
      {
        id: 4,
        title: '2023',
      },
    ]
  },
  {
    id: 2,
    type: QuestionTypes.checkbox,
    question: 'Еще какой-то вопрос',
    answers: [
      {
        id: 1,
        title: '11',
      },
      {
        id: 2,
        title: '222',
      },
      {
        id: 3,
        title: '333',
      }
    ]
  },
  {
    id: 3,
    type: QuestionTypes.text,
    question: 'Тут надо будет что-то написать. Мол это вопрос, Ясно?',
  },
  {
    id: 4,
    type: QuestionTypes.sequence,
    question: 'Тут надо будет что-то написать. Мол это вопрос, Ясно?',
    answers: ['1. это', '2. оно?', '3. или это?']
  }
]
