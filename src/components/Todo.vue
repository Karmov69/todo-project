<template>
  <v-container fluid>
    

    <v-layout justify-center>
      <v-flex xs12 md6>
        <filtered-todo-list></filtered-todo-list>

        <v-list subheader two-line>
          <v-subheader><h1>Todo list</h1></v-subheader>

          
          <v-list-tile v-for="todo of fliteredTodoList" :key="todo.title">
            <v-list-tile-action>
              <v-checkbox v-model="todo.completed"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{todo.title}}</v-list-tile-title>
              <v-list-tile-sub-title>{{todo.description}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          

        </v-list>
      </v-flex>
    </v-layout>

      <add-new-todo ></add-new-todo>
    
  </v-container>
</template>

<script>
import addNewTodo from './addNewTodo'
import filteredTodoList from './filteredTodoList'
export default {
  computed: {
    todoList () {
      return this.$store.getters.getTodoList
    },
    filterBy () {
      return this.$store.getters.getFilterByVal
    },
    fliteredTodoList () {
      let newFilterVal
      switch (this.filterBy) {
        case 'done':
          newFilterVal = this.todoList.filter(elem => elem.completed)
          break
        case 'all':
          newFilterVal = this.todoList.filter(elem => elem)
          break
        case 'not':
          newFilterVal = this.todoList.filter(elem => !elem.completed)
          break
      }
      return newFilterVal
    }
  },
  components: {
    addNewTodo,
    filteredTodoList
  }
}
</script>



<style scoped>
  
</style>
