<template>
  <router-link :to="{ name: 'MoreInfo', params: { id: character.id }}" >{{ character.name }}</router-link>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CharacterInLocation',
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      character: ''
    }
  },
  methods: {
    async get_name (url) {
      const response = await axios.get(url)
      this.character = response.data
    }
  },
  created () {
    this.get_name(this.url)
  }
}
</script>

<style scoped>

</style>
