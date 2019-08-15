<template>
    <transition name="modal">
        <div class="modal" v-show="popup.isOpen">
            <div class="layout" v-on:click.prevent="popupClose">

            </div>

            <transition name="fade">
                <div class="popup__callback" v-show="popup.id == 1">
                    <div class="close" v-on:click.prevent="popupClose"></div>


                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Popups",

        components: {

        },
        data(){
            return {
                popup: {
                    isOpen: false,
                    id: '',
                },
            }
        },
        mounted() {
            var self = this;

        },
        methods: {
            popupOpen: function (n) {
                this.popup.id = n;
                this.popup.isOpen = true;
                document.body.classList.add("overflow")
            },
            popupClose: function () {
                this.popup.id = false;
                this.popup.isOpen = false;
                document.body.classList.remove("overflow")
            },
        }
    }
</script>

<style scoped>

</style>