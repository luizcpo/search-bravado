<template>
  <div class="user">
    <img v-bind:src="source.avatar" />
    <h3 class="name" v-html="highlights(source.name)"></h3>
    <p class="title" v-html="highlights(source.title)"></p>
    <p class="address" v-html="highlights(source.address+', '+source.city)"></p>
    <span class="email" v-html="highlights(source.email)"></span>
    <hr />
    <a class="action" href="#">SKIP SELECTION</a>
  </div>
</template>

<script>
export default {
  props: {
    source: Object,
    query: String
  },
  methods: {
    highlights(text){
      if(this.query != "") {
        var iQuery = new RegExp(this.query, "ig")
        return text.replace(iQuery, function(matchedTxt,a,b){
          return ('<span class=\'highlight\'>' + matchedTxt + '</span>')
        })
      }else{
        return text
      }
    }
  }
}
</script>

<style lang="sass" scoped>
$font-size-small: 13px

.user
  position: relative
  flex: 1
  box-sizing: border-box
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24)
  border-radius: 3px
  margin-bottom: 21px
  border: 1px solid rgba(0, 0, 0, 0)
  height: 136px

  &:hover
    border: 1px solid #4765FF
  
  h3.name
    font-weight: normal
    font-size: 24px
    line-height: 32px
    color: rgba(0, 0, 0, 0.87)
    margin-top: 15px
  
  p.title
    font-weight: bold
    font-size: 14px
    line-height: 20px
    color: rgba(0, 0, 0, 0.543846)
  
  p.address
    font-weight: normal
    font-size: 14px
    line-height: 20px
    color: rgba(0, 0, 0, 0.543846)

  hr
    border: 1px solid rgba(0, 0, 0, 0.12)
    margin: 1.5px 0 14.5px 0
  
  span.email
    position: absolute
    top: 10px
    right: 9px
    font-weight: normal
    font-size: 14px
    line-height: 16px
    color: rgba(0, 0, 0, 0.54)

  img
    float: left
    width: 134px
    height: 136px
    margin-right: 27px
    border-radius: 3px 0 0 3px
    background: rgba(0, 0, 0, 0.25)

  a.action
    text-decoration: none
    font-weight: 500
    font-size: 14px
    line-height: 16px
    color: #009688
    margin-left: 5px
  
  @media screen and (max-width: 768px)
    img
      margin-right: 12px
    
    h3.name
      font-size: 18px
      line-height: 18px
      margin-top: 22px
    
    p.title
      font-size: $font-size-small
      line-height: $font-size-small

    p.address
      font-size: $font-size-small
      line-height: $font-size-small
    
    span.email
      font-size: $font-size-small
      line-height: $font-size-small
      top: 3px
      right: 3px
    
    hr
      margin: 1.5px 0 4.5px 0

    a.action
      font-size: $font-size-small
      line-height: $font-size-small
  </style>