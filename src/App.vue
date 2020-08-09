<template>
  <div id="app">
    <header></header>
    <main class="main">
      <router-view></router-view>
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
/* html,body {
  height: 100%;
} */

#app {
  /* height: 100%; */
  font-family: Helvetica;
  
}
/* .main {
  min-height: calc(100% - 234px);
} */
</style>
