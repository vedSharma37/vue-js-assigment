<template>
    <div class="searchBox">
        <input type="text" @keyup="getSearchResult" placeholder="Please Enter Name Here" class="form-control form-control-lg">
    </div>
</template>

<script>

export default {
  props: ['charNameForSearch', 'searchTerm'],
  name: 'Search',
  data () {
    return {
      searchVal: {}
    }
  },

  methods: {
    getSearchResult (e) {
      if (e.target.value.length >= 3) {
        const searchString = e.target.value
        const keySelected = 'name'
        this.searchVal = {}
        this.searchVal[keySelected] = this.searchVal[keySelected] || []
        this.searchVal[keySelected].push(searchString)
        this.searchTerm(this.searchVal)
      } else {
        this.searchVal = {}
        this.searchTerm(this.searchVal)
      }
      console.log(e.target.value)
    }
  }
}
</script>

<style scoped>
    .searchBox{
        margin-bottom: 50px;
    }
</style>
