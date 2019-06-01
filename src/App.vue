<template>
  <div id="app">
    <navbar />
    <b-container class="view">
      <router-view />
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
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #393d5e;
}

/* .view {
  margin
} */
</style>
