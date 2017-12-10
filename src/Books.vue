<template>
  <div id="books">
    <div>
      <form>
        <input/><button>搜索</button>
      </form>
    </div>
    <div class="booklist">
      <table class="hovertable">
        <tr>
          <th>书名</th><th>作者</th><th>出版社</th><th>价格</th><th>简介</th>
        </tr>
        <tr v-for="row in rsp._embedded.books">
          <td>{{row.fullName}}</td>
          <td>{{row.author}}</td>
          <td>{{row.publisher}}</td>
          <td>{{row.price}}</td>
          <td>{{row.introduce}}</td>
        </tr>
      </table>
    </div>
    <div class="bookadd">
      <form>
        <table>
          <tr>
            <td>书&nbsp;&nbsp;&nbsp;名</td><td><input/></td>
          </tr>
          <tr>
            <td>作&nbsp;&nbsp;&nbsp;者</td><td><input/></td>
          </tr>
          <tr>
            <td>出版社</td><td><input/></td>
          </tr>
          <tr>
            <td>价&nbsp;&nbsp;&nbsp;格</td><td><input/></td>
          </tr>
          <tr>
            <td>简&nbsp;&nbsp;&nbsp;介</td><td><input/></td>
          </tr>
        </table>
        <input type="submit" value="提交"/>
        <input type="reset" value="重设"/>
      </form>
    </div>
  </div>
</template>

<style>
  div.books {
    width: 100%;
  }
  div.booklist {
    float: left;
    width: 80%;
  }
  div.bookadd {
    float: left;
    width: 20%;
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

<script>
  export default {
    name: 'books',
    data () {
      return {
        rsp: []
      }
    },
    created () {
      this.$http.get('/books/')
        .then((res) => {
          this.rsp = res.body
        }, (error) => {
          cosole.log(`获取数据失败：${error}`)
        })
    }

  }
</script>
