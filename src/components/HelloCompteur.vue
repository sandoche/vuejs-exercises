<template>
  <div>
    <p>Hello {{ valeur }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Compteur',
  computed: {
    ...mapGetters({
      valeur: 'compteur/valeur'
    })
  }
}
</script>

<style>
</style>
