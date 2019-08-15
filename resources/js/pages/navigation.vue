<template>
    <div class="wrapper">
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__link" v-for="item in nav">
                    <router-link :to="item.path">{{item.path}}</router-link>
                </li>

            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "navigation",
        data(){
            return {
                nav: this.$router.options.routes
            }
        },
        mounted: function () {

        }
    }
</script>

<style lang="scss" scoped>
    .nav{
        width: 100%;
        padding: 50px 0;
        text-align: left;

        &__link{
            margin: 15px 0;
        }
    }
</style>