<template>
  <product-form
    @save-product="addProduct"
    :model="model"
    :manufacturers="manufacturers">
  </product-form>
</template>

<script>
/* eslint-disable */
  import ProductFrom from '@/components/product/ProductForm';

  export default {
    data() {
      return {
        model: {},
        manufacturers: [
          {
            _id: 'sam',
            name: 'Samsung',
          },
          {
            _id: 'apple',
            name: 'Apple',
          },
        ],
      }
    },
    methods: {
      addProduct(model) {
        console.log('model', model)
      }
    },
    components: {
      'product-form': ProductFrom
    }
  }
</script>
