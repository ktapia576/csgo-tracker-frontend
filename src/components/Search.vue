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
import { useToast } from "vue-toastification";

const toast = useToast();

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
            toast.error("Please enter a steamID")
        } else {
            this.$router.push(`/profile/steam/${this.steamID}`)
        }
    }
  }
}
</script>

<style>

</style>