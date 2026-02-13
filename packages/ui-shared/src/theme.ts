// 所有框架共用的设计系统
export const theme = {
  color: {
    primary: '#165DFF',
    success: '#00B42A',
    warning: '#FF7D00',
    danger: '#F53F3F',
    secondary: '#86909C',
    white: '#fff',
    bg: '#F2F3F5',
  },
  size: {
    small: '4px 8px',
    middle: '8px 16px',
    large: '12px 24px',
  },
  radius: {
    none: '0',
    small: '2px',
    normal: '4px',
    large: '8px',
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
  },
}

export type Theme = typeof theme
