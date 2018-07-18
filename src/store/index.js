import Vue from 'vue'
import Vuex from 'vuex'
import links from './links'
import todo from './todo'
import filter from './filter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    links,
    todo,
    filter
  }
})
