<template>
    <div class="text-light">
        <div v-if="loading">
            <Spinner />
        </div>
        <div v-if="error">
            <h1>{{error}}</h1>
            <router-link to="/"> Go Back </router-link>
        </div>

        <div v-if="profileData">
            {{profileData.platformInfo.platformUserHandle}}
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Spinner from './Spinner'

export default {
    name: "Profile",
    components: {
        Spinner
    },
    data() {
        return {
            loading: false,
            error: null,
            profileData: null
        }
    },
    async created() {
        this.loading = true
        try {
            const res = await axios.get(`/api/v1/profile/steam/${this.$route.params.steamID}`)

            this.profileData = res.data.data;
            this.loading = false
        } catch (err) {
            this.loading = false
            this.error = err.response.data.message;
        }
    }
}

</script>

<style>

</style>