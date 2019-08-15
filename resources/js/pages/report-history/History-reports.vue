<template>
    <div class="page-home">
        <div class="wrapper">
            <div class="back-to-page">
                <router-link to="/checkin-history">
                    <img src="/images/icons/icon-back.svg" alt="pic">
                    Reports History
                </router-link>
            </div>

            <div class="property__list">
                <div class="property__item" v-for="n in 4">
                    <div class="property__item-description">
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Checkin
                            </p>
                            <p class="text">
                                11.03.2019 11:30 am
                            </p>
                        </div>
                        <div class="property__item-description__col">
                            <p class="title-mini_internal">
                                Checkout
                            </p>
                            <p class="text">
                                11.03.2019 1:20 am
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
                    <button class="btn" @click="popup.request=true">
                        Request report
                    </button>
                </div>
            </div>
        </div>

        <vue-modaltor :visible="popup.request" :resize-width='{768:"290px"}' :default-width="'370px'" @hide="hideModal">
            <div class="modal-request-report">
                <p class="title_internal">
                    Request report
                </p>
                <p class="title-mini_internal">
                    To request report $10 will be deducted from
                    your account at the end of the month.
                    Do you want to continue?
                </p>
                <div class="btn-ctrl">
                    <button class="btn gray" @click="hideModal">
                        No
                    </button>
                    <button class="btn" @click="paymentAccept">
                        Yes
                    </button>
                </div>
            </div>
        </vue-modaltor>
    </div>
</template>

<script>
    export default {
        name: "History-reports",
        data(){
            return {
                popup: {
                    request: false,
                },
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
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../sass/sass/variables";

    .property__list{
      width: 100%;
      max-width: 890px;
      margin-right: auto;
      margin-left: auto;
    }

    .property__item{
      padding: 30px 20px 30px 0px;

      @media (max-width: ($width-lg - 20)){
        padding: 20px;
      }

      &-description{
        padding: 0 78px 0 0;
        max-width: calc(100% - 140px);

        @media (max-width: ($width-lg - 20)){
          max-width: 100%;
          padding: 0;
        }
      }
    }
</style>
