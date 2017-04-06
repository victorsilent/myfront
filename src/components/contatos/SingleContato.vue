<template>
    <div class="column is-6-tablet is-4-desktop">
      <div class="contact">
        <div class="contact__image">
          <figure class="image is-64x64">
            <img src="http://bulma.io/images/placeholders/128x128.png">
          </figure>
        </div>
        <div class="contact__info">
          <div class="contact__info__name">
            {{name}}
          </div>
          <div class="contact__info__number">
            {{number}}
          </div>
        </div>
        <footer class="options-footer">
          <a class="options-footer__item">Edit</a>
          <a class="options-footer__item options-footer__item--delete">Delete</a>
        </footer>
      </div>
    </div>
</template>

<script>
export default {
    props: ["name", "number", "id"],
    data(){
        return{
            
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