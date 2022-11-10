<template >
  <nuxt-link
      :to="path"
      class="px-4 first:pl-0 font-medium text-12"
      :class="path !== $route.path? 'text-text-gray-500': 'text-text-gray-700'"
  >
    {{label}}
  </nuxt-link>
</template >

<script >
export default {
  name: 'NavItem',
  props: {
    label: String,
    path: String
  }
}
</script >