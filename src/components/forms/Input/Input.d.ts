import { InputHTMLAttributes } from 'react'
import { IBaseInputProps } from 'types/forms/input'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement>,
  IBaseInputProps {
}
