<template>
    <section class="text-light">
        <h1>Track Player Stats</h1>
        <form v-on:submit.prevent="onSubmit">
            <div class="mb-3">
                <label for="steamID" class="form-label">Steam ID</label>
                <input type="text" v-model="steamID" class="form-control" id="steamID" placeholder="Enter your steam ID here">
            </div>
            <div class="mb-3">
                <input type="submit" value="Submit" class="btn btn-light">
            </div>
        </form>
    </section>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
        steamID: ""
    }
  },
  methods: {
    onSubmit() {
        if(!this.steamID) {
            console.log("Please enter a steamID")
        } else {
            console.log("will redirect")
        }
    }
  }
}
</script>

<style>

</style>