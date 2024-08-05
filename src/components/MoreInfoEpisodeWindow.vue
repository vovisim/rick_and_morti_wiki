<template>
  <div class="container-fluid">
    <p>{{episode.name}}</p>
    <p> Дата выхода: {{episode.air_date}}</p>
    <h5>Список персонажей:</h5>
    <ul>
      <li v-for="(url, index) in episode.characters" :key="index">
        <CharacterInLocation :url="url"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { GetEpisodes } from '@/api/api'
import CharacterInLocation from '@/components/CharacterInLocation'

export default {
  name: 'MoreInfoEpisodeWindow',
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
      episode: {}
    }
  },
  methods: {
    async get_episode (id) {
      const Episode = await GetEpisodes(id)
      console.log(Episode.data)
      this.episode = Episode.data
    }
  },
  created () {
    this.get_episode(this.id)
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
