<template>
    <div class="page-inputs">
        <div class="wrapper">
            <div class="page-head">
                <div>
                    <h2 class="title">
                        Edit property
                    </h2>
                    <p class="text">
                        Objects in which guests currently live
                    </p>
                </div>
            </div>

            <div class="tabs-wrapper">
                <div class="tabs">
                    <router-link class="tabs__btn" :to="{ name: 'edit-property' }" :class="{ active: $route.name === 'edit-property'}">House information</router-link>
                    <router-link class="tabs__btn" :to="{ name: 'edit-property.questionary' }" :class="{ active: $route.name === 'edit-property.questionary'}">Questionary</router-link>
                    <router-link class="tabs__btn" :to="{ name: 'edit-property.service-requests' }" :class="{ active: $route.name === 'edit-property.service-requests'}">Service request</router-link>
                    <router-link class="tabs__btn" :to="{ name: 'edit-property.wifi' }" :class="{ active: $route.name === 'edit-property.wifi'}">Wifi information</router-link>
                    <router-link class="tabs__btn" :to="{ name: 'edit-property.rules' }" :class="{ active: $route.name === 'edit-property.rules'}">Rules</router-link>
                    <router-link class="tabs__btn" :to="{ name: 'edit-property.manuals' }" :class="{ active: $route.name === 'edit-property.manuals'}">Manual</router-link>
                </div>
            </div>

            <div class="container">
                <router-view v-model="property" />
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../../store';

    export default {
        computed: {
            property: {
                get: function() {
                    return this.$store.getters['properties/item'](this.$route.params.id);
                },
                set: function(value) {
                    return this.$store.dispatch('properties/update', value);
                }
            }
        },

        data() {
            return {
                active_step: 1,
                room: {
                    name: '',
                    description: '',
                    question: ''
                },
                rooms: [
                    {
                        name: '1',
                        description: 'text 1',
                        question: ''
                    },
                    {
                        name: '2',
                        description: 'text 2',
                        question: ''
                    },
                ],
                service: {
                    name: '',
                    description: '',
                },
                services: [
                    {
                        name: '1',
                        price: 'text 1',
                    },
                    {
                        name: '2',
                        price: 'text 2',
                    },
                ],
                rule: {
                    name: '',
                    description: '',
                },
                rule_categories: [
                    {
                        name: 'General rules',
                        rules: [
                            {
                                name: '1',
                                description: 'text 1',
                            },
                            {
                                name: '2',
                                description: 'text 2',
                            },
                        ],
                    },
                    {
                        name: 'Rules of stay in the house',
                        rules: [
                            {
                                name: '1',
                                description: 'text 1',
                            },
                            {
                                name: '2',
                                description: 'text 2',
                            },
                        ],
                    },
                ],
                manual: {
                    name: '',
                    description: '',
                },
                manual_categories: [
                    {
                        name: 'General rules',
                        manuals: [
                            {
                                name: '1',
                                description: 'text 1',
                            },
                            {
                                name: '2',
                                description: 'text 2',
                            },
                        ],
                    },
                    {
                        name: 'Rules of stay in the house',
                        manuals: [
                            {
                                name: '1',
                                description: 'text 1',
                            },
                            {
                                name: '2',
                                description: 'text 2',
                            },
                        ],
                    },
                ],
            }
        },

        async beforeRouteEnter(to, from, next) {
            store.dispatch('properties/show', to.params.id);
            next();
        },

        async beforeRouteUpdate(to, from, next) {
            if (to.params.id !== from.params.id) {
                store.dispatch('properties/show', to.params.id);
            }
            next();
        }
    }
</script>

<style scoped>

</style>
