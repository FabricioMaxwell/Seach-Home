<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, provide } from 'vue';
import homes from "./homes.json"

provide('homes', homes.locations)



</script>

<template>
  <main>
    <header class="brand-name">
      <RouterLink to="/">
        <img src="./assets/logo.svg" alt="logo" class="brand-logo">
      </RouterLink>
    </header>

    <section class="content">
        <RouterView></RouterView>
    </section>
  </main>
</template>

<style scoped>
.brand-name {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
