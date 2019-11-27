<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { promises } from 'dns'

export default {
    // 错误处理，请求错误时进行的处理
  name: 'axios3-4',
  created(){
      axios.interceptors.request.use
      (config=>{
        return config
      }, err => {
          return Promise.reject(err)
      });
      axios,interceptors.response.use
      (res => {
           return res
      }, err=> {
          return Promise.reject(err)
      })
      //例子，添加一个统一错误处理
      let instance = axios.create({});
      instance.interceptors.request
      (config => {
          return config
      }, err => {
          $('#model').show()
          setTimeout(() => {
               $('#model').hide()
          }, 2000);
          //请求错误 一般http状态码以4开头，常见 401超时，404 notfound
          return Promise.reject(err)
      })
      instance.interceptors.response
      (res => {
         return res 
      }, err => {
          $('#model').show()
          setTimeout(() => {
               $('#model').hide()
          }, 2000);
          //响应错误处理 一般http状态码以5开头，500 系统错误， 502 系统重启
          return Promise.reject(err)
      })
      instance.get('/data.json').then
      (res => {
          console.log(res)
      }).catch( err => {
          console.log(err)
      })
  }
}
</script>
