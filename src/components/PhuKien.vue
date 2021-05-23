<template>
  <listOfProducts :products="getPhuKien"/>
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
      'getPhuKien',
    ]),
  },
};

</script>

<style>

</style>
