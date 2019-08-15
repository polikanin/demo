<template>
    <transition name="fade">
        <div class="notification__wrapper">
            <div class="notification__layout" @click="close()">

            </div>
            <div class="wrapper">
                <div class="notification">
                    <h3 class="title_internal">
                        Notifications
                    </h3>
                    <div class="notification__list">
                        <div class="notification__group">
                            <p class="title-mini_internal">
                                Today
                            </p>
                            <div class="notification__item">
                                <div class="notification__item-col">
                                    <p class="title-mini_internal">
                                        Cleaning request
                                    </p>
                                    <p class="text">
                                        Regnum Apartment
                                    </p>
                                </div>
                                <div class="notification__item-col split">
                                    <button class="btn gray">
                                        Reject
                                    </button>
                                    <button class="btn">
                                        Accept
                                    </button>
                                </div>
                            </div>
                            <div class="notification__item">
                                <div class="notification__item-col">
                                    <p class="title-mini_internal">
                                        Resident left
                                    </p>
                                    <p class="text">
                                        Regnum Apartment
                                    </p>
                                </div>
                                <div class="notification__item-col">
                                    <button class="btn">
                                        Check answers
                                    </button>
                                </div>
                            </div>
                            <div class="notification__item">
                                <div class="notification__item-col">
                                    <p class="title-mini_internal">
                                        Resident left
                                    </p>
                                    <p class="text">
                                        Regnum Apartment
                                    </p>
                                </div>
                                <div class="notification__item-col">
                                    <button class="btn">
                                        Check answers
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="notification__group">
                            <p class="title-mini_internal">
                                Yesterday
                            </p>
                            <div class="notification__item">
                                <div class="notification__item-col">
                                    <p class="title-mini_internal">
                                        Tenant moved in
                                    </p>
                                    <p class="text">
                                        Regnum Apartment
                                    </p>
                                </div>
                                <div class="notification__item-col">
                                    <button class="btn">
                                        Check answers
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="notification__text">
                        <p class="title-mini_internal">
                            John Doe accepted your invitation to moderation
                        </p>
                    </div>

                    <div class="notification__total">
                        <p class="title-mini_internal">
                            You paid $70
                        </p>
                        <p class="text">
                            Subscription fee
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Notification",
        data(){
            return {

            }
        },
        mounted() {

        },
        methods: {
            close: function () {
                this.$emit('closeNotes')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>