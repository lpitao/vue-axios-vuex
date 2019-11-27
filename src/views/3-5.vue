<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
// 用于取消正在进行的http的请求

export default {
  name: 'axios3-5',
  created(){
      let source = axios.CancelToken.source()
      axios.get('/data.json',{
        cancelToken: source.token
      }).then( res=> {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      //取消请求
      source.cancel('cancel http');

      //商城 3-5s 
  }
}
</script>
