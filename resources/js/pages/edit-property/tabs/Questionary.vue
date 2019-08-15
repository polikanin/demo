<template>
    <div class="page-inputs__inner">
        <div class="wrapper">
            <div class="container">
                <div class="form">
                    <div class="questions" v-for="(item, index) in rooms">
                        <div class="questions__item">
                            <p class="questions__item-name">
                                {{item.name}}
                            </p>
                            <input type="text" class="input" v-model="item.question" placeholder="Enter a question (optional)">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Step-2",
        data(){
            return {
                rooms: this.$parent.rooms
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>