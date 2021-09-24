import axios from "axios"

export default{
  // module
  namespaced: true,
  // data
  state: () => ({
    movies: []
  }),
  //computed
  getters: {
    movieIds(state){
      return state.movies.map(m => m.imdbID)
    }
  },
  //methods
  mutations: {
    //data part
    resetMovies(state){
      state.moveis = []
    }
  },
  actions: {
    //async
    async searchMovies({ commit }, payload){
      const { title, type, number, year} = payload
      const OMDB_API_KEY = '7035c60c'

      //Store the data to res
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${this.title}&type=${this.type}&y=${this.year}&page=1`)
      
      //see the data of the res
      const { Search, totalResults } = res.data
      commit('updateState', {
        movies: Search
      })
    }
  }
}