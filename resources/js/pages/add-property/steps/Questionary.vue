<template>
    <div class="page-inputs">
        <div class="wrapper">
            <div class="container">
                <h2 class="title">
                    Step 3
                </h2>
                <p class="subtitle">
                    CheckIn / Checkout questions
                </p>

                <div class="form">
                    <div v-if="edit_item_index === null">
                        <input
                            type="text"
                            class="input"
                            placeholder="Enter a question"
                            v-model="item.text"
                        >
                    </div>
                    <div v-else>
                        <input
                            type="text"
                            class="input"
                            placeholder="Enter a question"
                            v-model="valueLocal.questions[edit_item_index].text"
                        >
                    </div>

                    <div class="rooms" v-if="valueLocal.questions && valueLocal.questions.length > 0">
                        <div class="rooms__item" v-for="(item, index) in valueLocal.questions">
                            <p class="rooms__item-text">
                                {{ item.text }}
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
                            Add the question
                        </button>
                        <button class="btn gray" v-else @click="saveItem">
                            Save
                        </button>
                        <router-link class="btn" :to="{ name: 'add-property.services' }">Continue</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep'

    const itemInitial = {
        text: '',
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
                this.valueLocal.questions.push(this.item);
                this.item = { ...itemInitial };

                this.$emit('input', this.valueLocal);
            },
            deleteItem: function (index) {
                this.valueLocal.questions.splice(index, 1);

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
