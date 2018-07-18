export default {
  state: {
    todoList: [
      {
        title: 'Task 1',
        description: 'Desc fro todo 1',
        completed: false
      },
      {
        title: 'Task 2',
        description: 'Desc fro todo 2',
        completed: true
      },
      {
        title: 'Task 3',
        description: 'Desc fro todo 3',
        completed: false
      }
    ]
  },
  mutations: {
    addTodo (state, payload) {
      state.todoList.push(payload)
    }
  },
  actions: {
    addTodo ({ commit }, payload) {
      commit('addTodo', payload)
    }
  },
  getters: {
    getTodoList (state) {
      return state.todoList
    }
  }
}
