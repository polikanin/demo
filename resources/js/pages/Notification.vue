<template>
    <div class="page-home">
        <div class="wrapper">
            <h2 class="title">
                Notification
            </h2>


            <div class="container">
                <p>
                    <button class="btn btn-primary" @click="show('top-left')">top-left</button>
                </p>
                <p>
                    <button class="btn btn-primary" @click="show('top-right')">top-right</button>
                </p>
                <p>
                    <button class="btn btn-primary" @click="show('top-center')">top-center</button>
                </p>
                <p>
                    <button class="btn btn-primary" @click="show('bottom-left')">bottom-left</button>
                </p>
                <p>
                    <button class="btn btn-primary" @click="show('bottom-right')">bottom-right</button>
                </p>
                <p>
                    <button class="btn btn-primary" @click="show('bottom-center')">bottom-center</button>
                </p>
                <p>
                    <button class="btn btn-primary" @click="alert()">alert</button>
                </p>

                <p>
                    <button class="btn btn-primary" @click="confirm()">confirm</button>
                </p>

                <p>
                    <button class="btn btn-info" @click="info()">info</button>
                </p>

                <p>
                    <button class="btn btn-warning" @click="warning()">warning</button>
                </p>
                <p>
                    <button class="btn btn-danger" @click="error()">error</button>
                </p>

                <p>
                    <button class="btn btn-primary" @click="timeout()">timeout</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Notification",
        data(){
            return {

            }
        },
        methods: {

            show(p) {
                this.$Msg.success('This is a notification', { position: p });
            },
            error() {
                this.$Msg.error('This is a notification');
            },
            info() {
                this.$Msg.info('This is a notification');
            },
            warning() {
                this.$Msg.warning('This is a notification');
            },
            alert() {
                this.$Msg.alert('This is a notification');
            },
            timeout() {
                this.$Msg.info('This is a notification', { timeout: 3000 });
            },
            confirm() {
                this.$Msg.confirm('Are you sure want to delete this item?').then(({ data }) => {
                    //alert('You choose: ' + data);
                    this.$Msg.alert('You choose: ' + data);
                })
            }
        },
        mounted() {

        },
    }
</script>

<style scoped>
    .container p{
        margin: 10px 0;
    }
</style>