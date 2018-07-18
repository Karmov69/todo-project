<template>
  <div>
    <v-btn @click="changeFilter('done')" :class="{ active: filterBy=='done' }">
      done
    </v-btn>
    <v-btn @click="changeFilter('not')" :class="{ active: filterBy=='not' }">
      not done
    </v-btn>
    <v-btn @click="changeFilter('all')" :class="{ active: filterBy=='all' }">
      all
    </v-btn>

    
  </div>
</template>


<script>
export default {
  computed: {
    todoList () {
      return this.$store.getters.getTodoList
    },
    filterBy () {
      return this.$store.getters.getFilterByVal
    }
  },
  methods: {
    changeFilter (e) {
      this.$store.dispatch('changeFilter', e)
    }
  }
}
</script>

<style scoped>
  .active {
    background-color: #050505;
    color:#fff;
  }
</style>
