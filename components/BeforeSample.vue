<template>
  <p>before sample</p>
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
        console.log(`[BeforeSample] SSR in asyncData | this.hoge error`) // hogeはundefinedエラー
      } else {
        console.log(`[BeforeSample] CSR in asyncData | this.hoge error`) // hogeはundefinedエラー
      }
    },
    fetch () {
      if (process.server) {
        console.log(`[BeforeSample] SSR in fetch | `, this.hoge, this.computedHoge)
      } else {
        console.log(`[BeforeSample] CSR in fetch | `, this.hoge, this.computedHoge)
      }
    },
    validate({ params, query, store }) {
      if (process.server) {
        console.log(`[BeforeSample] SSR in validate | `, this.hoge, this.computedHoge)
      } else {
        console.log(`[BeforeSample] CSR in validate | `, this.hoge, this.computedHoge)
      }
      return true
    },
    beforeCreate () {
      if (process.server) {
        console.log(`[BeforeSample] SSR in beforeCreate | `, this.hoge, this.computedHoge)
      } else {
        console.log(`[BeforeSample] CSR in beforeCreate | `, this.hoge, this.computedHoge)
      }
    },
    created () {
      if (process.server) {
        console.log(`[BeforeSample] SSR in created | `, this.hoge, this.computedHoge)
      } else {
        console.log(`[BeforeSample] CSR in created | `, this.hoge, this.computedHoge)
      }
    },
    beforeMount () {
      if (process.server) {
        console.log(`[BeforeSample]　SSR in beforeMount | `, this.hoge, this.computedHoge)
      } else {
        console.log(`[BeforeSample]　CSR in beforeMount | `, this.hoge, this.computedHoge)
      }
    },
    mounted () {
      if (process.server) {
        console.log(`[BeforeSample]　SSR in mounted | `, this.hoge, this.computedHoge)
      } else {
        console.log(`[BeforeSample]　CSR in mounted | `, this.hoge, this.computedHoge)
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
