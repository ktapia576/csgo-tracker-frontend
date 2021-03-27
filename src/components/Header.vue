<template>
    <header>
        <img :src="image" class="img-fluid">
    </header>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
          image: require('@/assets/csgo.jpg')
      }
  }
}
</script>

<style>

</style>