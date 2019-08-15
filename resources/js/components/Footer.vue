<template>
    <div class="footer">
        <div class="wrapper">
            <div class="container">
                <a href="" class="logo">
                <span class="logo__pic">
                    <img src="/images/logo.svg" alt="pic">
                    <img src="/images/logo_white.svg" alt="pic">
                </span>
                    <span class="logo__text">
                    © 2019 Alfredge. All rights reserved.
                </span>
                </a>

                <nav class="nav">
                    <ul class="nav__list">
                        <li class="nav__link"><router-link to="">Contact us</router-link></li>
                        <li class="nav__link"><router-link to="">Mobile app</router-link></li>
                        <li class="nav__link"><router-link to="">Terms and conditions</router-link></li>
                        <li class="nav__link"><router-link to="">Privacy policy</router-link></li>
                        <li class="nav__link"><router-link to="">Help</router-link></li>
                        <li class="nav__link"><router-link to="">About us</router-link></li>
                    </ul>
                </nav>

                <div class="footer__left">
                    <div class="partners">
                        <img src="/images/partners/partner-1.svg" alt="pic">
                        <img src="/images/partners/partner-2.svg" alt="pic">
                    </div>

                    <div class="social">
                        <a href="" class="social__link">
                            <img src="/images/icons/instagram.svg" alt="pic">
                        </a>
                        <a href="" class="social__link">
                            <img src="/images/icons/facebook.svg" alt="pic">
                        </a>
                        <a href="" class="social__link">
                            <img src="/images/icons/twitter.svg" alt="pic">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AfFooter"
    }
</script>

<style scoped>

</style>
