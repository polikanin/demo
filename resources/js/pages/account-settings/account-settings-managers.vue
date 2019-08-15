<template>
    <div class="container">
        <div class="managers">
            <div class="managers__item" v-for="(n, index) in 3">
                <div class="managers__item-left">
                    <p class="managers__item-number">
                        {{index + 1}}.
                    </p>
                    <p class="title-mini_internal">
                        John Doe
                    </p>
                    <p class="text">
                        johndoe@gmail.com
                    </p>
                </div>
                <div class="managers__item-right">
                    <button class="btn gray" @click="popup.change_plan=true">
                        Property manager
                    </button>
                    <button class="btn">
                        Delete
                    </button>
                </div>
            </div>
            <div class="managers__item" v-for="(n, index) in 3">
                <div class="managers__item-left">
                    <p class="managers__item-number">
                        {{index + 4}}.
                    </p>
                    <p class="title-mini_internal">
                        John Doe
                    </p>
                    <p class="text">
                        johndoe@gmail.com
                    </p>
                </div>
                <div class="managers__item-right">
                    <button class="btn gray" @click="popup.change_plan=true">
                        Property technical
                    </button>
                    <button class="btn">
                        Delete
                    </button>
                </div>
            </div>
        </div>

        <ul class="pagination">
            <li class="pagination__arr pagination__arr_prev">
                <a href=""></a>
            </li>
            <li class="pagination__item" v-for="n in 6">
                <a href="">{{n}}</a>
            </li>
            <li class="pagination__arr pagination__arr_next">
                <a href=""></a>
            </li>
        </ul>

        <div class="btn-container">
            <button class="btn" @click="popup.invite_manager=true">
                Invite a manager
            </button>

            <button class="btn" @click="popup.invite_technical=true">
                Invite a technical
            </button>
        </div>

        <vue-modaltor :visible="popup.change_plan" :resize-width='{768:"290px"}' :default-width="'510px'" @hide="hideModal">
            <div class="modal-property-manager">
                <p class="title_internal">
                    John Doe
                </p>
                <p class="text">
                    johndoe@gmail.com
                </p>

                <div class="list">
                    <div class="list-item" v-for="n in 5">
                        <div class="list-item__head">
                            <img src="/images/static/prop-1.png" alt="pic" class="list-item__pic">
                            <div class="">
                                <p class="title-mini_internal">
                                    Regnum Apartment
                                </p>
                                <p class="subtitle">
                                    <img src="/images/icons/icon-pin.svg" alt="pic">
                                    Los Angeles, California
                                </p>
                            </div>
                        </div>

                        <button class="btn gray">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </vue-modaltor>

        <vue-modaltor :visible="popup.invite_manager" :resize-width='{768:"290px"}' :default-width="'460px'" @hide="hideModal">
            <div class="modal-invite-manager">
                <p class="title_internal">
                    Invite a manager
                </p>
                <p class="text">
                    Only moderator can invite a manager
                </p>

                <input
                        type="text"
                        class="input"
                        placeholder="Name"
                >

                <input
                        type="text"
                        class="input"
                        placeholder="Enter email person which you want to invite"
                >

                <p class="title-mini_internal">
                    To invite a manager $10 will be deducted from your account at the
                    end of the month.
                </p>
                <button class="btn" @click="hideModal">
                    Invite
                </button>
            </div>
        </vue-modaltor>

        <vue-modaltor :visible="popup.invite_technical" :resize-width='{768:"290px"}' :default-width="'460px'" @hide="hideModal">
            <div class="modal-invite-manager">
                <p class="title_internal">
                    Invite a technical
                </p>
                <p class="text">
                    Only moderator can invite a technical
                </p>

                <input
                        type="text"
                        class="input"
                        placeholder="Name"
                >

                <input
                        type="text"
                        class="input"
                        placeholder="Enter email person which you want to invite"
                >

                <p class="title-mini_internal">
                    To invite a technical $10 will be deducted from your account at the
                    end of the month.
                </p>
                <button class="btn" @click="hideModal">
                    Invite
                </button>
            </div>
        </vue-modaltor>
    </div>
</template>

<script>
    export default {
        name: "account-settings-managers",
        data(){
            return {
                popup: {
                    change_plan: false,
                    invite_manager: false,
                    invite_technical: false,
                },
            }
        },
        methods: {
            hideModal() {
                _.each(this.popup, function (item, i, obj) {
                    obj[i] = false
                })
            },
            paymentAccept() {
                this.$router.push('history-reports')
            },
        }
    }
</script>

<style scoped>

</style>
