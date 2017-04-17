<template lang="html">
<div class="box">
	<div class="field has-addons" v-if="picked === 'aniversario'">
	 	<datepicker placeholder="Selecione o aniversario" inputClass="input" format="dd-MM-yyyy" v-model="de"></datepicker>
		<datepicker placeholder="Selecione o aniversario" inputClass="input" format="dd-MM-yyyy" v-model="ate"></datepicker>
	</div>
	<div v-else class="field">
		<p class="control">
			<input class="input" type="text" placeholder="Digite o termo buscado" v-model="termoBuscado">
		</p>
	</div>
	<div class="field">
		<p class="control">
			<label class="radio">
			  <input type="radio" name="type" value="nome" v-model="picked">
			  	Nome
			</label>
			<label class="radio">
				<input type="radio" name="type" value="apelido" v-model="picked">
				Apelido
			</label>
			<label class="radio">
			  <input type="radio" name="type" value="aniversario" v-model="picked">
			  	Aniversario
			</label>
		</p>
	</div>
	<div class="field">
		<p class="control">
			<button class="button is-primary" @click.prevent="searchContact">Buscar</button>
		</p>
	</div>

	<div class="columns is-multiline">
	    <single-contato v-for="contact in contacts" 
                    :nome="contact.nome"
                    :apelido="contact.apelido"
                    :telefone="contact.telefone"
                    :aniversario="contact.aniversario"
                    :foto="contact.foto"
                    :idUser="contact.id"
                    :key="contact">
    </single-contato>
  </div>
</div>


</template>

<script>

import Datepicker from 'vuejs-datepicker'
import SingleContato from "./SingleContato.vue";
import axios from "axios";

export default {
	components: {
		SingleContato,
		Datepicker
	},
    data(){
        return{
            picked: "nome",
            termoBuscado: "",
            de: "",
            ate: "",
			contacts: []
        }
    },
    methods: {
    	searchContact: function(){
			var vm = this;
			axios.get(this.urlAPI)
			.then(function (response) {
				vm.contacts = response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
    	}
    },
    computed: {
    	urlAPI(){
    		if(this.picked === "nome" || this.picked === "apelido"){
    			return "http://ec2-34-223-234-6.us-west-2.compute.amazonaws.com:3000/contatos?"+this.picked + "=" + this.termoBuscado
    		}
    		return "http://ec2-34-223-234-6.us-west-2.compute.amazonaws.com:3000/contatos?de=" + this.de + "&ate=" + this.ate
    	}
    },
	watch:{
		de(){
			this.de = (new Date(this.de)).toISOString().slice(0,10);
		},
		ate(){
			this.ate = (new Date(this.ate)).toISOString().slice(0,10);
		}
	}
}
</script>

<style lang="scss">
    .input{
		margin: 5px;
    }
    
</style>