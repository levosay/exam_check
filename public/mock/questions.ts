import { IQuestions, QuestionTypes } from '@/src/api/models/questions'

export const questions: IQuestions[] = [
  {
    id: 1,
    type: QuestionTypes.checkbox,
    question: 'В каком году было крещение Руси?',
    answers: [
      {
        id: 2,
        title: '1994',
      },
      {
        id: 3,
        title: '2077',
      },
      {
        id: 4,
        title: '1812',
      },
      {
        id: 5,
        title: '2023',
      },
    ]
  },
  {
    id: 6,
    type: QuestionTypes.checkbox,
    question: 'Еще какой-то вопрос',
    answers: [
      {
        id: 7,
        title: '11',
      },
      {
        id: 8,
        title: '222',
      },
      {
        id: 9,
        title: '333',
      }
    ]
  },
  {
    id: 10,
    type: QuestionTypes.text,
    question: 'Тут надо будет что-то написать. Мол это вопрос, Ясно?',
  }
]
