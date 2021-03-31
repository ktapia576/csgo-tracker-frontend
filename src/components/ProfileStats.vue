<template>
    <div class="container rounded bg-black shadow text-white">
        {{timePlayed}}
    </div>
</template>

<script>

export default {
    name: "ProfileStats",
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
.bg-black { 
    background-color: #000000!important;
}


</style>