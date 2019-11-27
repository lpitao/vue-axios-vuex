<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
    // 并发请求：同时进行多个请求，并统一处理返回值得时候
  name: 'axios2-3',
  created(){
      axios.all(
          [
              axios.get('/data.json'),
              axios.get('/city.json')
          ]
      ).then(
          axios.spread( (dataRes, cityRes) => {
              console.log(dataRes,cityRes)
          })
      )
  }
}
</script>
