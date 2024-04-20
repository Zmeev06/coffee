<script setup lang='ts'>

</script>
<template>
  <div class="flex flex-col gap-4 items-center w-fit">
    <div class=" rounded-full border p-2">
      <div class="h-[250px] w-[250px] overflow-hidden rounded-full bg-gray-400">
        <slot name="photo" />
      </div>
    </div>
    
    <div>
      <slot name="button" />

    </div>
  </div>
</template>
<style lang='scss'></style>