<template>
    <div>
        <ProfileStatsItem name="Time Played" icon="far fa-clock" :value="timePlayed" />
        <ProfileStatsItem name="Kills" icon="fas fa-user" :value="kills" />
        <ProfileStatsItem name="Deaths" icon="fas fa-dizzy" :value="deaths" />
        <ProfileStatsItem name="K/D" icon="fas fa-balance-scale-left" :value="kd" />
        <ProfileStatsItem name="Headshots" icon="fas fa-crosshairs" :value="headshots" />
        <div class="row">
            <div class="col">
                <ProfileStatsItem name="Headshot Percentage" icon="fas fa-bullseye" :value="headshotPct" />
            </div>
            <div class="col">
                <ProfileStatsItem name="Shot Accuracy" icon="fas fa-percent" :value="shotsAccuracy" />
            </div>
        </div> 
        <div class="d-flex justify-content-center my-2">
            <router-link to="/" class="btn btn-sm btn-outline-light"> Go Back </router-link> 
        </div>
    </div> 
</template>

<script>
import ProfileStatsItem from './ProfileStatsItem'

export default {
    name: "ProfileStats",
    components: {
        ProfileStatsItem
    },
    props: {
        timePlayed: String,
        kills: String,
        deaths: String,
        kd: String,
        headshots: String,
        headshotPct: String,
        shotsAccuracy: String
    }
}

</script>

<style scoped>

</style>