<template>
    <div class="page-home">
        <div class="wrapper">
            <div class="page-head">
                <div>
                    <h2 class="title">
                        Calendar
                    </h2>
                    <p class="text">
                        Objects in which guests currently live
                    </p>
                </div>
            </div>

            <div class="calendar">
                <div class="calendar__ctrl">
                    <button class="btn" @click="popup.add_reservation=true">
                        Add an event
                    </button>
                    <v-select
                            class="lg"
                            v-model="property"
                            :options="['Choose a property']"
                            :searchable="false"
                            :clearable="false"
                    >

                    </v-select>
                    <v-select
                            v-model="month"
                            :options="['Martch','May']"
                            :searchable="false"
                            :clearable="false"
                    >

                    </v-select>
                    <v-select
                            v-model="year"
                            :options="['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011']"
                            :searchable="false"
                            :clearable="false"
                    >

                    </v-select>
                </div>

                <FullCalendar
                        class='demo-app-calendar'
                        ref="fullCalendar"
                        defaultView="dayGridMonth"
                        :plugins="calendarPlugins"
                        :weekends="calendarWeekends"
                        :events="calendarEvents"
                        v-on:dateClick="handleDateClick"
                        v-on:eventClick="eventHandler"
                />
            </div>
        </div>

        <vue-modaltor :visible="popup.add_reservation" :resize-width='{768:"290px"}' :default-width="'640px'" @hide="hideModal">
            <div class="modal-add-event">
                <div class="tabs">
                    <button class="tabs__btn" @click="active_step = 1" :class="{active: active_step == 1}">Reservation</button>
                    <button class="tabs__btn" @click="active_step = 2" :class="{active: active_step == 2}">Services</button>
                </div>

                <div v-if="active_step == 1">
                    <div class="container">
                        <div class="col">
                            <p class="title_internal">
                                Create new booking
                            </p>

                            <v-select
                                    :placeholder="'Status'"
                                    :options="['Status1','Status2']"
                                    :searchable="false"
                                    :clearable="false"
                            >

                            </v-select>

                            <v-select
                                    :placeholder="'Property type'"
                                    :options="['type','type2']"
                                    :searchable="false"
                                    :clearable="false"
                            >

                            </v-select>

                            <date-pick
                                    class="date-picker"
                                    v-model="checkin"
                                    :pickTime="true"
                                    :inputAttributes="{
                                        placeholder: 'Check in'
                                    }"
                                    :format="'YYYY-MM-DD HH:mm'"
                            >

                            </date-pick>

                            <date-pick
                                    class="date-picker"
                                    v-model="checkout"
                                    :pickTime="true"
                                    :inputAttributes="{
                                        placeholder: 'Check out'
                                    }"
                                    :format="'YYYY-MM-DD HH:mm'"
                            >

                            </date-pick>

                            <textarea class="input_text" placeholder="Comment"></textarea>
                        </div>
                        <div class="col">
                            <p class="title_internal">
                                A guest
                            </p>

                            <input type="text" class="input" placeholder="First name">
                            <input type="text" class="input" placeholder="Last name">
                            <input type="text" class="input" placeholder="Phone number">
                            <input type="text" class="input" placeholder="Home many guests will come?">
                        </div>
                    </div>

                    <div class="from__ctrl">
                        <button class="btn">
                            Add and invite a guest
                        </button>
                        <button class="btn gray">
                            Add
                        </button>
                    </div>
                </div>

                <div v-if="active_step == 2">
                    <p class="title_internal">
                        Create new service
                    </p>

                    <h1 id="testId" class="testClass">
                        test
                    </h1>

                    <input type="text" class="input" placeholder="Service">

                    <div class="form-group_2">
                        <input
                                type="text"
                                class="input"
                                placeholder="Date"
                        >

                        <input
                                type="text"
                                class="input"
                                placeholder="Time"
                        >
                    </div>

                    <textarea class="input_text" placeholder="Comment"></textarea>

                    <div class="from__ctrl">
                        <button class="btn">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </vue-modaltor>

        <vue-modaltor :visible="popup.services" :resize-width='{768:"290px"}' :default-width="'475px'" @hide="hideModal">
            <div class="modal-service">
                <p class="title_internal">
                    Service
                </p>

                <div class="group">
                    <p class="title-mini_internal">
                        Type
                    </p>
                    <p class="text">
                        Cleaning
                    </p>
                </div>

                <div class="group">
                    <p class="title-mini_internal">
                        Date and time
                    </p>
                    <p class="text">
                        11.03.2019   11:30 PM
                    </p>
                </div>

                <div class="group">
                    <p class="title-mini_internal">
                        Comment
                    </p>
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                </div>

                <button class="btn">
                    Edit
                </button>
            </div>
        </vue-modaltor>

        <vue-modaltor :visible="popup.reservation" :resize-width='{768:"290px"}' :default-width="'640px'" @hide="hideModal">
            <div class="modal-reservation">
                <p class="title_internal">
                    Reservation
                </p>

                <div class="container">
                    <div class="left">
                        <div class="group">
                            <p class="title-mini_internal">
                                Regnum Apartment
                            </p>
                            <p class="subtitle">
                                <img src="/images/icons/icon-pin.svg" alt="pic">
                                Los Angeles, California
                            </p>
                        </div>
                        <div class="group-container">
                            <div class="col">
                                <p class="title-mini_internal">
                                    Checkin
                                </p>
                                <p class="text">
                                    11.03.2019   11:30 PM
                                </p>
                            </div>
                            <div class="col">
                                <p class="title-mini_internal">
                                    Checkout
                                </p>
                                <p class="text">
                                    11.03.2019   11:30 PM
                                </p>
                            </div>
                        </div>
                        <div class="group">
                            <p class="title-mini_internal">
                                Comment
                            </p>
                            <p class="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="contacts__group">
                            <p class="title-mini_internal">
                                Gary Hall
                            </p>
                            <p class="text">
                                Joined in March 2019
                            </p>
                        </div>

                        <div class="contacts__group">
                            <p class="title-mini_internal">
                                Message guest
                            </p>
                            <p class="text">
                                8 (800) 555-35-35
                            </p>
                        </div>

                        <div class="contacts__group">
                            <p class="title-mini_internal">
                                Status
                            </p>
                            <p class="text">
                                Confirmed
                            </p>
                        </div>
                    </div>
                </div>

                <button class="btn">
                    Edit
                </button>
            </div>
        </vue-modaltor>
    </div>
