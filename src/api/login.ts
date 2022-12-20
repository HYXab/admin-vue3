import request from "@/utils/request";

export const login = (username:string,password:string) => {
  return request({
    method:'post',
    url:'/login',
    data:{
      username,password
    }
  })
}

export const test = () => {
  return request({
    method:'get',
    url:'/tokentimeout'
  })
}

export const getUserInfo = () => {
  return request({
    method:'get',
    url:'/getUserInfo'
  })
}