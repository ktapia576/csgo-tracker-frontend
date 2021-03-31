<template>
    <div class="container rounded bg-light shadow p-5 my-4">
        <div class="row">
            <div class="col">
                <img :src="avatarUrl" class="rounded-circle img-fluid" >
            </div>
            <div class="col-8">
                <h5 class="ml-3 font-weight-bold text-break">Pinakanakapagpapabagabag-damdami</h5>
            </div>
        </div>
    </div>
</template>

<script>
// {{ platformUserHandle }}
export default {
    name: "ProfileHeader",
    props: {
        avatarUrl: String,
        platformUserHandle: String
    }
}

</script>

<style scoped>

</style>