<template>
    <div class="w-screen h-screen overflow-x-hidden bg-background font-roboto leading-none">
      <nav-menu :data="navData"/>
      <Nuxt />
    </div>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";

export default {
  data() {
    return {
      navData: [
        {
          label: 'Калькулятор',
          path: '/'
        },
        {
          label: 'Курс рубля',
          path: '/exchange'
        }
      ]
    }
  },
  components: {
    NavMenu
  },
  async fetch() {
    await this.$store.dispatch('currency/fetchCurrencies')
  }
}
</script>