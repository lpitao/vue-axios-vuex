<template>
  <div class="home">

  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'axios2-2',
  created(){
    //  get请求：获取数据
    //  post: 提交数据（表单提交+文件上传） post put patch 类似两种传输方式 data表单形式  application/json
    //  put: 更新数据（所有数据推送到后端）
    //  patch： 更新数据（只将修改数据推送到后端）
    //  delete：删除数据

    let data = {
        id: 12
    }
    axios.post('/post', data).then( res => {
        console.log(res)
    })
    axios({
        method:'post',
        url:'/post',
        data:data
    }).then( res => {
        console.log(res)
    })
    axios.get('/data.json',{
         params:{
            id:12
        }
    }).then( (res) => {
      console.log(res)
    }),
    axios({
        method:'get',
        url:'/data.json',
        params:{
            id:12
        }
    }).then(res => {
        console.log(res)
    })

    // form-data
    let formData = new FormData()
    for( let key in data){
        formData.append(key, data[key])
    }
    axios.post('post',formData).then(
        res => {
            console.log(res)
        }
    )

    // put请求 axios.put(url,data, config)
    axios.put('/put', data).then(res => {
        console.log(res)
    })

    // delete请求 axios.delete(url, config)
    axios.delete("/delete",{
        params:{
            id:12
        }
    }).then( res=> {
        console.log(res)
    })
  }
}
</script>
