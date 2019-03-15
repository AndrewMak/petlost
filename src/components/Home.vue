<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="yellow"></v-progress-circular>
    </div>
  </v-container>
  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <!-- <v-flex xs4 v-for="(item, index) in wholeResponse" :key="index" mb-2> -->
      <v-flex xs4 v-for="n in 20" :key="n" mb-2>
        <v-card>
          <v-img height="200px" :src="foto" aspect-ratio="1"></v-img>
          <v-card-title primary-title>
            <div>
              <h2>Cão Perdido Nome</h2>
              <div>Data Desaparecido:</div>
              <div>Característica:</div>
              <div>Ultima vez visto?:</div>
              <div>Contato:</div>
            </div>
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn round color="yellow" @click="singlePet(1)">Ver Mais</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      wholeResponse: [],
      loading: true,
      foto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcfc-07Pf5j1dvOy0v-sxSP_ol99xWEw4qMCNnygFj4wYySnR"
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.wholeResponse = response.data;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    singlePet(id) {
      this.$router.push("/pet/" + id);
    }
  }
};
</script>
<style lang="stylus" scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>