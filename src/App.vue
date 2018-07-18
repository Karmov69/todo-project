<template>
  <div>
    <v-toolbar
      absolute
      color="teal lighten-3"
      dark
      scroll-off-screen
    >
      <v-spacer></v-spacer>
      
      <v-toolbar-items class="hidden-sm-and-down" v-for="link of links" :key="link.title">
        <v-btn flat :to="link.url">{{link.title}}</v-btn>
      </v-toolbar-items>
      
      <v-spacer></v-spacer>

    </v-toolbar>

    <v-container mt-5>
      <router-view>

      </router-view>
    </v-container>
  </div>
  


  
</template>

<script>

export default {
  computed: {
    links () {
      return this.$store.getters.getLinks
    }
  }
}
</script>
