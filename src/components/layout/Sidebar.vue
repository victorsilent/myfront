<template>
    <aside :class="stateFunction" class="menu animated">
        <p class="menu-label">
        Contato App
        </p>
        <ul class="menu-list">
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/cadastrar">Cadastrar Contato</router-link></li>
        <li><router-link to="/listar">Buscar Contatos</router-link></li>
        </ul>
    </aside>
</template>

<script>
export default {
    data(){
        return{
            classIn: true,
            classOut: false,
        }
    },
    computed: {
      stateFunction(){
        return {
          slideInLeft: this.classIn,
          slideOutLeft: this.classOut,
        }
      }
    },
    beforeMount () {
      const vm = this;
      const myDocument = window;
      const WIDTH = 768;
      const handler = () => {
        if (myDocument.innerWidth <= 768){
          vm.classIn = false;
          vm.classOut = true;
          document.querySelector('.menu').style.width = 0;
          document.querySelector('.main-app').style.marginLeft = 0;
        }else{
          vm.classIn = true;
          vm.classOut = false;
          document.querySelector('.menu').style.width = "168px";
          document.querySelector('.main-app').style.marginLeft = "168px";
        }
      }
      document.addEventListener('visibilitychange', handler)
      window.addEventListener('resize', handler)
    }
}
</script>

<style lang="scss">
  .menu{
    position: absolute;
    background: #f6f6f6;
    height: 100%;
    min-width: 168px;
    border-right: 1px solid rgba(0,0,0,0.1);
    overflow: hidden;
  }
  .menu-label{
    margin-top: 10px;
    padding-left: 5px;
  }
  .menu-list > li > a:hover{
    background: #fff;
    padding-left: 20px;
    transition: padding 200ms ease-in;
  }

  .main-app{
    margin-left: 168px;
    padding: 20px;
    transition: all 500ms ease-in 100ms; 
  }
</style>