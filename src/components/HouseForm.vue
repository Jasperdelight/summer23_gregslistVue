<template>  <form @submit.prevent="createHouse()">

  <div class="form-floating mb-3">
    <input v-model="editable.bedrooms" required type="text" class="form-control" id="bedrooms" placeholder="bedrooms...">
    <label for="bedrooms">bedrooms</label>
  </div>
  <div class="form-floating mb-3">
    <input v-model="editable.bathrooms" required type="text" class="form-control" id="bathrooms" placeholder="bathrooms...">
    <label for="bathrooms">bathrooms</label>
  </div>
  <div class="form-floating mb-3">
    <input v-model="editable.imgUrl" required type="url" class="form-control" id="imgUrl" placeholder="ImgUrl...">
    <label for="imgUrl">ImgUrl</label>
  </div>
  <div class="form-floating mb-3">
    <input v-model="editable.year" required type="number" class="form-control" id="year" placeholder="Year..."
      min="1800" max="2027">
    <label for="year">Year</label>
  </div>
  <div class="form-floating mb-3">
    <input v-model="editable.price" required type="number" class="form-control" id="price" placeholder="Price..."
      min="0" max="100000000">
    <label for="price">Price</label>
  </div>
  <div class="form-floating mb-3">
    <input v-model="editable.levels" required type="number" class="form-control" id="levels" placeholder="levels..."
      min="0" max="100000000">
    <label for="levels">levels</label>
  </div>
  <div class="form-floating mb-3">
    <textarea v-model="editable.description" class="form-control" placeholder="Leave a description here"
      id="description" style="height: 100px"></textarea>
    <label for="description">Description</label>
  </div>


      
  <button type="submit" class="btn btn-success">Submit</button>
</form></template>


<script>
import { ref } from 'vue';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { housesService } from '../services/HousesService.js';

export default {
  setup(){
    const editable = ref({})
    return {
      editable,



      handleSubmit(){
this.createHouse
      },

        async createHouse(){
          try{
              const houseData = editable.value
              await housesService.createHouse(houseData)
          } catch(error) {
              Pop.error(error.message);
              logger.log(error);
          }
          
        }
      }
    }
  }
</script>


<style lang="scss" scoped>

</style>