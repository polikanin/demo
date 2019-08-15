<template>
    <div class="page-questionary">
        <div class="wrapper">
            <div class="page-head">
                <div class="back-to-page">
                    <router-link to="/">
                        <img src="/images/icons/icon-back.svg" alt="pic">
                        Reports History
                    </router-link>
                </div>

                <img src="/images/icons/icon-download.svg" alt="pic">
            </div>

            <div class="tabs-wrapper">
                <div class="tabs">
                    <button class="tabs__btn" :class="{active: activeTab == 0}" @click="setTab(0)">
                        Checkin
                    </button>
                    <button class="tabs__btn" :class="{active: activeTab == 1}" @click="setTab(1)">
                        Checkout
                    </button>
                </div>
            </div>

            <div class="container" v-if="room_list && activeTab == 0">
                <div class="col">
                    <div class="block">
                        <ul class="user__contacts">
                            <li>
                                <p class="title-mini">
                                    Gary Hall
                                </p>
                                <p class="text">
                                    Joined in March 2019
                                </p>
                            </li>
                            <li>
                                <p class="title-mini">

                                </p>
                                <p class="text">
                                    8 (800) 555-35-35
                                </p>
                            </li>
                            <li>
                                <p class="title-mini">
                                    Checkin
                                </p>
                                <p class="text">
                                    11.03.2019  11:30 PM
                                </p>
                            </li>
                            <li>
                                <p class="title-mini">
                                    Checkout
                                </p>
                                <p class="text">
                                    11.03.2019  11:30 PM
                                </p>
                            </li>
                        </ul>

                        <p class="title-mini">
                            Information
                        </p>
                        <p class="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </div>

                    <div class="block accordeon">
                        <div class="block-inner">
                            <div v-for="(n, index) in 4" class="accordeon-tab">
                                <h3 class="title_internal"
                                    @click="accordeon_tab !== index?accordeon_tab = index:accordeon_tab = false"
                                    :class="{active: accordeon_tab === index}"
                                >
                                    Lorem Ipsum dolor

                                    <img src="/images/icons/icon-tab.svg" alt="pic">
                                </h3>
                                <accordeon>
                                    <div class="accordeon-inner" v-show="accordeon_tab === index">
                                        <p class="text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                            anim id est laborum
                                        </p>
                                        <div class="quote">
                                            <p class="text">
                                                John Doe
                                            </p>
                                            <p class="text">
                                                <a href="">8 (800) 555-3535</a>
                                            </p>
                                        </div>
                                    </div>
                                </accordeon>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <ul class="list">
                        <li class="list__item" v-for="(item, index) in room_list" @click="activeRoom = index" :class="{active: activeRoom == index}">
                            <p class="title-mini">
                                {{item.title}}
                            </p>
                            <p class="text">
                                {{item.text}}
                            </p>
                            <div class="list__item-status" :class="{dislike: !item.like}"></div>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <div class="block">
                        <h3 class="title_internal">
                            Attached files
                        </h3>
                        <div>
                            <vue-picture-swipe :items="room_list[activeRoom].images" class="attach"></vue-picture-swipe>
                        </div>
                    </div>
                    <div class="block">
                        <h3 class="title_internal">
                            Identity
                        </h3>

                        <vue-picture-swipe :items="room_list[activeRoom].img" class="pic"></vue-picture-swipe>
                    </div>
                </div>

                <div class="col big">
                    <div class="block">
                        <div class="block-inner">
                            <div v-for="(n, index) in 4" class="accordeon-tab">
                                <h3 class="title_internal"
                                    @click="accordeon_tab_2 !== index?accordeon_tab_2 = index:accordeon_tab_2 = false"
                                    :class="{active: accordeon_tab_2 === index}"
                                >
                                    Gary Hall

                                    <img src="/images/icons/icon-tab.svg" alt="pic">
                                </h3>
                                <accordeon>
                                    <div class="accordeon-inner" v-show="accordeon_tab_2 === index">
                                        <ul class="user__contacts">
                                            <li>
                                                <p class="text">
                                                    Joined in March 2019
                                                </p>
                                            </li>
                                            <li>
                                                <p class="title-mini">

                                                </p>
                                                <p class="text">
                                                    8 (800) 555-35-35
                                                </p>
                                            </li>
                                            <li>
                                                <p class="title-mini">
                                                    Checkin
                                                </p>
                                                <p class="text">
                                                    11.03.2019  11:30 PM
                                                </p>
                                            </li>
                                            <li>
                                                <p class="title-mini">
                                                    Checkout
                                                </p>
                                                <p class="text">
                                                    11.03.2019  11:30 PM
                                                </p>
                                            </li>
                                        </ul>

                                        <p class="title-mini">
                                            Information
                                        </p>
                                        <p class="text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat
                                        </p>

                                        <vue-picture-swipe :items="room_list[activeRoom].img" class="pic"></vue-picture-swipe>
                                    </div>
                                </accordeon>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div class="container" v-if="room_list && activeTab == 1">
                <div class="col">
                    <div class="block">
                        <ul class="user__contacts">
                            <li>
                                <p class="title-mini">
                                    Gary Hall
                                </p>
                                <p class="text">
                                    Joined in March 2019
                                </p>
                            </li>
                            <li>
                                <p class="title-mini">

                                </p>
                                <p class="text">
                                    8 (800) 555-35-35
                                </p>
                            </li>
                            <li>
                                <p class="title-mini">
                                    Checkin
                                </p>
                                <p class="text">
                                    11.03.2019  11:30 PM
                                </p>
                            </li>
                            <li>
                                <p class="title-mini">
                                    Checkout
                                </p>
                                <p class="text">
                                    11.03.2019  11:30 PM
                                </p>
                            </li>
                        </ul>

                        <p class="title-mini">
                            Information
                        </p>
                        <p class="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </div>
                    <div class="block">
                        <h3 class="title_internal">
                            Lorem Ipsum dolor
                        </h3>
                        <p class="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum
                        </p>
                        <div class="quote">
                            <p class="text">
                                John Doe
                            </p>
                            <p class="text">
                                <a href="">8 (800) 555-3535</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <ul class="list">
                        <li class="list__item" v-for="(item, index) in room_list" @click="activeRoom = index" :class="{active: activeRoom == index}">
                            <p class="title-mini">
                                {{item.title}}
                            </p>
                            <p class="text">
                                {{item.text}}
                            </p>
                            <div class="list__item-status" :class="{dislike: !item.like}"></div>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <div class="block">
                        <h3 class="title_internal">
                            Attached files
                        </h3>
                        <div>
                            <vue-picture-swipe :items="room_list[activeRoom].images" class="attach"></vue-picture-swipe>
                        </div>
                    </div>
                    <div class="block">
                        <h3 class="title_internal">
                            Identity
                        </h3>

                        <vue-picture-swipe :items="room_list[activeRoom].img" class="pic"></vue-picture-swipe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import accordeon from '../components/Accordeon'

    export default {
        name: "Questionary",
        components: {
            'accordeon': accordeon
        },
        data(){
            return {
                accordeon_tab: false,
                accordeon_tab_2: false,
                activeTab: 0,
                activeRoom: 0,
                room_list: [
                    {
                        title: "Bedroom",
                        text: "Are there any damages in Bedroom one?",
                        like: false,
                        img: [
                            {
                                src: "../images/static/pic.png",
                                thumbnail: "../images/static/pic.png",
                                w: 600,
                                h: 400
                            }
                        ],
                        images: [
                            {
                                src: "../images/static/1.png",
                                thumbnail: "../images/static/1.png",
                                w: 600,
                                h: 400
                            },
                            {
                                src: "../images/static/1.png",
                                thumbnail: "../images/static/1.png",
                                w: 600,
                                h: 400
                            }
                        ]
                    },
                    {
                        title: "Game room",
                        text: "Are there any damages in Bedroom one?",
                        like: false,
                        img: [
                            {
                                src: "../images/static/pic.png",
                                thumbnail: "../images/static/pic.png",
                                w: 600,
                                h: 400
                            }
                        ],
                        images: [
                            {
                                src: "../images/static/2.png",
                                thumbnail: "../images/static/2.png",
                                w: 600,
                                h: 400
                            },
                            {
                                src: "../images/static/2.png",
                                thumbnail: "../images/static/2.png",
                                w: 600,
                                h: 400
                            }
                        ]
                    },
                    {
                        title: "Living room",
                        text: "Are there any damages in Bedroom one?",
                        like: false,
                        img: [
                            {
                                src: "../images/static/pic.png",
                                thumbnail: "../images/static/pic.png",
                                w: 600,
                                h: 400
                            }
                        ],
                        images: [
                            {
                                src: "../images/static/3.png",
                                thumbnail: "../images/static/3.png",
                                w: 600,
                                h: 400
                            },
                            {
                                src: "../images/static/3.png",
                                thumbnail: "../images/static/3.png",
                                w: 600,
                                h: 400
                            }
                        ]
                    },
                    {
                        title: "Bedroom",
                        text: "Are there any damages in Bedroom one?",
                        like: false,
                        img: [
                            {
                                src: "../images/static/pic.png",
                                thumbnail: "../images/static/pic.png",
                                w: 600,
                                h: 400
                            }
                        ],
                        images: [
                            {
                                src: "../images/static/1.png",
                                thumbnail: "../images/static/1.png",
                                w: 600,
                                h: 400
                            },
                            {
                                src: "../images/static/1.png",
                                thumbnail: "../images/static/1.png",
                                w: 600,
                                h: 400
                            }
                        ]
                    }
                ]
            }
        },
        mounted() {
            var self = this;
            this.$parent.axios.get('./question-data.json')
                .then(function (response) {
                    //self.room_list = response.data;
                })
                .catch(function (error) {
                    //alert(error);
                });
        },
        methods: {
            setTab: function (n) {
                this.activeTab = n;
                this.activeRoom = 0;
            }
        }
    }
</script>

<style scoped>

</style>
