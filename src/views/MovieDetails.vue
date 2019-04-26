<template>
    <div>
        <h2>Ебать ты лох</h2>
        <h1>{{movie.title}}</h1>
    </div>
</template>

<script>
    export default {
        props: {
            movie: {
                type: Object,
                required: true
            }
        },
        created() {
            console.log(this.movie)
        }
    }
</script>

<style lang="scss" scoped>

</style>