/**
 * 项目通用类型定义 - 入口文件
 */

// 通用响应类型（适配 API 接口）
export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
  success: boolean
}

// 通用分页参数
export interface PaginationParams {
  page: number
  pageSize: number
  keyword?: string
}

// 通用空函数（避免重复定义）
export type EmptyFn = () => void
