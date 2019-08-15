<template>
    <div class="container">
        <div class="plans">
            <div class="plans__item">
                <div class="plans__item-container" @click="selected_plan = 1" :class="{active: selected_plan == 1}">
                    <p class="plans__item-name">
                        Basic
                    </p>
                    <p class="plans__item-price">
                        $49.99
                        <span>Montly</span>
                    </p>
                    <ul class="plans__item-list">
                        <li>
                            Team members
                            <span>$14.99 Each</span>
                        </li>
                        <li>
                            Property add-on
                            <span>$19.99 Each</span>
                        </li>
                        <li>
                            Checkin reports
                            <span>$9.99 Month</span>
                        </li>
                        <li>
                            Guest Invites
                            <span>10 Invites</span>
                        </li>
                        <li>
                            Questionnaire Limitations
                        </li>
                        <li>
                            No 24/7 Support
                        </li>
                        <li>
                            House Rules No Access
                        </li>
                        <li>
                            House Manual No Access
                        </li>
                    </ul>
                </div>
            </div>
            <div class="plans__item">
                <div class="plans__item-container" @click="selected_plan = 2" :class="{active: selected_plan == 2}">
                    <p class="plans__item-name">
                        Standard (Popular)
                    </p>
                    <p class="plans__item-price">
                        $99.99
                        <span>Montly</span>
                    </p>
                    <ul class="plans__item-list">
                        <li>
                            Team members
                            <span>$19.99 Each</span>
                        </li>
                        <li>
                            Property add-on
                            <span>$2.99 Each</span>
                        </li>
                        <li>
                            Checkin reports
                            <span>Unlimited</span>
                        </li>
                        <li>
                            Guest Invites
                            <span>Unlimited</span>
                        </li>
                        <li>
                            Questionnaire Limitations
                        </li>
                        <li>
                            No 24/7 Support
                        </li>
                        <li>
                            House Rules
                        </li>
                        <li>
                            House Manual
                        </li>
                    </ul>
                </div>
            </div>
            <div class="plans__item">
                <div class="plans__item-container" @click="selected_plan = 3" :class="{active: selected_plan == 3}">
                    <p class="plans__item-name">
                        Business
                    </p>
                    <p class="plans__item-price">
                        $199.99
                        <span>Montly</span>
                    </p>
                    <ul class="plans__item-list">
                        <li>
                            Team members
                            <span>Unlimited</span>
                        </li>
                        <li>
                            Property add-on
                            <span>Unlimited</span>
                        </li>
                        <li>
                            Checkin reports
                            <span>Unlimited</span>
                        </li>
                        <li>
                            Guest Invites
                            <span>Unlimited</span>
                        </li>
                        <li>
                            Questionnaire Limitations
                        </li>
                        <li>
                            No 24/7 Support
                        </li>
                        <li>
                            House Rules
                        </li>
                        <li>
                            House Manual
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <button class="btn" @click="popup.change_plan=true">
            Change plan
        </button>

        <vue-modaltor :visible="popup.change_plan" :resize-width='{768:"290px"}' :default-width="'370px'" @hide="hideModal">
            <div class="modal-change-plan">
                <p class="title_internal">
                    Change plan
                </p>
                <p class="title-mini_internal">
                    Are you sure you want to change your plan?
                </p>
                <p class="text">
                    The money will be charged to your card from the
                    beginning of the new month
                </p>
                <div class="btn-ctrl">
                    <button class="btn gray" @click="hideModal">
                        No
                    </button>
                    <button class="btn" @click="hideModal">
                        Yes
                    </button>
                </div>
            </div>
        </vue-modaltor>
    </div>
</template>

<script>
    export default {
        name: "account-settings-plan",
        data(){
            return {
                popup: {
                    change_plan: false,
                },
                selected_plan: false,
            }
        },
        methods: {
            hideModal() {
                _.each(this.popup, function (item, i, obj) {
                    obj[i] = false
                })
            },
            paymentAccept() {
                this.$router.push('history-reports')
            },
        }
    }
</script>

<style scoped>

</style>