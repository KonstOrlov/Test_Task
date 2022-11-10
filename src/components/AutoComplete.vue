<template>
  <div class="relative flex flex-col">
    <label
        :for="id"
        class="text-14 2xl:text-16 font-medium text-text-dark"
    >
      {{label}}
    </label>
    <input
        v-model="model"
        :id="id"
        @focusin="showOptions"
        @focusout="hiddenOptions"
        @input="updateValue"
        class="mt-3 border border-border-gray rounded-[5px] p-5 text-12 2xl:text-14"
        placeholder="Введите название или код"
    />
    <template v-if="currencies !== null && showOptionsModel">
      <ul class="absolute rounded-[5px] w-full select-none bg-gray top-[86px] 2xl:top-[90px] z-10" >
        <li
            v-for="currency in currencies"
            :key="`${id}-option-${currency.CharCode}`"
            class="px-4 py-2 hover:bg-secondary cursor-pointer"
            @mousedown="select(currency)"
        >
          <span class="font-bold">{{currency.CharCode}}</span> - {{currency.Name}}
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  name: 'AutoComplete',
  props: {
    value: [Object, null],
    label: [String, null],
    id: [String, null]
  },
  data: () => ({
    model: "",
    showOptionsModel: true
  }),
  methods: {
    select (currency) {
      this.model = currency.CharCode
      this.$emit("input", currency)
      this.hiddenOptions()
    },
    showOptions () {
      this.showOptionsModel = true
    },
    hiddenOptions () {
      this.showOptionsModel = false
    },
    updateValue () {
      const currency = this.$store.getters["currency/getCurrency"].find((item) => item.CharCode === this.model)
      this.$emit("input", currency ? currency : null)
    }
  },
  computed: {
    currencies({$store, model}) {
      if (model === "")
        return null

      const search = model.toLowerCase()

      return $store.getters["currency/getCurrency"].filter(item =>
          item.CharCode.toLowerCase().includes(search) ||
          item.Name.toLowerCase().includes(search)
      )
    }
  }
}
</script>