</template>

<script>
    import FullCalendar from '@fullcalendar/vue'
    import dayGridPlugin from '@fullcalendar/daygrid'
    import interactionPlugin from '@fullcalendar/interaction';

    export default {
        name: "Calendar",
        components: {
            FullCalendar,
        },
        data(){
            return {
                checkin: '',
                checkout: '',
                active_step: 1,
                property: 'Choose a property',
                month: 'Martch',
                year: '2019',
                popup: {
                    add_reservation: false,
                    add_services: false,
                    services: false,
                    reservation: false,
                },
                calendarPlugins: [
                    dayGridPlugin,
                    interactionPlugin
                ],
                calendarWeekends: true,
                calendarEvents: [
                    {
                        title: 'Event Now',
                        start: new Date() - 1000000000,
                        classNames: 'confirmed',
                        editable: true
                    },
                    {
                        title: 'Event Now2',
                        start: new Date() - 1200000000,
                        classNames: 'not-confirmed'
                    },
                    {
                        title: 'Event Now3',
                        start: new Date() - 1100000000,

                    },
                ]
            }
        },
        methods: {
            eventHandler: function(info) {
                if(info.el.classList.contains('confirmed')){
                    this.popup.reservation=true
                }
                else{
                    this.popup.services=true
                }
            },
            hideModal() {
                _.each(this.popup, function (item, i, obj) {
                    obj[i] = false
                })
            },
            handleDateSelect(arg) {
                console.log('ttttt')
            },
            handleDateClick(arg) {
                //alert(arg.date)
                // let calendarApi = this.$refs.fullCalendar.getApi()
                // console.log(calendarApi)
                // calendarApi.today()
                this.popup.change_plan=true
            },
            toggleWeekends() {
                this.calendarWeekends = !this.calendarWeekends // update a property
            },
            gotoPast() {
                let calendarApi = this.$refs.fullCalendar.getApi() // from the ref="..."
                calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
            },
        }
    }
</script>

<style lang="scss">
    @import '~@fullcalendar/core/main.css';
    @import '~@fullcalendar/daygrid/main.css';

    .fc-toolbar{
        display: none;
    }
</style>
