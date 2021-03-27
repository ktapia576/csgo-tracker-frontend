<template>
    <header>
        <img :src="image" class="img-fluid">
    </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
      return {
          image: require('@/assets/csgo-white.png')
      }
  }
}
</script>

<style>

</style>