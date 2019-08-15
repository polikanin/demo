<template>
    <div class="page-inputs">
        <div class="wrapper">
            <ul class="navigation">
                <li :class="{ active: $route.name === 'add-property' }">
                    <router-link :to="{ name: 'add-property' }">House information</router-link>
                </li>
                <li :class="{ active: $route.name === 'add-property.rooms' }">
                    <router-link :to="{ name: 'add-property.rooms' }">Rooms</router-link>
                </li>
                <li :class="{ active: $route.name === 'add-property.questionary' }">
                    <router-link :to="{ name: 'add-property.questionary' }">Questionary</router-link>
                </li>
                <li :class="{ active: $route.name === 'add-property.services' }">
                    <router-link :to="{ name: 'add-property.services' }">Services</router-link>
                </li>
                <li :class="{ active: $route.name === 'add-property.photo' }">
                    <router-link :to="{ name: 'add-property.photo' }">Photo</router-link>
                </li>
            </ul>

            <div class="container">
                <router-view v-model="property" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            property: {
                get: function() {
                    return this.$store.state.addProperty.data;
                },
                set: function(value) {
                    return this.$store.dispatch('addProperty/set', value);
                }
            }
        },
    }
</script>
