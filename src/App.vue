<template>

  <div id="app" class="container-fluid">

    <Header />

    <main class="row">
      <aside class="col-md-4">
    
        <FilterPanel :alldata="filterData" :changedData="filterOutData" />
    
      </aside>
      <div class="col-md-8">
    
        <Search :charNameForSearch="searchContent" :searchTerm="searchData" />
        <SearchList :CharacterResultData="data" />
    
      </div>
    </main>

  </div>

</template>

<script>
import Header from './components/header/Header.vue'
import FilterPanel from './components/filter/FilterPanel.vue'
import Search from './components/search/Search.vue'
import SearchList from './components/search/SearchList'


import axios from 'axios'

export default {

  name: 'App',
  components: {
    Header,
    Search,
    FilterPanel,
    SearchList
  },

  data: function(){
    return {
      alldata: '',
      filterData: '',
      searchContent: '',
      searchKey : {},
      data: {'update': false,'characters':false},
      selectedFilter: {'update': false, 'data':{}},
    }
  },

  created(){
      axios.get("https://rickandmortyapi.com/api/character/")
        .then(res => {
          if (res) {
            this.alldata = res; // Assiging response to allData which is  definedin data
            this.data.characters = [...this.alldata.data.results]; // Assiging allresult to data.characcters

            filterData(this.alldata);
            searchData(this.alldata);
          }
        })
        .catch(error => {
          console.log(error);
        });

      let filterData = (data) => {
        let filters = {species:{}, gender:{}, origin:{}}; // creatiing blank object with key
        data.data.results.map(function(val){ // return the data according to speccific key
          filters.species[val.species] = val.species
          filters.gender[val.gender] = val.gender
          filters.origin[val.origin.name] = val.origin.name
        });
        setTimeout( ( ) => {
          console.log(this, filters);
          this.filterData = filters;
        }, 1000)

      },
      searchData = (data) =>  {
        let searchVal = []; // setting blank search text
        data.data.results.map(function(val){
          searchVal.push(val.name);
        })
        this.searchContent = searchVal; // assigning only name value to seearch content as it ttriigers only on name
      }

  },

  methods:{

    filterOutData(filter){ 
      if(filter){ //checking the filter.from where it is coming? Is it from filterPanel or search panel
        filter = {...JSON.parse(JSON.stringify(this.searchKey)), ...filter}; // Converting into JS Object through  JSON parse
      }else{
        filter = {...JSON.parse(JSON.stringify(this.searchKey)), ...this.selectedFilter.data};
      }
      const filterKeys = Object.keys(filter); //assigning object key in constant
      this.data.characters= false
        const filteResult = this.alldata.data.results.filter(val =>{
          let matchedData = true;
          filterKeys.map( keyVal => {
            matchedData = matchedData && (filter[keyVal].length  === 0 || filter[keyVal].some(values => {
              const regEx  = RegExp(values.toLowerCase().replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&')); 
              
              return regEx.test((val[keyVal].name && val[keyVal].name.toLowerCase()) || val[keyVal].toLowerCase());
            }))
          })
          
        matchedData && console.log(matchedData, val.name, val.species, val.gender);
        return matchedData;   
        })
        delete filter.name;
        this.selectedFilter.data = filter;
        this.selectedFilter.update = Math.random();
        this.data.characters = filteResult; 
        this.data.update = Math.random();
       
    },

    searchData(searchval){
        this.searchKey = searchval;
        this.filterOutData();
    }    
  }

}
</script>
