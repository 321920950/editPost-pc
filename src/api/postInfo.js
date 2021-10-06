// 全局请求配置
import request from '@/utils/reqest'

// 获取编辑岗位数据
export const getEditPost = params => {
  return request({
    method: 'GET',
    url: 'mock/0ae54bb2f4f01b984a5c265147e48e3f/member/mod',
    params
  })
}
