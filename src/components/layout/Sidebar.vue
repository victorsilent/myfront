<template>
    <aside class="menu">
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
            
        }
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
  }
</style>