<template>
  <div style="text-align: left">
    <LoadingAnimation v-if="loading"/>
    <div v-if="!loading">
      <ul>
        <li v-for="(language, index) in listLanguages" :key="index">{{ language }} - {{ mapLanguages[language] }} </li>
        <pre>
          {{ mapLanguages }}
        </pre>
      </ul>
    </div>
  </div>
</template>

<script>
import LoadingAnimation from '@/components/LoadingAnimation.vue'

export default {
  name: 'Trending',
  components: {
    LoadingAnimation
  },
  data () {
    return {
      listLanguages: [],
      mapLanguages: {},
      loading: false
    }
  },
  created () {
    this.loading = true
    fetch('https://github-trending-api.now.sh/repositories')
      .then((response) => {
        return response.json()
      })
      .then((myJson) => {
        const objetTrie = myJson.filter((element) => {
          return element.language
        })
        const mapLanguages = {}
        const listLanguages = []
        for (let element of objetTrie) {
          const languageName = element.language
          const languageStars = element.stars
          if(mapLanguages[languageName] >= 1) {
            mapLanguages[languageName] = mapLanguages[languageName] + languageStars
          } else {
            mapLanguages[languageName] = languageStars
            listLanguages.push(languageName)
          }
        }
        this.mapLanguages = mapLanguages
        this.listLanguages = listLanguages
        this.loading = false
      })
  }
}
</script>