<template>
    <div class="page-inputs__inner">
        <div class="wrapper">
            <div class="container">
                <div class="form">
                    <div class="attached-img">
                        <img :src="`/${image.access_url}`" :alt="image.title">
                        <button class="attached-img__delete"></button>
                    </div>

                    <input
                        type="text"
                        class="input"
                        placeholder="House name"
                        autocomplete="off"
                        v-model="valueLocal.name"
                    />
                    <textarea
                        class="input_text"
                        name=""
                        placeholder="Description (optional) "
                        v-model="valueLocal.description"
                    ></textarea>

                    <input
                        type="text"
                        class="input"
                        placeholder="Address"
                        autocomplete="off"
                        v-model="valueLocal.location_title"
                    />

                    <PropertyRoomsForm v-model="valueLocal" />
<!--                    <input-->
<!--                            type="text"-->
<!--                            class="input"-->
<!--                            placeholder="Select a property manager"-->
<!--                    >-->

<!--                    <dropdown :options="arrayOfObjects"-->
<!--                              :selected="object"-->
<!--                              v-on:updateOption="methodToRunOnSelect"-->
<!--                              :placeholder="'Select an Item'"-->
<!--                              class="v-select"-->
<!--                    >-->
<!--                    </dropdown>-->

<!--                    <button class="btn gray">-->
<!--                        Add the property manager-->
<!--                    </button>-->

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PropertyManagersForm from '../../../components/PropertyManagersForm';
    import PropertyRoomsForm from '../../../components/PropertyRoomsForm';

    import cloneDeep from 'lodash/cloneDeep';
    import isEqual from 'lodash/isEqual';
    import isEmpty from 'lodash/isEmpty';
    import debounce from 'lodash/debounce';

    const WIDTH = 800;
    const HEIGHT = 600;

    export default {
        components: {
            PropertyManagersForm,
            PropertyRoomsForm
        },

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

        computed: {
            image() {
                if (!this.valueLocal || !this.valueLocal.images) {
                    return {};
                }

                for (let image of this.valueLocal.images) {
                    if (image.width === WIDTH && image.height === HEIGHT) {
                        return image;
                    }
                }

                return {};
            },
        }
    }
</script>
