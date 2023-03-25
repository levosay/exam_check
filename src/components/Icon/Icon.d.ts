import { TIcons } from 'types'

type THeight = 'h-1' | 'h-2' | 'h-3' | 'h-4'
type TWidth = 'w-1' | 'w-2' | 'w-3' | 'w-4'
type TColor =
  | 'main-dark'
  | 'main-light'
  | 'white'
  | 'gray'
  | 'gray-light'
  | 'prim-light'
  | 'second-prime'
  | 'second-prime-light'


export interface IIconProps {
  id: TIcons
  height?: THeight
  width?: TWidth
  color?: TColor
}
