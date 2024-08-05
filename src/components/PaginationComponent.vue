<template>
  <nav aria-label="Page navigation example" class="navigation">
    <ul class="pagination pagination-sm">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="PreviousPage"
           :class="{'disabled': this_page === 1}">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-if="this_page > 1"><a class="page-link" href="#" @click.prevent="changePage(this_page - 1)">{{
          this_page - 1
        }}</a></li>
      <li class="page-item active"><a class="page-link" href="#" @click.prevent="changePage(this_page)">{{
          this_page
        }}</a></li>
      <li class="page-item" v-if="this_page !== maxPage"><a class="page-link" href="#" @click.prevent="changePage(this_page + 1)">{{
          this_page + 1
        }}</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="NextPage"
           :class="{'disabled': this_page === maxPage}">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PaginationComponent',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    maxPage: Number
  },
  data () {
    return {
      this_page: this.currentPage
    }
  },
  watch: {
    currentPage (newVal) {
      this.this_page = newVal
    }
  },
  methods: {
    ThisPage () {
      this.$emit('page-changed', this.this_page)
    },
    PreviousPage () {
      if (this.this_page > 1) {
        this.this_page -= 1
        this.ThisPage()
      }
    },
    NextPage () {
      this.this_page += 1
      this.ThisPage()
    },
    changePage (page) {
      if (page > 0) {
        this.this_page = page
        this.ThisPage()
      }
    }
  }
}
</script>

<style scoped>
nav {
  margin-top: 50px;
}

ul {
  justify-content: center;
}

.disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
