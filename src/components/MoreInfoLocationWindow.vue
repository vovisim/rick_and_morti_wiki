<template>
  <div class="container-fluid">
    <p>{{location.name}}</p>
    <p> Тип: {{location.type}}</p>
    <p> Тип: {{location.dimension}}</p>
    <h5>Список резидентов:</h5>
    <ul>
      <li v-for="(url, index) in location.residents" :key="index">
        <CharacterInLocation :url="url"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { GetLocations } from '@/api/api'
import CharacterInLocation from '@/components/CharacterInLocation'

export default {
  name: 'MoreInfoLocationWindow',
  components: {
    CharacterInLocation
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      location: {}
    }
  },
  methods: {
    async get_location (id) {
      const Location = await GetLocations(id)
      console.log(Location.data)
      this.location = Location.data
    }
  },
  created () {
    this.get_location(this.id)
  }
}
</script>

<style scoped>
.container-fluid{
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: 120px;
  margin-top: 50px;
}
img{
  margin-bottom: 20px;
  border: #1A9DB3 solid 2px;
  border-radius: 12px;
}
a {
  text-decoration: none; /* Убирает подчеркивание */
  color: inherit; /* Устанавливает цвет текста такой же, как у родителя */
}
</style>
