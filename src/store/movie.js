import axios from "axios"

export default{
  // module
  namespaced: true,
  // data
  state: () => ({
    movies: [],
    // message: '',
    // loading: false
  }),
  //computed
  getters: {
    movieIds(state){
      return state.movies.map(m => m.imdbID)
    }
  },
  //methods
  mutations: {
    // assignMovies ( state , Search) {
    //   state.movies = Search
    // },
    updateState( state, payload){
      // ['movies','message','loding']
      Object.keys(payload).forEach(key => {
        // state.movies = payload.moveis
        // state.message = payload.message
        // state.loading = payload.loading
        state[key] = payload[key]
      })
    },
    //data part
    resetMovies(state){
      state.moveis = []
    }
  },
  actions: {
    //async
    async searchMovies(context, payload){
      const { title, type, number, year} = payload
      const OMDB_API_KEY = '7035c60c'

      //Store the data to res
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${this.title}&type=${this.type}&y=${this.year}&page=1`)
      
      //see the data of the res
      const { Search, totalResults } = res.data
      context.commit('updateState', {
        movies: Search,
        // message: 'Hello World',
        // loading: true
      })
      console.log(totalResults)
      console.log(typeof totalResults)
    }
  }
}