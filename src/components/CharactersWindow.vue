<template>
  <div class="text-center head">Персонажи</div>
  <ul class="align-content-center">
    <li v-for="(character) in characters" :key="character.id" class="align-items-center">
      <router-link :to="{ name: 'MoreInfo', params: { id: character.id }}" class="no-link-style">
        <CharacterComponent :name="character.name" :image="character.image"/>
      </router-link>
    </li>
  </ul>
  <PaginationComponent :currentPage="this_page" :max-page="max_page" @page-changed="handlePageChange"/>
</template>

<script>
import CharacterComponent from '@/components/CharacterComponent'
import { GetCharacter } from '@/api/api'
import PaginationComponent from '@/components/PaginationComponent'

export default {
  name: 'CharactersWindow',
  components: {
    CharacterComponent,
    PaginationComponent
  },
  data () {
    return {
      characters: [],
      this_page: 1,
      max_page: Math.floor(826 / this.quantity_characters),
      quantity_characters: 14,
      windowWidth: window.innerWidth
    }
  },
  methods: {
    async GetCharacters () {
      const Characters = await GetCharacter(this.getNumbersBetween(this.this_page * this.quantity_characters - this.quantity_characters, (this.this_page * this.quantity_characters) + 1))
      console.log(Characters)
      this.characters = Characters.data
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
      const minCharacters = 14
      const widthCharacter = 358
      const charactersInRow = Math.floor(width / widthCharacter)
      let characters = minCharacters

      while (characters % charactersInRow !== 0) {
        characters++
      }
      this.max_page = Math.floor(826 / characters) + 1
      return characters
    }
  },
  created () {
    this.updateWindowWidth()
    this.quantity_characters = this.QuantityCharacter(this.windowWidth)
    this.GetCharacters()
  },
  watch: {
    this_page () {
      this.GetCharacters()
      console.log(this.GetCharacters)
    }
  },
  mounted () {
    window.addEventListener('resize', this.updateWindowWidth)
    this.quantity_characters = this.QuantityCharacter(this.windowWidth)
    window.addEventListener('resize', this.GetCharacters)
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.updateWindowWidth)
    this.quantity_characters = this.QuantityCharacter(this.windowWidth)
    window.addEventListener('resize', this.GetCharacters)
  }
}

</script>

<style lang="scss" scoped>
.head {
  margin-top: 80px;
  font-size: 32px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;
  margin-right: 0px;

  > li {
    width: 358px;
    margin-bottom: 30px;
    margin-top: 30px;
    padding: 0 50px;

  }
}

.page-item {
  width: max-content;
}

.navigation ul {
  margin: 0;

  > li {
    padding: 0;
  }
}

a {
  text-decoration: none; /* Убирает подчеркивание */
  color: inherit; /* Устанавливает цвет текста такой же, как у родителя */
}

</style>
