<template>
    <div class="page-inputs">
        <div class="wrapper">
            <div class="container">
                <div class="back-to-page">
                    <router-link to="/">
                        <img src="/images/icons/icon-back.svg" alt="pic">
                        Log in
                    </router-link>
                </div>

                <h2 class="title">
                    Forgot password
                </h2>
                <p class="subtitle">
                    Enter your email or phone to get the access code
                </p>
                <form action="" class="form">
                    <input
                            type="text"
                            class="input"
                            placeholder="Email / phone"
                    >

                    <button class="btn">
                        Continue
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "forgot-password-step-1"
    }
</script>

<style scoped>

</style>
