<template>
  <div id="app">
        <sidebar></sidebar>
        <main-app></main-app>
    </div>
</template>

<script>
import Sidebar from './components/layout/Sidebar.vue'
import MainApp from './components/layout/MainApp.vue'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
    Sidebar: Sidebar,
    MainApp: MainApp,
  }
}
</script>

<style lang="scss">
  @import '~bulma';
  html{
    background: #fafafa;
    height: 100%;
  }
  

  .panel-heading{
    font-size: 1.3em;
  }
</style>
