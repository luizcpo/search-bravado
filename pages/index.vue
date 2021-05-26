<template>
    <div class="search">
        <input id="search-box" type="text" v-model="query">
        <RecycleScroller
          class="scroller"
          :items="resultUsers"
          :item-size="157"
          key-field="email"
          v-slot="{ item }"
        >
          <User :source="item" :query="query" />
        </RecycleScroller>
    </div>
</template>

<script>
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import User from '@/components/User'
import { RecycleScroller } from 'vue-virtual-scroller'

export default {
  async asyncData({ $axios }) {
    let users = await $axios.$get('https://bravado-users-api.herokuapp.com/')
    
    users = users.sort((a, b) =>{
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
    })
    
    return { users, query: "", userComponent: User }
  },
  components: { RecycleScroller },
  computed: {
    resultUsers() {
      if(this.query) { 
        return this.users.filter(user => 
          user.name.toLowerCase().includes(this.query.toLowerCase()) ||
          user.title.toLowerCase().includes(this.query.toLowerCase()) ||
          user.email.toLowerCase().includes(this.query.toLowerCase()) ||
          user.address.toLowerCase().includes(this.query.toLowerCase()) ||
          user.city.toLowerCase().includes(this.query.toLowerCase())
        )
      } else {
        return this.users
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.search
  display: flex
  background: #FFFFFF
  flex-direction: column
  max-width: 564px
  margin: 50px auto
  padding: 0 12px

  .scroller
    height: 628px

  input#search-box
    background: url(assets/img/search-icon.png) 15px 17px no-repeat
    background-color: #FAFAFA
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24)
    border: none
    border-radius: 2px
    font-weight: normal
    font-size: 24px
    line-height: 28px
    color: rgba(0, 0, 0, 0.75)
    padding: 12px 12px 12px 50px
    -webkit-appearance: none
    margin: 20px 0
    outline: none

    &:focus
        border: none

@media screen and (max-width: 768px)
  .search
    margin: 0 auto
</style>