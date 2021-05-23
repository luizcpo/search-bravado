<template>
    <div class="search">
        <input id="search-box" type="text" v-model="query">
        <RecycleScroller
          class="scroller"
          :items="users"
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
// import VirtualList from 'vue-virtual-scroll-list'
import { RecycleScroller } from 'vue-virtual-scroller'

export default {
  async asyncData({ $axios }) {
    const users = await $axios.$get('http://localhost:3010')

    return { users, query: "", userComponent: User }
  },
  components: { RecycleScroller }
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