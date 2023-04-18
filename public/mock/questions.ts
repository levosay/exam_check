import { IQuestions, QuestionTypes } from '@/src/api/models/questions'

export const questions: IQuestions[] = [
  {
    id: 2380,
    type: QuestionTypes.checkbox,
    question: 'В каком году было крещение Руси?',
    answers: [
      {
        id: 123124,
        title: '1994',
      },
      {
        id: 124124514,
        title: '2077',
      },
      {
        id: 1231,
        title: '1812',
      },
      {
        id: 332,
        title: '2023',
      },
    ]
  },
  {
    id: 853,
    type: QuestionTypes.checkbox,
    question: 'Еще какой-то вопрос',
    answers: [
      {
        id: 25463,
        title: '11',
      },
      {
        id: 243524,
        title: '222',
      },
      {
        id: 5645,
        title: '333',
      }
    ]
  },
  {
    id: 205434,
    type: QuestionTypes.text,
    question: 'Тут надо будет что-то написать. Мол это вопрос, Ясно?',
  }
]
