<script setup>
import { inject } from 'vue';
import { useRoute } from 'vue-router';

const homes = inject('homes')

const route = useRoute();

const home = homes.find(home => home.id == route.params.id)


</script>



<template>
    <article class="article">
        <img :src="home.photo" alt="" class="listing-photo">
        <section class="listing-description">
          <h2 class="listing-heading">{{ home.name }}</h2>
          <p class="listing-location">{{ home.city }}, {{ home.state }}</p>
        </section> 

        <section class="listing-features">
          <h2 class="section-heading">Sobre este local de habitação</h2>
          <ul>
            <li>Unidades disponíveis: {{ home.availableUnits }}</li>
            <li>Este local tem wi-fi: {{ home.wifi }}</li>
            <li>Este local tem lavanderia: {{ home.laundry }}</li>
          </ul>
        </section>   

        <section class="listing-apply">
          <h2 class="section-heading">Inscreva-se agora para morar aqui</h2>
          <form action="">
            <label for="first-name">Primeiro Nome</label>
            <input type="text" id="first-name">

            <label for="last-name">Sobrenome</label>
            <input type="text" id="last-name">

            <label for="email">Email</label>
            <input type="email" id="email">

            <button type="submit" class="primary">Aplique agora</button>
          </form>
        </section>
    </article>
</template>


<style scoped>

.article {
  margin-inline: 1rem;
}
.listing-photo {
  height: 600px;
  width: 50%;
  object-fit: cover;
  border-radius: 30px;
  float: right;
}

.listing-heading {
  font-size: 48pt;
  font-weight: bold;
  margin-bottom: 15px;
}

.listing-location::before {
  content: url('../assets/location-pin.svg') / '';
}

.listing-location {
  font-size: 24pt;
  margin-bottom: 15px;
}

.listing-features > .section-heading {
  color: var(--secondary-color);
  font-size: 24pt;
  margin-bottom: 15px;
}

.listing-features {
  margin-bottom: 20px;
}

.listing-features li {
  font-size: 14pt;
}

li {
  list-style-type: none;
}

.listing-apply .section-heading {
  font-size: 18pt;
  margin-bottom: 15px;
}

label, input {
  display: block;
}


label {
  color: var(--secondary-color);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12pt;
}

input {
  font-size: 16pt;
  margin-bottom: 15px;
  padding: 10px;
  width: 400px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: solid .3px;
}
@media (max-width: 1024px) {
  .listing-photo {
    width: 100%;
    height: 400px;
  }
}
</style>