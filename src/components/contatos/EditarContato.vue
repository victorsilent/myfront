<template>
    <div class="box">
        <h1 class="title is-5">Informe os dados para editar o contato</h1>
        <span></span>
        <div class="columns">
          <form action="/" class="column is-half">
	            <div class="field">
	              <label class="label">Nome</label>
	              <p class="control">
	                <input v-model="contato.nome" class="input" type="text" placeholder="Nome para o contato">
	              </p>
	            </div>

	            <div class="field">
	              <label class="label">Apelido</label>
	              <p class="control">
	                <input  v-model="contato.apelido" class="input" type="text" placeholder="Apelido para o contato">
	              </p>
	            </div>

	            <div class="field">
	              <label class="label">Email</label>
	              <p class="control">
	                <input v-model="contato.email" class="input" type="text" placeholder="Email do contato">
	              </p>
	            </div>

	            <div class="field">
	              <label class="label">Telefone para contato</label>
	              <p class="control">
	                <input v-model="contato.telefone" class="input" type="text" placeholder="Numero do telefone">
	              </p>
	            </div>

	            <div class="field">
	              <label class="label">Aniversário do contato</label>
	              <p class="control">
	                <input  v-model="contato.aniversario" class="input" type="text" placeholder="Data de aniversário ex: ano-mês-dia">
	              </p>
	            </div>

                <p class="control">
                  <button @click.prevent="pushData" type="submit" class="button is-primary">Editar Contato</button>
                </p>
          </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            contato: {}
        }
    },
    created(){

    	var vm = this;
      axios.get("http://ec2-52-38-170-214.us-west-2.compute.amazonaws.com:3000/contatos/" + this.$route.params.id)
      .then(function (response) {
        vm.contato = response.data[0];
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    methods:{

      pushData: function(){
        // var formData = new FormData();
        
        // formData.append('nome',this.contato.nome);
        // formData.append('email',this.contato.email);
        // formData.append('apelido',this.contato.apelido);
        // formData.append('telefone',this.contato.telefone);
        // formData.append('aniversario',this.contato.aniversario);

        var vm = this;
        axios.put('http://ec2-52-38-170-214.us-west-2.compute.amazonaws.com:3000/contatos/'+ vm.contato.id, 
          vm.contato
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
}
</script>

<style lang="scss">
    
</style>