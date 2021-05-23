<template>
  <listOfProducts :products="getChamSocCoThe"/>
</template>

<script>
import { mapGetters } from 'vuex';
import listOfProducts from './ListOfProducts';

export default {
  components: {
    listOfProducts,
  },

  computed: {
    ...mapGetters([
      'getChamSocCoThe',
    ]),
  },
};
</script>

<style>
</style>
