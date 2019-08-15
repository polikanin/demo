<template>
    <div class="page-inputs">
        <div class="wrapper">
            <div class="container">
                <h2 class="title">
                    Step 5
                </h2>
                <p class="subtitle">
                    House photo
                </p>

                <div class="form">
                    <label class="input_image">
                        <input type="file" ref="file" v-on:change="onChangeFileUpload()" >
                        Select a file on your computer or drag it to
                        <img src="/images/icons/icon-upload.svg" alt="pic">
                    </label>

                    <button class="btn" @click.prevent="saveProperty">
                        Finish
                    </button>
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
        },

        methods: {
            onChangeFileUpload() {
                this.valueLocal.image = this.$refs.file.files[0];
            },
            async saveProperty() {
                const response = await this.$store.dispatch('addProperty/save');

                if (response) {
                    this.$router.push('/');
                }
            }
        }
    }
</script>
