import { http } from '@/utils/http'

/** GET 请求
 * 获取全部积分
 */
export const getFooAPI = () => {
  //   return http.get('/buyer/app/product/SumPoint')
  return http({
    url: `/buyer/app/product/SumPoint`, // 看这里，前缀不用！！！
    method: 'GET',
  })
}

/** POST 请求
 * 获取即将开奖
 */
export const postFooAPI = (query: any) => {
  return http({
    url: `/buyer/app/product/willOpen`, // 看这里，前缀不用！！！
    method: 'POST',
    query,
  })
}
