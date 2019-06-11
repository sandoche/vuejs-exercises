import Vue from 'vue'
import Vuex from 'vuex'
import compteur from './modules/compteur'
import todo from './modules/todo'
import kanye from './modules/kanye'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    compteur,
    todo,
    kanye
  }
})
