<template>
    <div class="container">
        <form action="" class="form">
            <input
                    type="text"
                    class="input"
                    placeholder="Name"
            >

            <input
                    type="text"
                    class="input"
                    placeholder="Email"
            >

            <input
                    type="text"
                    class="input"
                    placeholder="Team name"
            >

            <div class="form-container">
                <p class="title-mini_internal">
                    Change password
                </p>

                <input
                        type="password"
                        class="input"
                        placeholder="Old password"
                >

                <input
                        type="password"
                        class="input"
                        placeholder="New password"
                >

                <input
                        type="password"
                        class="input"
                        placeholder="Confirm new password"
                >
            </div>

            <button class="btn">
                Change
            </button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "account-settings-general"
    }
</script>

<style scoped>

</style>