<template>
    <div class="page-home">
        <div class="wrapper">
            <div class="page-head">
                <div>
                    <h2 class="title">
                        Service Requests
                    </h2>
                    <p class="text">
                        Objects in which guests currently live
                    </p>
                </div>
            </div>

            <div class="property__list">
                <div class="property__item">
                    <div class="property__item-head">
                        <img src="/images/static/prop-1.png" alt="pic" class="property__item-head__pic">
                        <div class="">
                            <p class="title_internal">
                                Regnum Apartment
                            </p>
                            <p class="subtitle">
                                <img src="/images/icons/icon-pin.svg" alt="pic">
                                Los Angeles, California
                            </p>
                            <p class="text">
                                <span class="title-mini_internal">Status:</span> Awaiting confirmation
                            </p>
                        </div>
                    </div>
                    <div class="property__item-description">
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Service
                            </p>
                            <p class="text">
                                Flooding
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Order date
                            </p>
                            <p class="text">
                                11.03.2019
                            </p>
                            <p class="text">
                                1:20 am
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Payment
                            </p>
                            <p class="text">
                                Card
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Cost
                            </p>
                            <p class="text">
                                $123
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Contacts guest
                            </p>
                            <p class="text">
                                8 (800) 555-3535
                            </p>
                        </div>
                    </div>
                    <div class="property__item-ctrl">
                        <button class="btn gray">
                            Reject
                        </button>
                        <button class="btn">
                            Accept
                        </button>
                    </div>
                </div>
                <div class="property__item">
                    <div class="property__item-head">
                        <img src="/images/static/prop-1.png" alt="pic" class="property__item-head__pic">
                        <div class="">
                            <p class="title_internal">
                                Regnum Apartment
                            </p>
                            <p class="subtitle">
                                <img src="/images/icons/icon-pin.svg" alt="pic">
                                Los Angeles, California
                            </p>
                            <p class="text">
                                <span class="title-mini_internal">Status:</span> In progress
                            </p>
                        </div>
                    </div>
                    <div class="property__item-description">
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Service
                            </p>
                            <p class="text">
                                Flooding
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Order date
                            </p>
                            <p class="text">
                                11.03.2019
                            </p>
                            <p class="text">
                                1:20 am
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Payment
                            </p>
                            <p class="text">
                                Card
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Cost
                            </p>
                            <p class="text">
                                $123
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Contacts guest
                            </p>
                            <p class="text">
                                8 (800) 555-3535
                            </p>
                        </div>
                    </div>
                    <div class="property__item-ctrl">
                        <p class="property__item-status">Done</p>
                    </div>
                </div>
                <div class="property__item">
                    <div class="property__item-head">
                        <img src="/images/static/prop-1.png" alt="pic" class="property__item-head__pic">
                        <div class="">
                            <p class="title_internal">
                                Regnum Apartment
                            </p>
                            <p class="subtitle">
                                <img src="/images/icons/icon-pin.svg" alt="pic">
                                Los Angeles, California
                            </p>
                            <p class="text">
                                <span class="title-mini_internal">Status:</span> Unpaid
                            </p>
                        </div>
                    </div>
                    <div class="property__item-description">
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Service
                            </p>
                            <p class="text">
                                Flooding
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Order date
                            </p>
                            <p class="text">
                                11.03.2019
                            </p>
                            <p class="text">
                                1:20 am
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Payment
                            </p>
                            <p class="text">
                                Card
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Cost
                            </p>
                            <p class="text">
                                $123
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Contacts guest
                            </p>
                            <p class="text">
                                8 (800) 555-3535
                            </p>
                        </div>
                    </div>
                    <div class="property__item-ctrl">
                        <button class="btn" @click="popup.refund=true">
                            Request payment
                        </button>
                    </div>
                </div>
                <div class="property__item">
                    <div class="property__item-head">
                        <img src="/images/static/prop-1.png" alt="pic" class="property__item-head__pic">
                        <div class="">
                            <p class="title_internal">
                                Regnum Apartment
                            </p>
                            <p class="subtitle">
                                <img src="/images/icons/icon-pin.svg" alt="pic">
                                Los Angeles, California
                            </p>
                            <p class="text">
                                <span class="title-mini_internal">Status:</span> Waiting for return
                            </p>
                        </div>
                    </div>
                    <div class="property__item-description">
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Service
                            </p>
                            <p class="text">
                                Flooding
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Order date
                            </p>
                            <p class="text">
                                11.03.2019
                            </p>
                            <p class="text">
                                1:20 am
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Payment
                            </p>
                            <p class="text">
                                Card
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Cost
                            </p>
                            <p class="text">
                                $123
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Contacts guest
                            </p>
                            <p class="text">
                                8 (800) 555-3535
                            </p>
                        </div>
                    </div>
                    <div class="property__item-ctrl">
                        <p class="property__item-status">
                            Refund
                        </p>
                    </div>
                </div>
                <div class="property__item">
                    <div class="property__item-head">
                        <img src="/images/static/prop-1.png" alt="pic" class="property__item-head__pic">
                        <div class="">
                            <p class="title_internal">
                                Regnum Apartment
                            </p>
                            <p class="subtitle">
                                <img src="/images/icons/icon-pin.svg" alt="pic">
                                Los Angeles, California
                            </p>
                            <p class="text">
                                <span class="title-mini_internal">Status:</span> Closed refund
                            </p>
                        </div>
                    </div>
                    <div class="property__item-description">
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Service
                            </p>
                            <p class="text">
                                Flooding
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Order date
                            </p>
                            <p class="text">
                                11.03.2019
                            </p>
                            <p class="text">
                                1:20 am
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Payment
                            </p>
                            <p class="text">
                                Card
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Cost
                            </p>
                            <p class="text">
                                $123
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Contacts guest
                            </p>
                            <p class="text">
                                8 (800) 555-3535
                            </p>
                        </div>
                    </div>
                    <div class="property__item-ctrl">
                        <p class="property__item-status">
                            Refund
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <vue-modaltor
                :visible="popup.refund"
                :resize-width='{768:"290px"}'
                :default-width="'370px'"
                @hide="hideModal"
                :show-close-button="false"
        >
            <div class="modal-request-report">
                <p class="title_internal">
                    Get a refund
                </p>
                <p class="title-mini_internal">
                    Are you sure you want to refund 1200$
                </p>
                <div class="btn-ctrl">
                    <button class="btn gray" @click="hideModal">
                        No
                    </button>
                    <button class="btn">
                        Yes
                    </button>
                </div>
            </div>
        </vue-modaltor>
    </div>
</template>

<script>
    export default {
        name: "ServiceRequests",
        components: {

        },
        data(){
            return {
                popup: {
                    refund: false,
                },
                selected: false,
                object: {
                    name: 'Object Name',
                },
                arrayOfObjects: [
                    {
                        name: '1'
                    },
                    {
                        name: '2'
                    },
                    {
                        name: '3'
                    },
                ],
            }
        },
        mounted() {

        },
        methods: {
            hideModal() {
                _.each(this.popup, function (item, i, obj) {
                    obj[i] = false
                })
            },
        }
    }
</script>

<style scoped>

</style>
