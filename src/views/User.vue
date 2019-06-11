<template>
  <div>
    Bienvenue sur la page user {{ $route.query.q }}
  </div> 
</template>

<script>
export default {
  created () {
    console.log(this.$route)
  }
}
</script>