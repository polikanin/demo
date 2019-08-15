<template>
    <div class="page-home">
        <div class="wrapper">
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
                <PropertyListItem v-for="property in $store.state.properties.items" :value="property" :key="property.id" />
            </div>

            <pagination v-show="$store.state.properties.meta && $store.state.properties.items.length !== 0" :meta="$store.state.properties.meta" class="pagination" @page="applyFilter({ page: $event })" />
        </div>
    </div>
</template>

<script>
    import PropertyListItem from '../components/PropertyListItem';
    import Pagination from '../components/Pagination'

    import store from '../store'

    export default {
        components: {
            PropertyListItem,
            Pagination
        },

        methods: {
            applyFilter(query) {
                if (query.page <= 1) {
                    delete query.page;
                }

                this.$router.push({ query });
            }
        },

        async beforeRouteEnter(to, from, next) {
            store.dispatch('properties/index', to.query);
            next();
        },

        async beforeRouteUpdate(to, from, next) {
            if (to.query !== from.query) {
                store.dispatch('properties/index', to.query);
            }
            next();
        }
    }
</script>
