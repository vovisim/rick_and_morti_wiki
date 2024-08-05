<template>
  <div class="locations">
    <div class="text-center head">Персонажи</div>
    <ul class="align-content-center">
      <li v-for="(location) in locations" :key="location.id" class="align-items-center">
        <router-link :to="{name: 'MoreInfoLocations', params: { id: location.id }}">
          <location-component :name="location.name" :type="location.type"/>
        </router-link>
      </li>
    </ul>
    <PaginationComponent :currentPage="this_page" :max-page="max_page" @page-changed="handlePageChange"/>
  </div>
</template>

<script>
import PaginationComponent from '@/components/PaginationComponent'
import locationComponent from '@/components/LocationComponent'
import { GetLocations } from '@/api/api'

export default {
  name: 'LocationWindow',
  components: {
    PaginationComponent,
    locationComponent
  },
  data () {
    return {
      this_page: 1,
      max_page: 6,
      locations: [
        {
          id: 1,
          name: 'Earth (C-137)',
          type: 'Planet'
        },
        {
          id: 2,
          name: 'Abadango',
          type: 'Cluster',
          dimension: 'unknown',
          residents: [
            'https://rickandmortyapi.com/api/character/6'
          ],
          url: 'https://rickandmortyapi.com/api/location/2',
          created: '2017-11-10T13:06:38.182Z'
        }
      ]
    }
  },
  methods: {
    async GetLocations () {
      const Locations = await GetLocations(this.getNumbersBetween(this.this_page * 25 - 25, (this.this_page * 25) + 1))
      console.log(Locations)
      this.locations = Locations.data
    },
    getNumbersBetween (start, end) {
      if (start > end) {
        [start, end] = [end, start]
      }

      return Array.from({ length: end - start - 1 }, (_, i) => start + i + 1)
    },
    handlePageChange (page) {
      this.this_page = page
    }
  },
  created () {
    this.GetLocations()
    console.log(this.GetLocations)
  },
  watch: {
    this_page () {
      this.GetLocations()
      console.log(this.GetLocations)
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;

  > li {
    margin-bottom: 30px;
    width: max-content;
  }
}
a {
  text-decoration: none; /* Убирает подчеркивание */
  color: inherit; /* Устанавливает цвет текста такой же, как у родителя */
}
</style>
