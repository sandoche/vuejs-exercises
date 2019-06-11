import {
  COMPTEUR_INCRETEMENT_VALEUR,
  COMPTEUR_DECREMENT_VALEUR,
  COMPTEUR_RESET_VALEUR,
  COMPTEUR_SET_VALEUR
} from '../mutation-types'

const state = {
  valeur: 0
}

function incrementValeur () {
  return { type: COMPTEUR_INCRETEMENT_VALEUR }
}

function decrementValeur () {
  return { type: COMPTEUR_DECREMENT_VALEUR }
}

function reset () {
  return { type: COMPTEUR_RESET_VALEUR }
}

function setValeur (valeurUtilisateur) {
  return { type: COMPTEUR_SET_VALEUR, valeurUtilisateur }
}

const getters = {
  valeur: state => state.valeur
}

const actions = {
  incrementValeur ({ commit }) {
    commit(incrementValeur())
  },
  decrementValeur ({ commit }) {
    commit(decrementValeur())
  },
  reset ({ commit }) {
    commit(reset())
  },
  setValeur ({ commit }, valeurUtilisateur) {
    commit(setValeur(valeurUtilisateur))
  }
}

const mutations = {
  [COMPTEUR_INCRETEMENT_VALEUR] (state, payload) {
    state.valeur++
  },
  [COMPTEUR_DECREMENT_VALEUR] (state, payload) {
    if (state.valeur > 0) {
      state.valeur--
    }
  },
  [COMPTEUR_RESET_VALEUR] (state, payload) {
    state.valeur = 0
  },
  [COMPTEUR_SET_VALEUR] (state, payload) {
    state.valeur = payload.valeurUtilisateur
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
