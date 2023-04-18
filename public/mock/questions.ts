import { IQuestions, QuestionTypes } from '@/src/api/models/questions'

export const questions: IQuestions[] = [
  {
    id: 0,
    type: QuestionTypes.checkbox,
    question: 'В каком году было крещение Руси?',
    answers: [
      {
        id: 0,
        title: '1994',
      },
      {
        id: 1,
        title: '2077',
      },
      {
        id: 2,
        title: '1812',
      },
      {
        id: 3,
        title: '2023',
      },
    ]
  },
  {
    id: 0,
    type: QuestionTypes.checkbox,
    question: 'Еще какой-то вопрос',
    answers: [
      {
        id: 0,
        title: '11',
      },
      {
        id: 1,
        title: '222',
      },
      {
        id: 2,
        title: '333',
      }
    ]
  },
  {
    id: 0,
    type: QuestionTypes.text,
    question: 'Тут надо будет что-то написать. Мол это вопрос, Ясно?',
  }
]
