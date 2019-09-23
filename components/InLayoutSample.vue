<template>
  <p>In layout Sample</p>
</template>

<script>
  import Sample from '~/components/Sample.vue'

  export default {
    components: {
      Sample
    },
    data() {
      return {
        hoge: 'hogehoge'
      }
    },
    asyncData () {
      if (process.server) {
        console.log(`[InLayoutSample] SSR in asyncData | this.hoge error`) // hogeはundefinedエラー
      } else {
        console.log(`[InLayoutSample] CSR in asyncData | this.hoge error`) // hogeはundefinedエラー
      }
    },
    fetch () {
      if (process.server) {
        console.log(`[InLayoutSample] SSR in fetch | `, this.hoge, this.computedHoge)
      } else {
        console.log(`[InLayoutSample] CSR in fetch | `, this.hoge, this.computedHoge)
      }
    },
    validate({ params, query, store }) {
      if (process.server) {
        console.log(`[InLayoutSample] SSR in validate | `, this.hoge, this.computedHoge)
      } else {
        console.log(`[InLayoutSample] CSR in validate | `, this.hoge, this.computedHoge)
      }
      return true
    },
    beforeCreate () {
      if (process.server) {
        console.log(`[InLayoutSample] SSR in beforeCreate | `, this.hoge, this.computedHoge)
      } else {
        console.log(`[InLayoutSample] CSR in beforeCreate | `, this.hoge, this.computedHoge)
      }
    },
    created () {
      if (process.server) {
        console.log(`[InLayoutSample] SSR in created | `, this.hoge, this.computedHoge)
      } else {
        console.log(`[InLayoutSample] CSR in created | `, this.hoge, this.computedHoge)
      }
    },
    beforeMount () {
      if (process.server) {
        console.log(`[InLayoutSample]　SSR in beforeMount | `, this.hoge, this.computedHoge)
      } else {
        console.log(`[InLayoutSample]　CSR in beforeMount | `, this.hoge, this.computedHoge)
      }
    },
    mounted () {
      if (process.server) {
        console.log(`[InLayoutSample]　SSR in mounted | `, this.hoge, this.computedHoge)
      } else {
        console.log(`[InLayoutSample]　CSR in mounted | `, this.hoge, this.computedHoge)
      }
    },
    computed: {
      computedHoge () {
        return `computed_${this.hoge}`
      }
    }
  }
</script>

<style scoped>

</style>
