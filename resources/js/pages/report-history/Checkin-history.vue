<template>
    <div class="page-history">
        <div class="wrapper">
            <div class="page-head">
                <div>
                    <h2 class="title">
                        Reports History
                    </h2>
                    <p class="text">
                        Reports on your objects
                    </p>
                </div>
            </div>

            <div class="tabs-wrapper">
                <div class="tabs">
                    <button class="tabs__btn" @click="setStep(1)" :class="{active: active_step == 1}">All history</button>
                    <button class="tabs__btn" @click="setStep(2)" :class="{active: active_step == 2}">Saved history</button>
                </div>
            </div>

            <div class="container">
                <all-history v-if="active_step == 1" v-on:changeStep="setStep"></all-history>
                <saved-history v-if="active_step == 2" v-on:changeStep="setStep"></saved-history>
            </div>
        </div>
    </div>
</template>

<script>
    import AllHistory from './All-history'
    import SavedHistory from './Saved-history'

    export default {
        name: "Report-history",
        components: {
            'all-history': AllHistory,
            'saved-history': SavedHistory,
        },
        data(){
            return {
                active_step: 1,
            }
        },
        methods: {
            setStep: function (n) {
                this.active_step = n
            },
        }
    }
</script>

<style scoped>

</style>