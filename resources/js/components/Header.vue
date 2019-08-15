<template>
    <div class="header__wrapper">
        <div class="header">
            <div class="wrapper">
                <div class="container">
                    <router-link to="/" class="logo">
                        <span class="logo__pic">
                            <img src="/images/logo.svg" alt="pic">
                            <img src="/images/logo_white.svg" alt="pic">
                        </span>
                        <span class="logo__text">
                            Alfredge
                        </span>
                    </router-link>

                    <nav class="nav">
                        <ul class="nav__list">
                            <li class="nav__link"><router-link to="/invite-a-guest">Invite a guest</router-link></li>
                            <li class="nav__link"><router-link to="/calendar">Calendar</router-link></li>
                            <li class="nav__link"><router-link to="/add-property">Add a property</router-link></li>
                            <li class="nav__link"><router-link to="/service-request">Service requests</router-link></li>
                            <li class="nav__link"><router-link to="/checkin-history">Checkin history</router-link></li>
                            <li class="nav__link"><router-link to="/">Help</router-link></li>
                        </ul>
                    </nav>

                    <div class="header__ctrl">
                        <div class="notes">
                            <img src="/images/icons/icon-notes.svg" alt="pic" class="notes__icon" @click="openNotes">
                        </div>

                        <router-link class="user" to="/account-settings">
                            <img src="/images/icons/icon-user.svg" alt="pic" class="notes__icon">
                        </router-link>

                        <button class="team-btn" @click="openTeamPopup()">
                            team
                        </button>
                    </div>

                    <button class="menu-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
            <Notification v-if="isNotice" @closeNotes="closeNotes"></Notification>
        </div>


        <vue-modaltor :visible="popup.team" :resize-width='{768:"290px"}' :default-width="'320px'" @hide="hideModal">
            <div class="modal-select-team">
                <p class="title_internal">
                    Team list
                </p>

                <ul class="list">
                    <li>
                        Team 1
                    </li>
                    <li>
                        Team 2
                    </li>
                    <li>
                        Team 3
                    </li>
                </ul>

                <button class="btn" @click="addTeam()">
                    Add new team
                </button>
            </div>
        </vue-modaltor>

        <vue-modaltor :visible="popup.add_team" :resize-width='{768:"290px"}' :default-width="'720px'" @hide="hideModal">
            <div class="modal-add-team">
                <p class="title_internal">
                    New team
                </p>

                <input
                        type="text"
                        class="input"
                        placeholder="Team name"
                >

                <div class="plans">
                    <div class="plans__item">
                        <div class="plans__item-container" @click="selected_plan = 1" :class="{active: selected_plan == 1}">
                            <p class="plans__item-name">
                                Basic
                            </p>
                            <p class="plans__item-price">
                                $49.99
                                <span>Montly</span>
                            </p>
                            <ul class="plans__item-list">
                                <li>
                                    Team members
                                    <span>$14.99 Each</span>
                                </li>
                                <li>
                                    Property add-on
                                    <span>$19.99 Each</span>
                                </li>
                                <li>
                                    Checkin reports
                                    <span>$9.99 Month</span>
                                </li>
                                <li>
                                    Guest Invites
                                    <span>10 Invites</span>
                                </li>
                                <li>
                                    Questionnaire Limitations
                                </li>
                                <li>
                                    No 24/7 Support
                                </li>
                                <li>
                                    House Rules No Access
                                </li>
                                <li>
                                    House Manual No Access
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="plans__item">
                        <div class="plans__item-container" @click="selected_plan = 2" :class="{active: selected_plan == 2}">
                            <p class="plans__item-name">
                                Standard (Popular)
                            </p>
                            <p class="plans__item-price">
                                $99.99
                                <span>Montly</span>
                            </p>
                            <ul class="plans__item-list">
                                <li>
                                    Team members
                                    <span>$19.99 Each</span>
                                </li>
                                <li>
                                    Property add-on
                                    <span>$2.99 Each</span>
                                </li>
                                <li>
                                    Checkin reports
                                    <span>Unlimited</span>
                                </li>
                                <li>
                                    Guest Invites
                                    <span>Unlimited</span>
                                </li>
                                <li>
                                    Questionnaire Limitations
                                </li>
                                <li>
                                    No 24/7 Support
                                </li>
                                <li>
                                    House Rules
                                </li>
                                <li>
                                    House Manual
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="plans__item">
                        <div class="plans__item-container" @click="selected_plan = 3" :class="{active: selected_plan == 3}">
                            <p class="plans__item-name">
                                Business
                            </p>
                            <p class="plans__item-price">
                                $199.99
                                <span>Montly</span>
                            </p>
                            <ul class="plans__item-list">
                                <li>
                                    Team members
                                    <span>Unlimited</span>
                                </li>
                                <li>
                                    Property add-on
                                    <span>Unlimited</span>
                                </li>
                                <li>
                                    Checkin reports
                                    <span>Unlimited</span>
                                </li>
                                <li>
                                    Guest Invites
                                    <span>Unlimited</span>
                                </li>
                                <li>
                                    Questionnaire Limitations
                                </li>
                                <li>
                                    No 24/7 Support
                                </li>
                                <li>
                                    House Rules
                                </li>
                                <li>
                                    House Manual
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <button class="btn">
                    Add
                </button>
            </div>
        </vue-modaltor>
    </div>
</template>

<script>
    import Notification from '../components/Notification.vue'

    export default {
        components: {
            Notification
        },
        data(){
            return {
                selected_plan: 1,
                isNotice: false,
                popup: {
                    team: false,
                    add_team: false,
                },
            }
        },
        methods: {
            openNotes: function () {
                this.isNotice = true
            },
            closeNotes: function () {
                this.isNotice = false
            },
            hideModal() {
                _.each(this.popup, function (item, i, obj) {
                    obj[i] = false
                })
            },
            openTeamPopup() {
                this.hideModal();
                this.popup.team = true;
            },
            addTeam() {
                this.hideModal();
                this.popup.add_team = true
            },
        }
    }
</script>

<style scoped>

</style>
