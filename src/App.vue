<template>
  <div id="app">
    <h2>{{title}}</h2>
    <div>
      <ul>
        <li>
          <router-link to="/booklist/">图书</router-link>
        </li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: '我的家',
    }
  },
}
</script>

<style>
  #app h2 {
    text-align: center;
  }
</style>
