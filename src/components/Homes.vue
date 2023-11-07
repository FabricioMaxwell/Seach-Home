<script setup>
import HousingLocation from "./HousingLocation.vue";
import { computed, inject, ref } from "vue";

const homes = ref(inject("homes"));
const search = ref("");

const filteredHomes = computed(() => {
  if (search.value.length > 0) {
    return homes.value.filter((home) =>
      home.name.toLowerCase().includes(search.value.toLowerCase())
    );
  }
  return homes.value;
});
</script>

<template>
  <section>
    <form action="" class="form">
      <input type="text" placeholder="Filtrar por cidade" v-model="search" />
    </form>
  </section>

  <section class="results">
    <HousingLocation
      v-for="home in filteredHomes"
      :key="home.id"
      :housingLocation="home"
    />
  </section>
</template>

<style scoped>
.form {
  display: flex;
  justify-content: center;
}
.results {
  display: grid;
  column-gap: 14px;
  row-gap: 14px;
  grid-template-columns: repeat(4, 1fr);
  margin: 50px 20px 0 20px;
  justify-content: space-around;
}

input[type="text"] {
  border: solid 1px var(--primary-color);
  padding: 10px;
  border-radius: 8px;
  margin-right: 4px;
  display: inline-block;
  width: 30%;
}

@media (min-width: 500px) and (max-width: 768px) {
  .results {
    grid-template-columns: repeat(2, 1fr);
  }
  input[type="text"] {
    width: 70%;
  }
}

@media (max-width: 499px) {
  .results {
    grid-template-columns: 1fr;
  }
}
</style>
