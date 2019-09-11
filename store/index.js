export const state = () => ({
})

export const getters = {
}

export const mutations = {
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (process.server) {
      console.log(`SSR in nuxtServerInit`)
    } else {
      console.log(`CSR in nuxtServerInit`)
    }
  }
}
