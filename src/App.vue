<script setup>
// import StevenSeagal from './components/StevenSeagal.vue';
// import TaskList from './components/TaskList.vue';
import Friends from './components/Friends.vue';
import Header from './components/Header.vue'
</script>

<template>
  <Header></Header>
  <router-view></router-view>
  <!-- <Friends></Friends> -->
</template>

<style scoped>
.superApp {
  background-color: blueviolet;
  padding: 5%;
}
</style>
