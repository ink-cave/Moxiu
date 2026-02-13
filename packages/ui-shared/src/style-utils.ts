import { theme } from './theme'

// 按钮通用样式映射（所有框架都用这一个逻辑！）
export const getButtonStyles = (
  type: 'primary' | 'secondary' | 'danger',
  size: 'small' | 'middle' | 'large'
) => {
  return {
    backgroundColor: theme.color[type],
    padding: theme.size[size],
    borderRadius: theme.radius.normal,
    border: 'none',
    color: theme.color.white,
    cursor: 'pointer',
  }
}

// 禁用状态通用样式
export const getDisabledStyles = () => ({
  opacity: 0.6,
  pointerEvents: 'none',
})
