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
                    Enter your new password
                </p>
                <form action="" class="form">
                    <input
                            type="password"
                            class="input"
                            placeholder="New password"
                    >
                    <input
                            type="password"
                            class="input"
                            placeholder="Repeat new password"
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
        name: "forgot-password-step-3"
    }
</script>

<style scoped>

</style>
