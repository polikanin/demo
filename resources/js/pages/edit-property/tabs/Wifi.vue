<template>
    <div class="page-inputs__inner">
        <div class="wrapper">
            <div class="container">
                <div class="form">
                    <input
                            type="text"
                            class="input"
                            placeholder="Wifi name"
                            autocomplete="off"
                            v-model="valueLocal.wifi_name"
                    >
                    <input
                            class="input"
                            name=""
                            placeholder="Password"
                            autocomplete="off"
                            v-model="valueLocal.wifi_password"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep';
    import isEqual from 'lodash/isEqual';
    import debounce from 'lodash/debounce';

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
                handler: debounce(function () {
                    this.$emit('input', this.valueLocal);
                }, 500),
                deep: true
            }
        },
    }
</script>
