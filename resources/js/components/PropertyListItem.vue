<template>
    <div class="property__item">
        <div class="property__item-head">
            <img :src="`/${image.access_url}`" :alt="image.title" class="property__item-head__pic">
            <div class="">
                <p class="title_internal">
                    {{ value.name }}
                </p>
                <p class="subtitle">
                    <img src="/images/icons/icon-pin.svg" alt="pic">
                    {{ value.location_title }}
                </p>
                <p class="text">
                    <span class="title-mini_internal">Status:</span> {{ value.status }}
                </p>
            </div>
        </div>
        <div class="property__item-description">
            <div class="property__item-description__col">
                <p class="title-mini_internal">
                    Checkin
                </p>
                <p class="text">
                    {{ checkinDate }}
                </p>
                <p class="text">
                    {{ checkinTime }}
                </p>
            </div>
            <div class="property__item-description__col">
                <p class="title-mini_internal">
                    Checkout
                </p>
                <p class="text">
                    {{ checkoutDate }}
                </p>
                <p class="text">
                    {{ checkoutTime }}
                </p>
            </div>
            <div class="property__item-description__col">
                <p class="title-mini_internal">
                    Payment
                </p>
                <p class="text">
                    {{ payment }}
                </p>
            </div>
            <div class="property__item-description__col">
                <p class="title-mini_internal">
                    Contacts guest
                </p>
                <p class="text">
                    {{ guestContact }}
                </p>
            </div>
            <div class="property__item-description__col">
                <p class="title-mini_internal">
                    Name guest
                </p>
                <p class="text">
                    {{ guestName }}
                </p>
            </div>
        </div>
        <div class="property__item-ctrl">
            <button class="btn gray">
                <router-link to="/questionary"></router-link>
                Reservations
            </button>
            <router-link class="btn" :to="{ name: 'edit-property', params: { id: value.id }}">Edit</router-link>
        </div>
    </div>
</template>

<script>
    const WIDTH = 800;
    const HEIGHT = 600;

    export default {
        props: {
            value: {
                required: true,
                type: Object,
                default: () => ({})
            }
        },

        computed: {
            image() {
                if (!this.value || !this.value.images) {
                    return {};
                }

                for (let image of this.value.images) {
                    if (image.width === WIDTH && image.height === HEIGHT) {
                        return image;
                    }
                }

                return {};
            },
            lastReservation() {
                if (!this.value || !this.value.reservations) {
                    return null;
                }

                let lastReservation = null;

                for (let reservation of this.value.reservations) {
                    lastReservation = !lastReservation || lastReservation.checkin_at > reservation.checkin_at ? lastReservation : reservation;
                }

                return lastReservation;
            },
            checkinDate() {
                return '-';
            },
            checkinTime() {
                return '-';
            },
            checkoutDate() {
                return '-';
            },
            checkoutTime() {
                return '-';
            },
            payment() {
                return '-';
            },
            guestContact() {
                return '-';
            },
            guestName() {
                return '-';
            }
        }
    }
</script>

<style scoped>

</style>
