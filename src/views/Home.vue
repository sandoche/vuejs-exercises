<template>
  <div class="home">
    <compteur/>
    <liste/>
    <todo/>
  </div>
</template>

<script>
import Compteur from '@/components/Compteur.vue'
import Liste from '@/components/Liste.vue'
import Todo from '@/components/Todo.vue'

export default {
  name: 'home',
  components: {
    Compteur,
    Liste,
    Todo
  }
}
</script>
