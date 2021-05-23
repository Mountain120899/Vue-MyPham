<template>
  <listOfProducts :products="getLamSach"/>
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
      'getLamSach',
    ]),
  },
};
</script>

<style>
</style>

