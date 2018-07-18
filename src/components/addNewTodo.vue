<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 md6 class="add-todo">
        <form>
          <v-text-field
            class="add-todo__input"
            label="Task name"
            v-model="title"
            required
          ></v-text-field>
          <v-text-field
            class="add-todo__input"
            label="Task description"
            v-model="description"
            required
          ></v-text-field>
          <v-btn
          color="teal lighten-2 ml-0"
          :disabled="!title || !description"
          :class="{ disabled: (!title || !description) }"
          @click="addTodo"
          >Add</v-btn>
        </form>
      </v-flex>  
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    addTodo () {
      const newTodo = {
        title: this.title,
        description: this.description
      }
      this.$store.dispatch('addTodo', newTodo)
      this.title = ''
      this.description = ''
    }
  }
}
</script>

<style scoped>
  .disabled {
    background-color: #ccc!important;
  }
</style>
