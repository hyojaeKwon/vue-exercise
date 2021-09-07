<template>
  <div class="container">
    <input 
      v-model="title"
      class="form-control"
      type="text"
      placeholder="Search for Movies, Series & more"
      @keyup.enter="apply" 
    >
    <div class="selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select"
      >
        <option 
          v-if="filter.name == 'year'"
          value=""
        >
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item"
        >
          {{ item }}
        </option>
      </select>
    </div>
    <button class="btn btn-primary">
      Apply
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      title: '',
      type: 'movie',
      number: 10,
      year: '',
      filters: [
        {
          name: '',
          items: ['movie','series','episode']
        },
        {
          name: 'number',
          items: [10,20,30]
        },
        {
          name:'year',
          items: (() => { //Arrow function
            const years = []
            const thisYear = new Date().getFullYear() // 2021
            for (var i = thisYear; i>= 1985 ; i--){
              years.push(i); 
            }
            return years
          })()
        }
      ]
    }
  },
  methods: {
    async apply(){
      //Search Movie
      //Print the 10 movies
      const OMDB_API_KEY = '7035c60c';
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${this.title}&type=${this.type}&y=${this.year}&page=1`)
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;

  >* {
    font-size: 15px;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }

  .selects {
    // width: 120px;
    display: flex;

    select {
      margin-right: 10px;
      width: 120px;


      &:last-child {
        margin-right: 0;
      }
    }
  }
  .btn{
    width: 120px;
    height: 50px;
    font-weight: 600;
    flex-shrink: 0;
  }
}

</style>