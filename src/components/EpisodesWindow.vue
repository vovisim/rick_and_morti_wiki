<template>
  <div class=".container container-">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseTwo" @click="S1">
            Сезон 1
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse">
          <div class="accordion-body">
            <ol>
              <li v-for="(episode) in episodes" :key="episode.id">
                <router-link :to="{ name: 'MoreInfoEpisode', params: { id: episode.id }}">
                  {{ episode.name }} {{ episode.air_date }}
                </router-link>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" @click="S2">
            Сезон 2
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse">
          <div class="accordion-body">
            <ol>
              <li v-for="(episode) in episodes" :key="episode.id">
                <router-link :to="{ name: 'MoreInfoEpisode', params: { id: episode.id }}">
                  {{ episode.name }} {{ episode.air_date }}
                </router-link>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" @click="S3">
            Сезон 3
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse">
          <div class="accordion-body">
            <ol>
              <li v-for="(episode) in episodes" :key="episode.id">
                <router-link :to="{ name: 'MoreInfoEpisode', params: { id: episode.id }}">
                  {{ episode.name }} {{ episode.air_date }}
                </router-link>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree" @click="S4">
            Сезон 4
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse">
          <div class="accordion-body">
            <ol>
              <li v-for="(episode) in episodes" :key="episode.id">
                <router-link :to="{ name: 'MoreInfoEpisode', params: { id: episode.id }}">
                  {{ episode.name }} {{ episode.air_date }}
                </router-link>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree" @click="S5">
            Сезон 5
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse">
          <div class="accordion-body">
            <ol>
              <li v-for="(episode) in episodes" :key="episode.id">
                <router-link :to="{ name: 'MoreInfoEpisode', params: { id: episode.id }}">
                  <a href="" class="link-underline-opacity-0 link-offset">{{ episode.name }} {{ episode.air_date }}</a>
                </router-link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetEpisodes } from '@/api/api'

export default {
  name: 'EpisodesWindow',
  data () {
    return {
      episodes: []
    }
  },
  methods: {
    async GetEpisodes (start, end) {
      await console.log(start - 1, end)
      const Episode = await GetEpisodes(this.getNumbersBetween(start - 1, end + 1))
      this.episodes = Episode.data
    },
    getNumbersBetween (start, end) {
      if (start > end) {
        [start, end] = [end, start]
      }

      return Array.from({ length: end - start - 1 }, (_, i) => start + i + 1)
    },
    S1 () {
      this.GetEpisodes(1, 11)
      console.log(this.episodes)
    },
    S2 () {
      this.GetEpisodes(12, 21)
    },
    S3 () {
      this.GetEpisodes(22, 31)
    },
    S4 () {
      this.GetEpisodes(32, 41)
    },
    S5 () {
      this.GetEpisodes(42, 51)
    }
  }
}
</script>

<style lang="scss" scoped>
.container- {
  padding: 50px 120px;
}

ul {
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none; /* Убирает подчеркивание */
  color: inherit; /* Устанавливает цвет текста такой же, как у родителя */
}
li{
  width: max-content;
  &:hover {
    color: #1A9DB3;
  }
}

</style>
