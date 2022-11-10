<template>
  <div class="flex flex-col">
    <label
        :for="id"
        class="text-14 2xl:text-16 font-medium text-text-dark"

    >{{label}}</label>
    <input
        v-model="model"
        type="number"
        @input="updateValue"
        :id="id"
        class="mt-3 border border-border-gray rounded-[5px] p-5 text-12 2xl:text-14"
        placeholder="Введите число"
    />
  </div>
</template>

<script>

export default {
  name: 'AmountInput',
  props: {
    value: [Number, null],
    label: [String, null],
    id: [Number, null]
  },
  data: () => ({
    model: ""
  }),
  methods: {
    updateValue () {
      if (this.model === "") {
        this.$emit('input', null)
      } else {
        this.$emit('input', +this.model)
      }
    }
  }
}
</script>

<style>
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>

