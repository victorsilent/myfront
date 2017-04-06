<template>
  <div class="columns is-multiline">
    <single-contato v-for="contact in contacts" 
                    :name="contact.nome"
                    :number="contact.aniversario"
                    :key="contact">
    </single-contato>
  </div>

</template>

<script>
import SingleContato from "./SingleContato.vue"
import axios from "axios";
export default {
    data(){
        return{
            contacts: [
            ],
            teste: {},
        }
    },
    created(){
      var vm = this;
      axios.get("http://ec2-52-38-170-214.us-west-2.compute.amazonaws.com:3000/contatos")
      .then(function (response) {
        vm.contacts = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    components:{
      SingleContato: SingleContato
    }
}
</script>

<style lang="scss">
 
</style>