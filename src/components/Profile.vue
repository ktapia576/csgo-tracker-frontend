<template>
    <div>
        <div v-if="loading">
            <Spinner />
        </div>
        <div v-if="error">
            <h1>{{error}}</h1>
            <router-link to="/"> Go Back </router-link>
        </div>

        <div v-if="profileData">
            <ProfileHeader :avatarUrl="profileData.platformInfo.avatarUrl" :platformUserHandle="profileData.platformInfo.platformUserHandle" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ProfileHeader from './ProfileHeader'
import Spinner from './Spinner'

export default {
    name: "Profile",
    components: {
        Spinner,
        ProfileHeader
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