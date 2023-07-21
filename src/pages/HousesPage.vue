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
          <img class="img-fluid" :src="house.imgUrl" alt="houseimg">
          <div>
            <h2>{{ house.year }} {{ house.make }} {{ house.model }}</h2>
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

</style>