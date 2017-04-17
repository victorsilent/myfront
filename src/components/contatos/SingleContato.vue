<template>
    <div v-show="!deleted" class="column is-6-tablet is-4-desktop">
      <div class="contact">
        <div class="contact__image">
          <figure class="image is-64x64">
            <img :src="'https://contatosf30.s3-sa-east-1.amazonaws.com/' + foto">
          </figure>
        </div>
        <div class="contact__info">
          <div class="contact__info__name">
            {{nome}} - {{apelido}}
          </div>
          <div class="contact__info__number">
            {{telefone}}
          </div>
          <div class="contact__info__number">
            
            {{aniversario | aniversarioFilter}}
          </div>
        </div>
        <footer class="options-footer">
          <router-link :to="{name: 'EditContact', params: { id: idUser } }" class="options-footer__item">Edit</router-link>
          <a @click="deteleContact()" class="options-footer__item options-footer__item--delete">Delete</a>
        </footer>
      </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    props: ["nome", "telefone", "idUser", "apelido", "foto", "aniversario"],
    data(){
        return{
            deleted: false,
        }
    },
    methods:{
      deteleContact(){
        this.deleted = true;
        var vm = this;
        axios.delete('http://ec2-34-223-234-6.us-west-2.compute.amazonaws.com:3000/contatos/'+vm.idUser)
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
    .contact{
      padding: 10px;
      border-radius: 2px;
      display: flex;
      align-items: center;
      border: 1px solid rgba(#666, 0.1);
      background: #fff;
      width: 100%;
      flex-wrap: wrap;
      &__info{
        padding-left: 10px;
        &__name{
          font-size: 1.3em;
          line-height: 1em;
        }
        &__number{
          margin-top: 0;
          font-size: 0.9em;
          color: #666;
        }
      }
    }
    .options-footer{
      width: 100%;
     display: flex;
     justify-content: flex-end;
     &__item{
       font-size: 0.9em;
       &--delete{
         color: #ff3860;
       }
       &:first-child{
         padding-right: 10px;
       }

     }
    }
</style>