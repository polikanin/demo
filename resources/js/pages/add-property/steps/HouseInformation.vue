<template>
    <div class="page-inputs">
        <div class="wrapper">
            <div class="container">
                <h2 class="title">
                    Step 1
                </h2>
                <p class="subtitle">
                    House information
                </p>

                <div class="form">
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

                    <input
                        type="text"
                        class="input"
                        placeholder="Wifi name"
                        autocomplete="off"
                        v-model="valueLocal.wifi_name"
                    />
                    <input
                        type="text"
                        class="input"
                        placeholder="Wifi password"
                        autocomplete="off"
                        v-model="valueLocal.wifi_password"
                    />

                    <router-link class="btn" :to="{ name: 'add-property.rooms' }">Continue</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep'
    import isEqual from 'lodash/isEqual'

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
                valueLocal: cloneDeep(this.value)
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
                handler: function () {
                    this.$emit('input', this.valueLocal);
                },
                deep: true
            }
        }
    }
</script>
