<template>
  <div>
    <LoadingAnimation v-if="loading"/>
    <div v-if="!loading">
      Kanye dit: "{{ citation }}"
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LoadingAnimation from '@/components/LoadingAnimation.vue'

export default {
  name: 'Kanye',
  components: {
    LoadingAnimation
  },
  created () {
    this.getCitation()
  },
  methods: {
    ...mapActions({
      getCitation: 'kanye/getCitation'
    })
  },
  computed: {
    ...mapGetters({
      citation: 'kanye/citation',
      loading: 'kanye/loading'
    })
  }
}
</script>
