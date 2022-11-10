<template>
  <div class="flex flex-col space-y-5 space-y-[30px]">
    <auto-complete v-model="from" :id="from?.ID" :label="labels.first"/>
    <auto-complete v-model="to" :id="to?.ID" :label="labels.second"/>
    <amount-input v-model="count" :id="count" :label="labels.amount"/>
    <total-banner class="mt-5 md:mt-6 xl:mt-5 2xl:mt-[30px]" :sum="sum"/>
  </div>
</template>

<script>
import AutoComplete from "@/components/AutoComplete.vue";
import AmountInput from "@/components/AmountInput.vue";
import TotalBanner from "@/components/TotalBanner.vue";

export default {
  name: 'PulsCalculator',
  data: () => ({
    from: null,
    to: null,
    count: null,
    labels: {
      first: 'Валюта 1',
      second: 'Валюта 2',
      amount: 'Количество'
    }
  }),
  components: {
    AutoComplete,
    AmountInput,
    TotalBanner
  },

  computed: {
    sum({from, to, count}) {
      if (from === null || to === null || count === null)
        return null

      return count * ((from.Value * to.Nominal) / (from.Nominal * to.Value))
    }
  }
}
</script>