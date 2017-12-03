<template>
  <div id="app">
    <h2>{{title}}</h2>
    <table class="hovertable">
      <tr>
        <th>ID</th><th>书名</th><th>作者</th><th>出版社</th><th>价格</th><th>简介</th>
      </tr>
      <tr v-for="row in rsp">
        <td>{{row.id}}</td>
        <td>{{row.fullName}}</td>
        <td>{{row.author}}</td>
        <td>{{row.publisher}}</td>
        <td>{{row.price}}</td>
        <td>{{row.introduce}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: '我的家',
      rsp: []
    }
  },
  created () {
    this.$http.get('/book')
      .then((res) => {
      this.rsp = res.body
    }, (error) => {
      cosole.log(`获取数据失败：${error}`)
    })
  }

}
</script>

<style>
  #app h2 {
    text-align: center;
  }

  table.hovertable {
    font-family: verdana,arial,sans-serif;
    font-size:11px;
    color:#333333;
    border-width: 1px;
    border-color: #999999;
    border-collapse: collapse;
    width: 100%;
  }
  table.hovertable th {
    background-color:#c3dde0;
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #a9c6c9;
  }
  table.hovertable tr {
    background-color:#d4e3e5;
  }
  table.hovertable td {
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #a9c6c9;
  }
</style>
