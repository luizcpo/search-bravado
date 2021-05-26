export const state = () => ({
  users: []
})

export const getters = {

}

export const mutations = {
  addUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  async loadAndSortUsers({commit}) {
    let fileUsers = await this.$axios.$get('https://bravado-users-api.herokuapp.com/')
    
    fileUsers = fileUsers.sort((a, b) =>{
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
    })
    
    commit("addUsers", fileUsers)
  }
}