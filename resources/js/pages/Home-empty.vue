<template>
    <div class="page-home">
        <div class="wrapper" style="display: none">
            <div class="page-head">
                <div>
                    <h2 class="title">
                        Your property
                    </h2>
                    <p class="text">
                        Objects in which guests currently live
                    </p>
                </div>
            </div>

            <div class="property__list">
                <div class="property__item" v-for="n in 5">
                    <div class="property__item-head">
                        <img :src="'./static/prop-1.png'" alt="pic" class="property__item-head__pic">
                        <div class="">
                            <p class="title_internal">
                                Regnum Apartment
                            </p>
                            <p class="subtitle">
                                <img src="/images/icons/icon-pin.svg" alt="pic">
                                Los Angeles, California
                            </p>
                            <p class="text">
                                <span class="title-mini_internal">Status:</span> Used now
                            </p>
                        </div>
                    </div>
                    <div class="property__item-description">
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Checkin
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
                                Checkout
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
                                Contacts guest
                            </p>
                            <p class="text">
                                8 (800) 555-3535
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Name guest
                            </p>
                            <p class="text">
                                John Doe
                            </p>
                        </div>
                    </div>
                    <div class="property__item-ctrl">
                        <button class="btn gray">
                            Reservations
                        </button>
                        <button class="btn">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="empty-property">
            <p class="title">
                You don’t have any properties
            </p>
            <p class="subtitle">
                Please, add a property from Booking
            </p>
            <button class="btn">
                Add a property
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        components: {

        },
        data(){
            return {
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
            var self = this;
            // this.$parent.axios.get('./question-data.json')
            //     .then(function (response) {
            //         self.room_list = response.data;
            //         console.log(self.room_list)
            //     })
            //     .catch(function (error) {
            //         //alert(error);
            //     });
        },
        methods: {
            methodToRunOnSelect(payload) {
                this.object = payload;
            }
        }
    }
</script>

<style scoped>

</style>
