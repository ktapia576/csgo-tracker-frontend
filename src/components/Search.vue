<template>
    <section class="text-light">
        <h1 class="text-center mb-3">Track Player Stats</h1>
        <form v-on:submit.prevent="onSubmit">
            <div class="mb-3">
                <label for="steamID" class="form-label"><h5>Steam User Handle</h5></label>
                <input type="text" v-model="steamID" class="form-control" id="steamID" placeholder="Enter Steam Name, ID, or URL">
            </div>
            <div class="mb-3">
                <input type="submit" value="Submit" class="btn btn-light">
            </div>
        </form>
        <div class="container my-5">
            <h1 class="text-center mb-4">Top CS:GO Players</h1>
            <div class="list-group">
                <router-link to="/profile/steam/76561198155374184" class="list-group-item list-group-item-action"> Iriaisa </router-link>
                <router-link to="/profile/steam/76561198082096390" class="list-group-item list-group-item-action"> ツ CrystalEdits ❤ </router-link>
                <router-link to="/profile/steam/76561198406191265" class="list-group-item list-group-item-action"> Linus Tech Tips </router-link>
                <router-link to="/profile/steam/76561198295314290" class="list-group-item list-group-item-action"> Poteson </router-link>
            </div>
        </div>    
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