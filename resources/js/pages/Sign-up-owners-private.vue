<template>
    <div class="page-inputs">
        <div class="wrapper">
            <div class="container">
                <div class="back-to-page">
                    <router-link to="/">
                        <img src="/images/icons/icon-back.svg" alt="pic">
                        Plans
                    </router-link>
                </div>

                <h2 class="title">
                    Sign up
                </h2>
                <p class="subtitle">
                    Enter your private information for registration
                </p>

                <form action="" class="form">
                    <input
                            type="text"
                            class="input"
                            placeholder="First name"
                    >

                    <input
                            type="text"
                            class="input"
                            placeholder="Last name"
                    >

                    <input
                            type="text"
                            class="input"
                            placeholder="+_ (___) _______"
                    >

                    <input
                            type="text"
                            class="input"
                            placeholder="Email"
                    >

                    <input
                            type="password"
                            class="input"
                            placeholder="Password"
                    >

                    <input
                            type="password"
                            class="input"
                            placeholder="Confirm password"
                    >

                    <button class="btn">
                        Continue
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
        name: "Sign-up-owners-private"
    }
</script>

<style scoped>

</style>
