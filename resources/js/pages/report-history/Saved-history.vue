<template>
    <div>
        <div class="page-head">
            <form action="" class="search">
                <input type="text" v-model="search" class="input" placeholder="Search property">
                <button class="btn gray">Search</button>
            </form>

            <button class="btn filter" @click="popup.filter=true">
                Filter
            </button>
        </div>

        <div class="history" v-if="history_list.length > 0">
            <!--<div class="history__item" v-for="(item, index) in filtered_list">-->
            <div class="history__item" v-for="(item, index) in 3">
                <div class="history__item-container">
                    <img src="/images/static/prop-1.png" alt="pic" class="history__item-pic">

                    <p class="history__item-name">
                        {{item.name}}
                    </p>

                    <p class="history__item-location">
                        <img src="/images/icons/icon-pin.svg" alt="pic">
                        {{item.location}}
                    </p>
                    <p class="history__item-text">
                        <span>Status:</span> {{item.status}}
                    </p>
                    <p class="history__item-text">
                        <span>Total reports:</span> {{item.total}}
                    </p>
                    <button class="btn">
                        <router-link to="/history-reports"></router-link>
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

        <vue-modaltor
                :visible="popup.filter"
                :resize-width='{768:"290px"}'
                :default-width="'326px'"
                @hide="hideModal"
                :show-close-button="false"
        >
            <div class="modal-filter">
                <p class="title_internal">
                    Filter
                </p>
                <date-range-picker
                        :presets="['today', 'yesterday', 'next7days', 'last7days', 'next30days', 'last30days', 'custom']"
                        :from="query.from"
                        :to="query.to"
                        :panel="query.panel"
                        @update="update"
                />
            </div>
        </vue-modaltor>
    </div>
</template>

<script>
    export default {
        name: "Saved-history",
        data(){
            return {
                popup: {
                    request: false,
                    filter: false,
                },
                history_list: [],
                search: '',
                query: {
                    to: '2019-04-23T10:26:00.996Z',
                    from: '2018-04-23T10:26:00.996Z',
                    panel: 'range'
                }
            }
        },
        mounted() {
            var self = this;
            this.$parent.axios.get('./saved-history-data.json')
                .then(function (response) {
                    self.history_list = response.data;
                })
                .catch(function (error) {

                });
        },
        computed: {
            filtered_list: function(){
                var self = this;
                var result;
                var value = this.search;

                result = self.history_list;

                if(value){
                    result = _.filter(result, function (item) {
                        return item.name.toLowerCase().includes(value.toLowerCase())
                    })
                }

                return result;
            },
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
            update(values) {
                console.log(values)
            }
        }
    }
</script>

<style scoped>

</style>
