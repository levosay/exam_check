import { GetQuestionsRequest } from '@/src/api/endpoints'

export type TestModuleProps = GetQuestionsRequest

export type TimeState = Record<'hours' | 'min' | 'sec', number>
