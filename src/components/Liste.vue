<template>
  <div>
    <hr>
    <ul>
      <li v-for="(article, index) in listeObjets" :key="index" @click="montrerProduit(index)">{{ article.nom }} - {{ article.prix }} €</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listeObjets: [
        {
          id: 1,
          prix: 10,
          nom: 'Chaussettes'
        },
        {
          id: 2,
          prix: 30,
          nom: 'Chaussures'
        },
        {
          id: 3,
          prix: 50,
          nom: 'Pantalon'
        }
      ]
    }
  },
  methods: {
    montrerProduit (index) {
      alert(this.listeObjets[index].nom)
    }
  }
}
</script>
