import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url:'/mock/login',
    method:'post',
    response: () => {
      return {
        code: 200,
        token: 'g564a4g56swagera544g3d65sa'
      }
    }
  },
  {
    url:'/mock/tokentimeout',
    method:'get',
    response: () => {
      return {
        code:401
      }
    }
  },
  {
    url:'/mock/getUserInfo',
    method:'get',
    response: () => {
      return {
        code:200,
        data:[
          'System','UserAuth',"RoleAuth","Announcement","Log","LoginLog","OperationLog","test","test1"
        ]
      }
    }
  }
] as MockMethod[]
