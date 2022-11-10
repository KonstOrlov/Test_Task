const state = () => ({
  currencies: null
})

const getters = {
  getCurrency(state) {
    return state.currencies
  }
}

const mutations = {
  setCurrencies(state, currencies) {
    state.currencies = Object.keys(currencies).map(charCode => currencies[charCode])
  }
}

const actions = {
  async fetchCurrencies({ commit }) {
    try {
      const response = await this.$axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
      if (response.status === 200) {
        commit("setCurrencies", response.data["Valute"])
      }
    }catch (error) {
      console.log('Error:', error)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}