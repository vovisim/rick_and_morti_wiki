<template>
  <div class="locations">
    <div class="text-center head">Персонажи</div>
    <ul class="justify-content-center">
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
      quantity_locations: 1,
      windowWidth: window.innerWidth,
      max_page: 6,
      locations: []
    }
  },
  methods: {
    async GetLocations () {
      const Locations = await GetLocations(this.getNumbersBetween(this.this_page * this.quantity_locations - this.quantity_locations, (this.this_page * this.quantity_locations) + 1))
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
    },
    updateWindowWidth () {
      this.windowWidth = window.innerWidth
    },
    QuantityCharacter (width) {
      const minLocations = 25
      const widthCharacter = 369
      const locationsInRow = Math.floor((width - (width - 1476)) / widthCharacter)
      let locations = minLocations

      while (locations % locationsInRow !== 0) {
        locations++
      }

      return locations
    }
  },
  created () {
    this.updateWindowWidth()
    this.quantity_locations = this.QuantityCharacter(this.windowWidth - 808)
    this.GetLocations()
  },
  watch: {
    this_page () {
      this.GetLocations()
      console.log(this.GetLocations)
    }
  },
  mounted () {
    window.addEventListener('resize', this.updateWindowWidth)
    this.quantity_locations = this.QuantityCharacter(this.windowWidth - 808)
    window.addEventListener('resize', this.GetLocations)
  },
  unmounted () {
    window.removeEventListener('resize', this.updateWindowWidth)
    this.quantity_locations = this.QuantityCharacter(this.windowWidth - 808)
    window.addEventListener('resize', this.GetLocations)
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
