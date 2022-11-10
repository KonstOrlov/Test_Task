<template >
  <section class="rounded-2xl w-full flex justify-center border border-border-gray flex-col bg-secondary text-text-main py-5 md:py-[22px] xl:py-6 2xl:py-10 px-4 md:px-[15px] xl:px-6 2xl:px-[30px]" >
    <h3 class="text-primary font-medium text-13 xl:text-15 2xl:text-18 uppercase leading-snug" >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:
    </h3 >
    <div class="flex flex-col md:flex-row items-start mt-[30px] md:mt-[25px] xl:mt-[40px] 2xl:mt-[50px]" >
      <benefits-list :model="benefits"
                     class="w-full text-14 md:text-13 xl:text-14 2xl:text-18 space-y-5 md:space-y-5 2xl:space-y-[30px]" />
      <benefits-images class="w-full md:w-[50%] xl:w-full mt-[30px] md:mt-0" />
    </div >
  </section >
</template >

<script >
import BenefitsImages from "@/components/BenefitsImages.vue";
import BenefitsList from "@/components/BenefitsList.vue";

export default {
  name: 'Benefits',
  data() {
    return {
      benefits: [
        "incididunt ut labore et dolore magna aliqua",
        "incididunt ut labore et",
        "incididunt ut labore et dolore",
        "labore et dolore",
        "incididunt ut",
        "incididunt ut labore et dolore",
        "incididunt ut labore"
      ]
    }
  },
  components: {
    BenefitsImages,
    BenefitsList
  }
}
</script >