<template>
  <v-timeline>
    <v-btn color="info" @click="back">Voltar</v-btn>
    <v-timeline-item v-for="n in 4" :key="n" color="red lighten-2" large>
      <template v-slot:opposite>
        <span>Dia: 15/03/2019 Horario: 19:40</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">Cão Perdido</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>