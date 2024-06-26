import { ParsedUrlQuery } from 'querystring'

export type THeight = 'h-1' | 'h-2' | 'h-3' | 'h-4' | 'h-5' | 'h-6' | 'h-7'
export type TWidth = 'w-1' | 'w-2' | 'w-3' | 'w-4' | 'w-5' | 'w-6' | 'w-7'
export type TColor =
  | 'main-dark'
  | 'main-light'
  | 'white'
  | 'gray'
  | 'prim'
  | 'gray-light'
  | 'prim-light'
  | 'second-prime'
  | 'second-prime-light'

export interface Params extends ParsedUrlQuery {
  id: string
}


export enum ROLES {
  ADMIN = 'ADMIN',
  USER = 'USER'
}
