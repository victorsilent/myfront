<template>
    <div class="box">
        <h1 class="title is-5">Informe os dados para cadastrar o contato</h1>
        <div class="columns">
          <form class="column is-half">
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
                          v-validate="'required|min:3|max:26'"
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
            contato: {
              nome: "",
              apelido: "",
              email: "",
              telefone: "",
              aniversario: ""
            }
        }
    },
    components: {
      Datepicker
    },
    methods:{
      pushData: function(){
//         app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  D$
//   next();
// });

        let formData = new FormData();
        //console.log(this.$refs.avatar.files[0])
        let datestr = (new Date(this.contato.aniversario)).toISOString();
        formData.append('avatar', this.$refs.avatar.files[0]);
        formData.append('nome',this.contato.nome);
        formData.append('email',this.contato.email);
        formData.append('apelido',this.contato.apelido);
        formData.append('telefone',this.contato.telefone);
        formData.append('aniversario',datestr);
        
        var vm = this;
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        axios.post('http://ec2-34-223-234-6.us-west-2.compute.amazonaws.com:3000/contatos/',
          formData
        )
        .then(function (response) {
          vm.$router.push("/");
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


