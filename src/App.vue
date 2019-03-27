<template>
  <div id="app">
    <navbar/>
    <b-alert variant="success" show dismissible>App loaded with Bootstrap!</b-alert>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  name: 'App',

  components: {
    Navbar
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.alert {
  text-align: center;
}
</style>
