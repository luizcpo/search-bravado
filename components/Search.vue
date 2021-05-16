<template>
    <div class="search">
        <input id="search-box" type="text" v-model="query">
        <virtual-list style="height: 785px; overflow-y: auto;"
              :data-key="'email'"
              :data-sources="resultUsers"
              :data-component="userComponent"
              :extra-props="{ query: query }"
            />
    </div>
</template>

<script>
import users_json from 'static/users.json'
import User from './User'
import VirtualList from 'vue-virtual-scroll-list'

export default {
  data() {
    return {
      userComponent: User,
      users: users_json,
      query: ""
    }
  },
  components: { 'virtual-list': VirtualList },
  computed: {
    resultUsers() {
      if(this.query) { 
        return this.users.filter(user => 
          user.name.toLowerCase().includes(this.query.toLowerCase()) ||
          user.title.toLowerCase().includes(this.query.toLowerCase()) ||
          user.email.toLowerCase().includes(this.query.toLowerCase()) ||
          user.address.toLowerCase().includes(this.query.toLowerCase()) ||
          user.city.toLowerCase().includes(this.query.toLowerCase())
        ).sort((a, b) =>{
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
        })
      } else {
        return this.users
      }
    }
  },
  mounted(){
    const path = this.$route.path.replaceAll("/","").replaceAll("-", " ")
    if(path){
      this.query = path
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