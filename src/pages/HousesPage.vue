<template>
  <div class="container-fluid">
    <section class="row">
      <h1>Houses</h1>
      <button class="btn btn-secondary fs-4" data-bs-toggle="modal"
          data-bs-target="#formModal">
          Create House Listing

        </button>
      <div v-for="house in houses" :key="house.id" class="col-10">
        <div class="bg-white border border-dark rounded d-flex">
          <img class="img-fluid house-img" :src="house.imgUrl" alt="houseimg">
          <div>
            <h2>$ {{house.price}}</h2>
            <h3>Bedrooms: {{ house.bedrooms }} Bathrooms: {{ house.bathrooms }}</h3>
          <h4>Floors:{{ house.levels }} Year: {{ house.year }}</h4>
          <p>{{ house.description }}</p>
        </div>
          <div class="d-flex justify-content-end">
              {{ house.creator.name }} <img :src="house.creator.picture" :alt="house.creator.name" class="creator-picture">
              {{ house.createdAt }}
          </div>
        </div>
      </div>
    </section>
  </div>
  <ModalComponent>
<template #body>

  <HouseForm/>
</template>
  </ModalComponent>
</template>


<script>
import ModalComponent from '../components/ModalComponent.vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import {housesService} from '../services/HousesService.js'
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';

export default {
    setup() {
        async function getHouses() {
            try {
                await housesService.getHouses();
            }
            catch (error) {
                Pop.error(error.message);
                logger.log(error);
            }
        }
        onMounted(() => {
            getHouses();
        });
        return {
            houses: computed(() => AppState.houses)
        };
    },
    components: { ModalComponent }
}
</script>


<style lang="scss" scoped>
.house-img {
  width: 40%;
  object-fit: cover;
  object-position: center;
}

.creator-picture {
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;

}
</style>