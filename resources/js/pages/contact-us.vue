<template>
    <div class="page-contact-us">
        <div class="wrapper">
            <h2 class="title">
                Contact Us 2
            </h2>
            <p class="subtitle">
                Contact us if you have some questions
            </p>
            <div class="container">
                <form action="" class="form">
                    <input
                            type="text"
                            class="input"
                            placeholder="Email addresses"
                    >
                    <input
                            type="text"
                            class="input"
                            placeholder="Name"
                    >
                    <textarea
                            name=""
                            class="input_text"
                            placeholder="Message"
                    >

                    </textarea>

                    <button class="btn">
                        Submit
                    </button>
                </form>
                <div class="contacts">
                    <img src="/images/contact-us/pic.png" alt="pic" class="contacts__pic">

                    <div class="contacts__group">
                        <p class="title-mini_internal">
                            Address
                        </p>
                        <p class="text">
                            13 Pine CI Pinelands
                        </p>
                        <p class="text">
                            Cape Town 7405
                        </p>
                    </div>

                    <div class="contacts__group">
                        <p class="title-mini_internal">
                            Phone
                        </p>
                        <p class="text">
                            8 (800) 555-35-35
                        </p>
                    </div>

                    <div class="contacts__group">
                        <p class="title-mini_internal">
                            Email
                        </p>
                        <p class="text">
                            hello@mentalstack.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "contact-us",
        data(){
            return {

            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
