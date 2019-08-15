<template>
    <div class="payment">
        <div class="payment-row">
            <p class="title-mini_internal">
                Your current account
            </p>
            <div class="payment__list">
                <div class="payment__list-item" v-for="n in 3">
                    <div class="payment__list-item__left">
                        <p class="title-mini_internal">
                            3 properties
                        </p>
                    </div>
                    <div class="payment__list-item__right">
                        <p class="title-mini_internal">
                            3 x $19.99
                        </p>
                    </div>
                </div>
            </div>
            <p class="payment__list-total">
                Total: <span>$219.76</span>
            </p>
        </div>

        <div class="payment-row">
            <div class="payment-container">
                <p class="title-mini_internal">
                    Your details
                </p>

                <input
                        type="text"
                        class="input"
                        placeholder="Card number"
                >

                <div class="form-group_2">
                    <input
                            type="text"
                            class="input"
                            placeholder="MM / YY"
                    >

                    <input
                            type="text"
                            class="input"
                            placeholder="CVC"
                    >
                </div>

                <input
                        type="text"
                        class="input"
                        placeholder="Cardholder’s name"
                >
            </div>
        </div>
        <div class="payment-row">
            <p class="title-mini_internal">
                Payment history
            </p>
            <div class="payment__list">
                <div class="payment__list-item" v-for="n in 3">
                    <div class="payment__list-item__left">
                        <p class="payment__list-item__date">
                            03.23.2019
                        </p>
                        <p class="title-mini_internal">
                            3 properties
                        </p>
                    </div>
                    <div class="payment__list-item__right">
                        <p class="title-mini_internal">
                            + $64
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "account-settings-payment"
    }
</script>

<style scoped lang="scss">

</style>