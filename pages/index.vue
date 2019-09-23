<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-ssr-lifecycle 検証
      </h1>
    </div>
    <BeforeSample />
    <Sample />
    <input
      type="text"
      name="hoge"
      v-model="hoge"
    />
    <p v-if="hoge">{{ hoge }}</p>
    <nuxt-link to="csr">link</nuxt-link>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Sample from '~/components/Sample.vue'
import BeforeSample from '~/components/BeforeSample.vue'

export default {
  middleware: 'pageMiddleware',
  components: {
    Logo,
    Sample,
    BeforeSample
  },
  data() {
    return {
      hoge: 'hogehoge'
    }
  },
  asyncData () {
    if (process.server) {
      console.log(`SSR in asyncData | this.hoge error`) // hogeはundefinedエラー
    } else {
      console.log(`CSR in asyncData | this.hoge error`) // hogeはundefinedエラー
    }
  },
  fetch () {
    if (process.server) {
      console.log(`SSR in fetch | `, this.hoge, this.computedHoge)
    } else {
      console.log(`CSR in fetch | `, this.hoge, this.computedHoge)
    }
  },
  validate({ params, query, store }) {
    if (process.server) {
      console.log(`SSR in validate | `, this.hoge, this.computedHoge)
    } else {
      console.log(`CSR in validate | `, this.hoge, this.computedHoge)
    }
    return true
  },
  beforeCreate () {
    if (process.server) {
      console.log(`SSR in beforeCreate | `, this.hoge, this.computedHoge)
    } else {
      console.log(`CSR in beforeCreate | `, this.hoge, this.computedHoge)
    }
  },
  created () {
    if (process.server) {
      console.log(`SSR in created | `, this.hoge, this.computedHoge)
    } else {
      console.log(`CSR in created | `, this.hoge, this.computedHoge)
    }
  },
  beforeMount () {
    if (process.server) {
      console.log(`SSR in beforeMount | `, this.hoge, this.computedHoge)
    } else {
      console.log(`CSR in beforeMount | `, this.hoge, this.computedHoge)
    }
  },
  mounted () {
    if (process.server) {
      console.log(`SSR in mounted | `, this.hoge, this.computedHoge)
      console.log(this.computedHoge())
    } else {
      console.log(`CSR in mounted | `, this.hoge, this.computedHoge)
    }
  },
  beforeUpdate() {
    if (process.server) {
      console.log(`SSR in beforeUpdate | `, this.hoge, this.computedHoge)
      console.log(this.computedHoge())
    } else {
      console.log(`CSR in beforeUpdate | `, this.hoge, this.computedHoge)
    }
  },
  updated() {
    if (process.server) {
      console.log(`SSR in updated | `, this.hoge, this.computedHoge)
      console.log(this.computedHoge())
    } else {
      console.log(`CSR in updated | `, this.hoge, this.computedHoge)
    }
  },
  beforeDestroy() {
    if (process.server) {
      console.log(`SSR in beforeDestroy | `, this.hoge, this.computedHoge)
      console.log(this.computedHoge())
    } else {
      console.log(`CSR in beforeDestroy | `, this.hoge, this.computedHoge)
    }
  },
  destroyed() {
    if (process.server) {
      console.log(`SSR in destroyed | `, this.hoge, this.computedHoge)
      console.log(this.computedHoge())
    } else {
      console.log(`CSR in destroyed | `, this.hoge, this.computedHoge)
    }
  },
  computed: {
    computedHoge () {
      console.log("computed")
      return `computed_${this.hoge}`
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
