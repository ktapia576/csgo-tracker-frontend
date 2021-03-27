<template>
  <div class='container'> 
    <Header />
    <Search />
  </div>
</template>

<script>
import Header from './components/Header'
import Search from './components/Search'

export default {
  name: 'App',
  components: {
    Header,
    Search
  }
}
</script>

<style>

</style>