<template >
  <nav class="w-screen bg-gray h-[50px] md:h-10 2xl:h-[46px] flex items-center px-">
    <div class="container">
      <NavItem
          v-for="item in data"
          :key="item.label"
          :label="item.label"
          :path="item.path"/>
    </div >
  </nav >
</template >

<script >
import NavItem from "@/components/NavItem.vue";

export default {
  name: 'NavMenu',
  components: {NavItem},
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script >