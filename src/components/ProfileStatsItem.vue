<template>
    <div class="container rounded bg-black shadow text-white p-2 my-3">
        <h6 class="ml-2">{{name}}:</h6>
        <div class="row justify-content-start">
            <div class="col-1 ml-2">
                <i :class="icon"></i>
            </div>
            <div class="col">
                {{value}}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ProfileStatsItem",
    props: {
        name: String,
        icon: String,
        value: String
    }
}

</script>

<style scoped>
.bg-black { 
    background-color: #2e2e2e!important;
}


</style>