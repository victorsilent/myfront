<template>
    <div class="main-app">
      <h1 class="title is-4 title-section">
          {{this.$route.name}}
      </h1>
      
      <transition :duration="200"
                  mode="out-in"
                  appear
                  name="custom-classes-transition"
                  enter-active-class="animated fadeIn "
                  leave-active-class="animated fadeOut">
        <router-view></router-view>
      </transition>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss">
    .title-section{
      margin-bottom: 10px;
    }
</style>