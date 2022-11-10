<template >
  <div class="w-full pb-[20px] xl:pb-5 2xl:pb-[30px]">
    <div class="container py-[20px] xl:py-[36px] 2xl:py-[30px]">

      <h1 class="font-bold md:font-medium text-20 md:text-26 2xl:text-36 text-primary mb-10">Валютный калькулятор</h1>

      <div class="flex flex-col md:flex-row items-start md:space-x-7 xl:space-x-10 2xl:space-x-[36px] mt-6 md:mt-5 xl:mt-[30px] 2xl:mt-10">
        <puls-calculator class="w-full"/>
        <pulsar-lorem-banner class="w-full mt-[17px] md:mt-0"/>
      </div>

    </div>
    <div class="md:container">
      <pulsar-help-banner/>
    </div>
  </div >
</template >

<script >
import PulsCalculator from "@/components/Calculator.vue";
import PulsarLoremBanner from "@/components/Benefits.vue";
import PulsarHelpBanner from "@/components/HelpSection.vue";

export default {
  head: {
    title: 'Калькулятор'
  },
  components: {
    PulsCalculator,
    PulsarLoremBanner,
    PulsarHelpBanner
  }
}
</script >

<style lang="scss" module >

.Example {
  //
}

</style >
