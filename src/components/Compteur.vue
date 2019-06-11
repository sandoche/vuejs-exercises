<template>
  <div class="compteur">
    <p>{{ valeur }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">Reset</button>
    <hr>
    <input v-model="nombre">
    <button @click="set(nombre)">Changer nombre</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Compteur',
  data () {
    return {
      nombre: 0
    }
  },
  methods: {
    ...mapActions({
      increment: 'compteur/incrementValeur',
      decrement: 'compteur/decrementValeur',
      reset: 'compteur/reset',
      set: 'compteur/setValeur'
    })
  },
  computed: {
    ...mapGetters({
      valeur: 'compteur/valeur'
    })
  }
}
</script>

<style>
</style>
