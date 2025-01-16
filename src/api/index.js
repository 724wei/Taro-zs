import request from "../utils/request";
export function testReq(params){
  return request({
    url:'order/oog/type',
    method:'get',
    params
  })
}
