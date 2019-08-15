<template>
    <div class="page-inputs">
        <div class="wrapper">
            <div class="container">
                <h2 class="title">
                    Step 4
                </h2>
                <p class="subtitle">
                    Add services that will be available on this property
                </p>

                <div class="form">
                    <div v-if="edit_item_index === null">
                        <input
                            type="text"
                            class="input"
                            placeholder="Service name"
                            v-model="item.name"
                        />
                        <input
                            type="text"
                            class="input"
                            placeholder="Price"
                            v-model="item.price"
                        />
                    </div>
                    <div v-else>
                        <input
                            type="text"
                            class="input"
                            placeholder="Service name"
                            v-model="valueLocal.services[edit_item_index].name"
                        />
                        <input
                            type="text"
                            class="input"
                            placeholder="Price"
                            v-model="valueLocal.services[edit_item_index].price"
                        />
                    </div>

                    <div class="rooms" v-if="valueLocal.services && valueLocal.services.length > 0">
                        <div class="rooms__item" v-for="(item, index) in valueLocal.services">
                            <p class="rooms__item-text">
                                {{ item.name }}
                            </p>
                            <button class="rooms__item-btn" @click="editItem(index)">
                                <img src="/images/icons/icon-edit_black.svg" alt="pic">
                            </button>
                            <button class="rooms__item-btn" @click="deleteItem(index)">
                                <img src="/images/icons/icon-cross_black.svg" alt="pic">
                            </button>
                        </div>
                    </div>

                    <div class="form-ctrl">
                        <button class="btn gray" v-if="edit_item_index === null" @click="addItem">
                            Add the service
                        </button>
                        <button class="btn gray" v-else @click="saveItem">
                            Save
                        </button>
                        <router-link class="btn" :to="{ name: 'add-property.photo' }">Continue</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep'

    const itemInitial = {
        name: '',
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
                edit_item_index: null,
                item: { ...itemInitial },
            }
        },

        watch: {
            value: function () {
                this.valueLocal = cloneDeep(this.value);
            }
        },

        methods: {
            addItem: function () {
                this.valueLocal.services.push(this.item);
                this.item = { ...itemInitial };

                this.$emit('input', this.valueLocal);
            },
            deleteItem: function (index) {
                this.valueLocal.services.splice(index, 1);

                this.$emit('input', this.valueLocal);
            },
            editItem: function (index) {
                this.edit_item_index = index;
            },
            saveItem: function () {
                this.edit_item_index = null;

                this.$emit('input', this.valueLocal);
            },
        }
    }
</script>
