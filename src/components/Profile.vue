<template>
    <div>
        <div v-if="loading">
            <Spinner />
        </div>
        <div v-if="error">
            <h1 class="text-white my-5 text-center">{{error}}</h1>
            <div class="d-flex justify-content-center my-2 ">
                <router-link to="/" class="btn btn-sm btn-outline-light"> Go Back </router-link> 
            </div>
        </div>

        <div v-if="profileData">
            <ProfileHeader 
                :avatarUrl="profileData.platformInfo.avatarUrl" 
                :platformUserHandle="profileData.platformInfo.platformUserHandle" 
            />
            <ProfileStats 
                :timePlayed="profileData.segments[0].stats.timePlayed.displayValue" 
                :kills="profileData.segments[0].stats.kills.displayValue"
                :deaths="profileData.segments[0].stats.deaths.displayValue"
                :kd="profileData.segments[0].stats.kd.displayValue"
                :headshots="profileData.segments[0].stats.headshots.displayValue"
                :headshotPct="profileData.segments[0].stats.headshotPct.displayValue"
                :shotsAccuracy="profileData.segments[0].stats.shotsAccuracy.displayValue"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ProfileHeader from './ProfileHeader'
import ProfileStats from './ProfileStats'
import Spinner from './Spinner'

export default {
    name: "Profile",
    components: {
        Spinner,
        ProfileHeader,
        ProfileStats
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