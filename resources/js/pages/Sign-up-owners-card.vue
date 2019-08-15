<template>
    <div class="page-inputs">
        <div class="wrapper">
            <div class="container">
                <div class="back-to-page">
                    <router-link to="/">
                        <img src="/images/icons/icon-back.svg" alt="pic">
                        Private information
                    </router-link>
                </div>

                <h2 class="title">
                    Sign up
                </h2>
                <p class="subtitle">
                    Enter your card information
                </p>

                <form action="" class="form">
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

                    <label class="checkbox">
                        <input type="checkbox">
                        <span></span>
                        I accept the <a href="">Terms of service</a>
                    </label>

                    <button class="btn">
                        Finish
                    </button>
                </form>
                <p class="bottom-text">
                    I already have an account
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sign-up-owners-card"
    }
</script>

<style scoped>

</style>
