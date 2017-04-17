<template>
    <div class="box">
        <h1 class="title is-5">Informe os dados para editar o contato</h1>
        <div class="columns">
          <form action="/" class="column is-half">
	            <div class="field">
                  <label class="label">Nome</label>
                  <p class="control">
                    <input 
                          v-model="contato.nome"
                          v-validate="'required|min:3|max:60'"
                          :class="{'input': true, 'is-danger': errors.has('nome') }"
                          name="nome"
                          type="text"
                          placeholder="Nome para o contato">
                    <span 
                          v-show="errors.has('nome')"
                          class="help is-danger">{{ errors.first('nome') }}
                    </span>
                  </p>
                </div>

                <div class="field">
                  <label class="label">Apelido</label>
                  <p class="control">
                    <input  
                          v-model="contato.apelido"
                          v-validate="'required|min:3|max:24'"
                          :class="{'input': true, 'is-danger': errors.has('apelido') }"
                          name="apelido"
                          type="text" 
                          placeholder="Apelido para o contato">
                    <span 
                          v-show="errors.has('apelido')"
                          class="help is-danger">{{ errors.first('apelido') }}
                    </span>
                  </p>
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <p class="control">
                    <input 
                          v-validate="'required|email'"
                          v-model="contato.email" 
                          :class="{'input': true, 'is-danger': errors.has('email') }"
                          name="email"
                          type="text"
                          placeholder="Email do contato"
                          >
                          
                    <span 
                          v-show="errors.has('email')"
                          class="help is-danger">{{ errors.first('email') }}
                    </span>
                  </p>
                </div>

                <div class="field">
                  <label class="label">Telefone para contato</label>
                  <p class="control">
                    <input 
                          v-mask="'(##) #####-####'"
                          v-model="contato.telefone"
                          v-validate="'required|min:14|max:15'"
                          :class="{'input': true, 'is-danger': errors.has('telefone') }"
                          name="telefone"
                          type="text" 
                          placeholder="Numero do telefone">
                    <span 
                          v-show="errors.has('telefone')"
                          class="help is-danger">{{ errors.first('telefone') }}
                    </span>
                  </p>
                </div>
                <div class="field">
                  <label class="label">Aniversário do contato</label>
                  <p class="control">
                    <datepicker                  
                              placeholder="Selecione o aniversario"
                              inputClass="input"
                              format="dd-MM-yyyy"
                              v-model="contato.aniversario"></datepicker>
                  </p>
                </div>

                <div class="field">
                  <label class="label">Foto</label>
                  <p class="control">
                    <input 
                          v-validate="'required'"
                          :class="{'is-danger': errors.has('foto') }"
                          name="foto"
                          ref="avatar"
                          type="file"
                          placeholder="Nome para o contato">
                    <span 
                          v-show="errors.has('foto')"
                          class="help is-danger">{{ errors.first('foto') }}
                    </span>
                  </p>
                </div>

                <p class="control">
                  <button 
                          :disabled="!fields.valid()"
                          @click.prevent="pushData"
                          type="submit"
                          class="button is-primary">Cadastrar Contato</button>
                </p>

          </form>
        </div>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import axios from "axios";
export default {
    data(){
        return{
            contato: {}
        }
    },
    created(){

    	const vm = this;
      axios.get("http://ec2-34-223-234-6.us-west-2.compute.amazonaws.com:3000/contatos/" + this.$route.params.id)
      .then(function (response) {
        vm.contato = response.data[0];
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    methods:{

      pushData: function(){
        const formData = new FormData();

        formData.append('nome',this.contato.nome);
        formData.append('email',this.contato.email);
        formData.append('apelido',this.contato.apelido);
        formData.append('telefone',this.contato.telefone);
        formData.append('aniversario',this.contato.aniversario);

        const vm = this;
        axios.put('http://ec2-34-223-234-6.us-west-2.compute.amazonaws.com:3000/contatos/'+ vm.contato.id, 
          vm.contato
        )
        .then(function (response) {
          if(response.status === 200){
            vm.$router.push("/");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    },
    components:{
      Datepicker
    }
}
</script>

<style lang="scss">
    
</style>