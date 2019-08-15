<template>
    <div class="page-inputs__inner">
        <div class="wrapper">
            <ul class="navigation">
                <li @click="activeTab = 1" :class="{active: activeTab === 1}">Actual services</li>
                <li @click="activeTab = 2" :class="{active: activeTab === 2}">History of services</li>
            </ul>
            <div class="container" v-if="activeTab === 1">
                <div class="form">
                    <div class="service" v-for="(item, index) in valueLocal.services">
                        <div class="service__item">
                            <p class="service__item-name">
                                <input type="text" v-model="item.text" placeholder="Enter title of a service">
                            </p>
                            <p class="service__item-price">
                                <input type="text" v-model="item.price" placeholder="Enter your price">
                            </p>

                            <button class="service__item-delete" @click="valueLocal.services.splice(index, 1)"></button>
                        </div>
                    </div>

                    <button class="btn gray" v-on:click.prevent="valueLocal.services.push(newServiceInitial)">
                        Add the service
                    </button>
                </div>
            </div>
            <div class="container" v-if="activeTab === 2">
                <div class="form">
                    <p class="service__history-total">
                        <span>
                            Total:
                        </span>
                        $300
                    </p>
                    <div class="service__history">
                        <div class="service__history-item">
                            <div>
                                <p class="service__history-item__name">
                                    Flooding
                                </p>
                                <p class="service__history-item__status">
                                    Awaiting confirmation
                                </p>
                            </div>

                            <p class="service__history-item__price">
                                Free
                            </p>
                        </div>
                        <div class="service__history-item">
                            <div>
                                <p class="service__history-item__name">
                                    Flooding
                                </p>
                                <p class="service__history-item__status">
                                    Awaiting confirmation
                                </p>
                            </div>

                            <p class="service__history-item__price">
                                $100
                            </p>
                        </div>
                        <div class="service__history-item">
                            <div>
                                <p class="service__history-item__name">
                                    Flooding
                                </p>
                                <p class="service__history-item__status">
                                    Awaiting confirmation
                                </p>
                            </div>

                            <p class="service__history-item__price">
                                $100
                            </p>
                        </div>
                        <div class="service__history-item">
                            <div>
                                <p class="service__history-item__name">
                                    Flooding
                                </p>
                                <p class="service__history-item__status">
                                    Awaiting confirmation
                                </p>
                            </div>

                            <p class="service__history-item__price">
                                $100
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep';
    import isEqual from 'lodash/isEqual';
    import isEmpty from 'lodash/isEmpty';
    import debounce from 'lodash/debounce';

    const newServiceInitial = {
        text: '',
        price: null
    };

    export default {
        props: {
            value: {
                required: true,
                type: Object,
                default: () => ({})
            }
        },

        data() {
            return {
                valueLocal: cloneDeep(this.value),
                newServiceInitial: newServiceInitial,
                activeTab: 1,
            }
        },

        watch: {
            value: function () {
                if (isEqual(this.valueLocal, this.value)) {
                    return;
                }
                this.valueLocal = cloneDeep(this.value);
            },
            valueLocal: {
                handler: debounce(function (value, valueOld) {
                    if (isEmpty(valueOld)) {
                        return;
                    }
                    this.$emit('input', this.valueLocal);
                }, 500),
                deep: true
            }
        },

        methods: {
            deleteService: function (index) {
                this.services.splice(index, 1);
            },
            addService: function () {
                var сlone = JSON.stringify(this.service);
                сlone = JSON.parse(сlone);
                this.services.push(сlone);

                for (var item in this.service){
                    this.service[item] = '';
                }
            },
        }
    }
</script>
