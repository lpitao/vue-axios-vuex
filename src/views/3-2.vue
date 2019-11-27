<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'axios3-2',
  created(){
       axios.create({
          baseURL :'http://localhost:8080',//请求的域名基本地址，默认吧baseurl拼接在相对路径前面
          timeout: 1000, //请求超时时长（ms）
          url:'/data.json',//求路径
          method:'get,post,put,patch,delete',//获取，提交（新建，注册），编辑（全部提交，部分提交） 
          headers:{
              tolen:''//当前人的身份信息
          },//请求头
          params:{},//请求参数拼接在url
          data:{}//请求参数放在请求体里
      })
      //1 axios全局配置
      axios.defaults.timeout = 1000
      axios.defaults.baseUrl= 'http://localhost:8080'
      //2 axios实例配置
      let instance = axios.create()
      instance.defaults.timeout = 3000//修改配置
      //3 axios请求配置
      instance.get('/data.json',{
          timeout: 5000
      })

    //   实际开发
    // 有两种请求接口 
    let instance = axios.create({
        baseURL : 'http:localhost:9090',
        timeout: 1000
    })
    let instance1 = axios.create({
        baseURL :'http:localhost:9091',
        timeout:3000
    })
    // baseurl,timeout,url ,method
    instance.get('/contactList',{
        params:{}
    }).then(
        (res) => {
            console.log(res)
        }
    )
    instance1.get('/orderList',{
        timeout: 5000
    }).then( res=> {
        console.log(res)
    })
  }
}
</script>
