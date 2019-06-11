<template>
  <div>
    <hr>
    <input v-model="tacheUtilisateur">
    <button @click="ajouterTacheEtEffacerFormulaire(tacheUtilisateur)">Ajouter tâche</button>
    <ul>
      <li v-for="(tache, index) in listeTaches" :key="index"><input type="checkbox" @click="effectuerTache(index)"><span :class="{'done': tache.done}">{{ tache.nom | uppercase }}</span></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Todo',
  data () {
    return {
      tacheUtilisateur: ''
    }
  },
  methods: {
    ...mapActions({
      ajouterTache: 'todo/ajouterTache',
      effectuerTache: 'todo/effectuerTache'
    }),
    ajouterTacheEtEffacerFormulaire (tacheUtilisateur) {
      this.ajouterTache(tacheUtilisateur)
      this.tacheUtilisateur = ''
    }
  },
  computed: {
    ...mapGetters({
      listeTaches: 'todo/listeTaches'
    })
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase() + ' Salut'
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
