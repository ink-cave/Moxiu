import { BUTTON_TYPES, BUTTON_SIZES } from './constants'

export type ButtonType = (typeof BUTTON_TYPES)[number]
export type ButtonSize = (typeof BUTTON_SIZES)[number]

export type BaseComponentProps = {
  className?: string
  style?: Record<string, any>
}
