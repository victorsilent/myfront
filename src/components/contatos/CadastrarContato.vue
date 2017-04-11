<template>
    <div class="box">
        <h1 class="title is-5">Informe os dados para cadastrar o contato</h1>
        <div class="columns">
          <form class="column is-half">
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

                <div class="field">
                  <label class="label">Foto</label>
                  <p class="control">
                    <input ref="avatar" type="file" placeholder="Nome para o contato">
                  </p>
                </div>

                <p class="control">
                  <button @click.prevent="pushData" type="submit" class="button is-primary">Cadastrar Contato</button>
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
            contato: {
              nome: "",
              apelido: "",
              email: "",
              telefone: "",
              aniversario: "",
              foto: "Oin"
            }
        }
    },
    methods:{
      pushData: function(){

        let formData = new FormData();
        //console.log(this.$refs.avatar.files[0])
        //formData.append('foto', this.$refs.avatar.files[0]);
        formData.append('nome',this.contato.nome);
        formData.append('email',this.contato.email);
        formData.append('apelido',this.contato.apelido);
        formData.append('telefone',this.contato.telefone);
        formData.append('aniversario',this.contato.aniversario);
        
        var vm = this;
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        axios.post('http://ec2-52-38-170-214.us-west-2.compute.amazonaws.com:3000/contatos',
          formData
        )
      }
    }
}
</script>

<style lang="scss">
    
</style>