<template>
    <div class="page-inputs">
        <div class="wrapper">
            <div class="container">

                <h2 class="title">
                    Your password has been successful change
                </h2>
                <p class="subtitle">
                    You can now log in with your new password
                </p>
                <br>
                <button class="btn">
                    <router-link to="/login"></router-link>
                    Log in
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "forgot-password-step-4"
    }
</script>

<style scoped>

</style>