<template>
  <p>sample sample</p>
</template>

<script>
  export default {
    data() {
      return {
        hoge: 'hogehoge'
      }
    },
    asyncData () {
      if (process.server) {
        console.log(`[Sample] SSR in asyncData | this.hoge error`) // hogeはundefinedエラー
      } else {
        console.log(`[Sample] CSR in asyncData | this.hoge error`) // hogeはundefinedエラー
      }
    },
    fetch () {
      if (process.server) {
        console.log(`[Sample] SSR in fetch | `, this.hoge, this.computedHoge)
      } else {
        console.log(`[Sample] CSR in fetch | `, this.hoge, this.computedHoge)
      }
    },
    validate({ params, query, store }) {
      if (process.server) {
        console.log(`[Sample] SSR in validate | `, this.hoge, this.computedHoge)
      } else {
        console.log(`[Sample] CSR in validate | `, this.hoge, this.computedHoge)
      }
      return true
    },
    beforeCreate () {
      if (process.server) {
        console.log(`[Sample] SSR in beforeCreate | `, this.hoge, this.computedHoge)
      } else {
        console.log(`[Sample] CSR in beforeCreate | `, this.hoge, this.computedHoge)
      }
    },
    created () {
      if (process.server) {
        console.log(`[Sample] SSR in created | `, this.hoge, this.computedHoge)
      } else {
        console.log(`[Sample] CSR in created | `, this.hoge, this.computedHoge)
      }
    },
    beforeMount () {
      if (process.server) {
        console.log(`[Sample]　SSR in beforeMount | `, this.hoge, this.computedHoge)
      } else {
        console.log(`[Sample]　CSR in beforeMount | `, this.hoge, this.computedHoge)
      }
    },
    mounted () {
      if (process.server) {
        console.log(`[Sample]　SSR in mounted | `, this.hoge, this.computedHoge)
      } else {
        console.log(`[Sample]　CSR in mounted | `, this.hoge, this.computedHoge)
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
