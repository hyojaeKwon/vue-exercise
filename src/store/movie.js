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
    searchMovies({}){
      
    }
  }
}