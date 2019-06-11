import {
  AJOUT_TACHE,
  EFFECTUER_TACHE
} from '../mutation-types'

const state = {
  listeTaches: []
}

function ajouterTache (tacheUtilisateurTexte) {
  return { type: AJOUT_TACHE, tacheUtilisateurTexte }
}

function effectuerTache (index) {
  return { type: EFFECTUER_TACHE, index }
}

const getters = {
  listeTaches: state => state.listeTaches
}

const actions = {
  ajouterTache ({ commit }, tacheUtilisateurTexte) {
    commit(ajouterTache(tacheUtilisateurTexte))
  },
  effectuerTache ({ commit }, index) {
    commit(effectuerTache(index))
  }
}

const mutations = {
  [AJOUT_TACHE] (state, payload) {
    const tache = {
      nom: payload.tacheUtilisateurTexte,
      done: false
    }
    state.listeTaches.push(tache)
  },
  [EFFECTUER_TACHE] (state, payload) {
    state.listeTaches[payload.index].done = !state.listeTaches[payload.index].done
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
