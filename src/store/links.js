export default {
  state: {
    links: [
      {
        title: 'Home',
        url: '/'
      },
      {
        title: 'Todo',
        url: '/todo'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getLinks (state) {
      return state.links
    }
  }
}
