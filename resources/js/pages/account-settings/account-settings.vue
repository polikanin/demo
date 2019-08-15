<template>
    <div class="page-inputs">
        <div class="wrapper">
            <div class="page-head">
                <div>
                    <h2 class="title">
                        Account settings
                    </h2>
                    <p class="text">
                        Profile and payment settings
                    </p>
                </div>
            </div>

            <div class="tabs-wrapper">
                <div class="tabs">
                    <button class="tabs__btn" @click="setStep(1)" :class="{active: active_step == 1}">Subscription plan</button>
                    <button class="tabs__btn" @click="setStep(2)" :class="{active: active_step == 2}">General</button>
                    <button class="tabs__btn" @click="setStep(3)" :class="{active: active_step == 3}">My managers</button>
                    <button class="tabs__btn" @click="setStep(4)" :class="{active: active_step == 4}">Payment details</button>
                </div>
            </div>

            <account-settings-plan v-if="active_step == 1" v-on:changeStep="setStep"></account-settings-plan>
            <account-settings-general v-if="active_step == 2" v-on:changeStep="setStep"></account-settings-general>
            <account-settings-managers v-if="active_step == 3" v-on:changeStep="setStep"></account-settings-managers>
            <account-settings-payment v-if="active_step == 4" v-on:changeStep="setStep"></account-settings-payment>
        </div>
    </div>
</template>

<script>
    import AccountSettingsPlan from './account-settings-plan'
    import AccountSettingsGeneral from './account-settings-general'
    import AccountSettingsManagers from './account-settings-managers'
    import AccountSettingsPayment from './account-settings-payment'

    export default {
        name: "account-settings",
        components: {
            AccountSettingsPlan,
            AccountSettingsGeneral,
            AccountSettingsManagers,
            AccountSettingsPayment
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