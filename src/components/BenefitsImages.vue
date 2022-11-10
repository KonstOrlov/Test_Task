<template >
  <ul class="
    grid grid-cols-4 md:grid-cols-1 xl:grid-cols-2
    gap-x-[7px] md:gap-y-[5px] xl:gap-x-[11px] xl:gap-y-2
    2xl:gap-x-[15px] 2xl:gap-y-[10px]">
    <li class="w-full overflow-hidden aspect-w-43 aspect-h-29 xl:aspect-w-1 xl:aspect-h-1
                 rounded-tr-[15px] rounded-bl-[15px]
                 xl:rounded-tr-none xl:rounded-bl-none
    ">
      <img class="object-cover h-full" :src="require('~/assets/images/img-1.jpg')" alt="image" />
    </li >
    <li class="w-full overflow-hidden aspect-w-43 aspect-h-29 xl:aspect-w-1 xl:aspect-h-1
                 rounded-tl-[15px] rounded-br-[15px]
                 xl:rounded-tl-none xl:rounded-br-none xl:rounded-tr-[50px]
    ">
      <img class="object-cover h-full" :src="require('~/assets/images/img-2.jpg')" alt="image" />
    </li >
    <li class="w-full overflow-hidden aspect-w-43 aspect-h-29 xl:aspect-w-1 xl:aspect-h-1
                 rounded-tr-[15px] rounded-bl-[15px]
                 md:rounded-tr-none md:rounded-bl-none md:rounded-tl-[15px] md:rounded-br-[15px]
                 xl:rounded-tl-none xl:rounded-br-none xl:rounded-bl-[50px]
    ">
      <img class="object-cover h-full" :src="require('~/assets/images/img-3.jpg')" alt="image" />
    </li >
    <li class="w-full overflow-hidden aspect-w-43 aspect-h-29 xl:aspect-w-1 xl:aspect-h-1
                 rounded-tl-[15px] rounded-br-[15px]
                 xl:rounded-tl-none xl:rounded-br-none
    ">
      <img class="object-cover h-full" :src="require('~/assets/images/img-4.png')" alt="image" />
    </li >
  </ul >
</template >

<script >
export default {
  name: 'BenefitsImages'
}
</script >