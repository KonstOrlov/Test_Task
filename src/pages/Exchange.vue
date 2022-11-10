<template >
  <div class="container py-[20px] xl:py-[36px] 2xl:py-[30px]">
    <h1 class="font-bold md:font-medium text-20 md:text-26 2xl:text-36 text-primary mb-10">Курс Рубля</h1 >
    <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-[30px]">
      <CardCurrency
        v-for="(currency,index) in this.$store.getters['currency/getCurrency']"
        :key="`currency-${currency.CharCode}`"
        :currency="currency"
        :index="index"
      />
    </ul >
    <contacts class="mt-4 md:mt-[30px] xl:mt-12 2xl:mt-[30px]"/>
  </div >
</template >

<script >
import CardCurrency from "@/components/CardCurrency.vue";
import Contacts from "@/components/Contacts.vue";

export default {
  name: 'PulsExchange',
  head: {
    title: 'Курс рубля'
  },
  components: {
    CardCurrency,
    Contacts
  }
}
</script >