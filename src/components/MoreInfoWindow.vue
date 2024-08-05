<template>
  <div class="container-fluid">
    <img :src="character.image" alt="">
    <p>{{ character.name }}</p>
    <p> Статус: {{ character.status }}</p>
    <p> Вид: {{ character.species }}</p>
    <p> Пол: {{ character.gender }}</p>
    <router-link :to="{ name: 'MoreInfoLocations', params: { id: (character.origin.url).lastIndexOf('/') }}"><p class="a"> Родная планета: {{ character.origin.name }}</p></router-link>
    <router-link :to="{ name: 'MoreInfoLocations', params: { id: (character.location.url).lastIndexOf('/') }}"><p class="a"> Находиться сейчас: {{ character.location.name }}</p></router-link>
  </div>
</template>

<script>
import { GetCharacter } from '@/api/api'

export default {
  name: 'MoreInfoWindow',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      character: {}
    }
  },
  methods: {
    async get_character (id) {
      const Character = await GetCharacter(id)
      console.log(Character.data)
      this.character = Character.data
    }
  },
  created () {
    this.get_character(this.id)
  }
}
</script>

<style scoped>
.container-fluid {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: 120px;
  margin-top: 50px;
}

img {
  margin-bottom: 20px;
  border: #1A9DB3 solid 2px;
  border-radius: 12px;
}
p {
  width: max-content;
}

a {
  text-decoration: none; /* Убирает подчеркивание */
  color: inherit; /* Устанавливает цвет текста такой же, как у родителя */
}
.a:hover {
  color: #1A9DB3;
}
</style>
