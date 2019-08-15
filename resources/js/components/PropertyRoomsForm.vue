<template>
    <div class="form">
        <div v-if="editItemIndex === null">
            <input
                type="text"
                class="input"
                placeholder="Room name"
                v-model="item.name"
            >
            <textarea
                class="input_text"
                name=""
                placeholder="Description (optional) "
                v-model="item.description"
            ></textarea>
        </div>
        <div v-else>
            <input
                type="text"
                class="input"
                placeholder="Room name"
                v-model="valueLocal.rooms[editItemIndex].name"
            >
            <textarea
                class="input_text"
                name=""
                placeholder="Description (optional) "
                v-model="valueLocal.rooms[editItemIndex].description"
            ></textarea>
        </div>

        <div class="rooms" v-if="valueLocal.rooms && valueLocal.rooms.length > 0">
            <div class="rooms__item" v-for="(item, index) in valueLocal.rooms">
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

        <button class="btn gray" v-if="editItemIndex === null" @click="addItem">
            Add the room
        </button>
        <button class="btn gray" v-else @click="saveItem">
            Save
        </button>
    </div>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep'

    const itemInitial = {
        name: '',
        description: ''
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
                editItemIndex: null,
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
                this.valueLocal.rooms.push(this.item);
                this.item = { ...itemInitial };

                this.$emit('input', this.valueLocal);
            },
            deleteItem: function (index) {
                this.valueLocal.rooms.splice(index, 1);

                this.$emit('input', this.valueLocal);
            },
            editItem: function (index) {
                this.editItemIndex = index;
            },
            saveItem: function () {
                this.editItemIndex = null;

                this.$emit('input', this.valueLocal);
            },
        }
    }
</script>
