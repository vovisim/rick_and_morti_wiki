<template>
  <div class="container-fluid">
    <img :src="character.image" alt="">
    <p>{{ character.name }}</p>
    <p> Статус: {{ character.status }}</p>
    <p> Вид: {{ character.species }}</p>
    <p> Пол: {{ character.gender }}</p>
    <div class="" v-if="this.character.origin.url !== ''">
      <router-link :to="{ name: 'MoreInfoLocations', params: { id: (this.character.origin.url.split('/').pop()) }}"><p
        class="a"> Родная планета:
        {{ character.origin.name }}</p></router-link>
    </div>
    <div class="" v-if="this.character.location.url !== ''">
    <router-link :to="{ name: 'MoreInfoLocations', params: { id: (this.character.location.url.split('/').pop())  }}"><p
      class="a"> Находиться сейчас:
      {{ character.location.name }}</p></router-link>
    </div>
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
