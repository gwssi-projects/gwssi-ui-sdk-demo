import axios from 'axios'

import {
  Message
} from 'element-ui'
import {
  Notification
} from 'element-ui'

const service = axios.create({
  timeout: 5000
})


// request interceptor
//添加请求拦截器
service.interceptors.request.use(
  error => {
    // Do something with request error
    console.log(error)
    // 静态函数Promise.reject返回一个被拒绝的Promise对象。通过使用Error的实例获取错误原因reason对调试和选择性错误捕捉很有帮助。
    Promise.reject(error)
  }
)

// respone interceptor
service.interceptors.response.use(

  response => {

    if (response.data == null) {
      return response;
    }

    const no = response.data[errNo]
    if (no != null) {

      if (no != "" && no != "0") {

        Notification({
          title: 'ajax错误',
          type: 'error',
          message: response.data[errNo] + ' - ' + response.data[errDes]
        });

        return Promise.reject(response)

      }

      return response

    } else {
      return response
    }
  },

  error => {
    console.log("服务器错误" + error)

    Notification({
      title: 'ajax错误',
      type: 'error',
      message: error.message
    });

    return Promise.reject(error)
  }
)

export default {

  service: service,

  get(url, param) {

    //axios本身就是基于Promise 
    return new Promise((resolve, reject) => {
      service({
        method: 'get',
        url,
        params: param
      }).then(res => {
        resolve(res)
      }).catch(err => {
        //Promise.reject(error)
        reject(err)
      })
    })
  },

  //post请求 
  post(url, param) {
    return new Promise((resolve, reject) => {
      service({
        method: 'post',
        url,
        //post这里用的是data
        data: param
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}