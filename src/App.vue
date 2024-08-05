<template>
    <NavBar/>
    <router-view></router-view>
</template>

<script>
// eslint-disable-next-line camelcase
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">

</style>
