export interface IReviewItem {
  _id: string
  title: string
  userAnswer: string
  passAnswer: string
  pass: boolean
}

export interface IExamItem {
  _id: string
  review: IReviewItem[]
  date: string
  points: number
}

export interface IUser {
  roles: string
  username: string
  __v: number
  _id: string
  exams: IExamItem[]
}
