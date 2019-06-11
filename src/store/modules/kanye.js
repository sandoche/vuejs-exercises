import {
  SET_LOADING,
  SET_CITATION
} from '../mutation-types'

const state = {
  citation: '',
  loading: false
}

function setLoading (valeur) {
  return { type: SET_LOADING, valeur }
}

function setCitation (valeur) {
  return { type: SET_CITATION, valeur }
}

const actions = {
  getCitation ({ commit }) {
    commit(setLoading(true))
    fetch('https://api.kanye.rest')
      .then((response) => {
        return response.json()
      })
      .then((myJson) => {
        commit(setCitation(myJson.quote))
        commit(setLoading(false))
      })
  }
}

const getters = {
  citation: state => state.citation,
  loading: state => state.loading
}

const mutations = {
  [SET_LOADING] (state, payload) {
    state.loading = payload.valeur
  },
  [SET_CITATION] (state, payload) {
    state.citation = payload.valeur
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}