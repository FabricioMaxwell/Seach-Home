<script setup>
import { defineProps } from 'vue';
import { RouterLink} from 'vue-router'

const { housingLocation } = defineProps(["housingLocation"])


</script>




<template>
    <section class="listing">
      <img :src="housingLocation.photo" alt="Exterior photo of " class="listing-photo">
      <h2 class="listing-heading">
        {{ housingLocation.name }}
      </h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <RouterLink :to="{path: `/details/${housingLocation.id}`}">Learning More</RouterLink>
    </section>
</template>

<style scoped>
.listing {
  background: var(--accent-color);
  border-radius: 30px;
  padding-bottom: 30px;
}
.listing-heading {
  color: var(--primary-color);
  padding: 10px 20px 0 20px;
}
.listing-photo {
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-radius: 30px 30px 0 0;
}
.listing-location {
  padding: 10px 20px 20px 20px;
  display: flex;
  align-items: center;
}
.listing-location::before {
  content: url("../assets/location-pin.svg") / "";
}

section.listing a {
  padding-left: 20px;
  text-decoration: none;
  color: var(--primary-color);
}
section.listing a::after {
  content: "\203A";
  margin-left: 5px;
}
</style>