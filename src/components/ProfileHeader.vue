<template>
    <div class="container rounded bg-light shadow p-5 my-3">
        <div class="row">
            <div class="col">
                <img :src="avatarUrl" class="rounded-circle img-fluid" >
            </div>
            <div class="col-8">
                <h5 class="ml-3 font-weight-bold text-break">{{ platformUserHandle }}</h5>
            </div>
        </div>
    </div>
</template>

<script>

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