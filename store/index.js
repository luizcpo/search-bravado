export const state = () => {
  users: []
}

export const getters = {

}

export const actions = {
  loadUsers({commit}) {
    commit("addUsers", fileUsers)
  }
}

export const mutations = {
  addUsers(state, users) {
    state.users = {...users}
  }
}