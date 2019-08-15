import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from './pages/Home';
import HomeEmpty from './pages/Home-empty';
import Login from './pages/Log-in';
import SignUp from './pages/Sign-up';
import ForgotPasswordStep1 from './pages/Forgot-password-step-1';
import ForgotPasswordStep2 from './pages/Forgot-password-step-2';
import ForgotPasswordStep3 from './pages/Forgot-password-step-3';
import ForgotPasswordStep4 from './pages/Forgot-password-step-4';
import Questionary from './pages/Questionary';
import InviteGuest from './pages/Invite-a-guest';
import ServiceRequest from './pages/ServiceRequests';
import SignUpOwnersPrivate from './pages/Sign-up-owners-private';
import SignUpOwnersCard from './pages/Sign-up-owners-card';
import SignUpOwnersPlans from './pages/Sign-up-owners-plans';
import ContactUs from './pages/contact-us';
import CheckinHistory from './pages/report-history/Checkin-history';
import HistoryReports from './pages/report-history/History-reports';
import AccountSettings from './pages/account-settings/account-settings';
import Calendar from './pages/calendar/Calendar';
import Notification from './pages/Notification';

import Navigation from './pages/navigation';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/calendar', component: Calendar },
        { path: '/account-settings', component: AccountSettings },
        { path: '/checkin-history', component: CheckinHistory },
        { path: '/history-reports', component: HistoryReports },
        { path: '/contact-us', component: ContactUs },
        { path: '/sign-up-owners-plans', component: SignUpOwnersPlans },
        { path: '/sign-up-owners-card', component: SignUpOwnersCard },
        { path: '/sign-up-owners-private', component: SignUpOwnersPrivate },
        { path: '/service-request', component: ServiceRequest },
        { path: '/invite-a-guest', component: InviteGuest },
        { path: '/login', component: Login },
        { path: '/sign-up', component: SignUp },
        { path: '/forgot-password-step-1', component: ForgotPasswordStep1 },
        { path: '/forgot-password-step-2', component: ForgotPasswordStep2 },
        { path: '/forgot-password-step-3', component: ForgotPasswordStep3 },
        { path: '/forgot-password-step-4', component: ForgotPasswordStep4 },
        { path: '/questionary', component: Questionary },
        { path: '/', component: Home },
        { path: '/home_empty', component: HomeEmpty },
        { path: '/navigation', component: Navigation },
        { path: '/notification', component: Notification },
        {
            path: '/add-property',
            component: () => import('./pages/add-property/Add-property'),
            props: route => ({ filter: route.query || {} }),
            children: [
                {
                    path: '',
                    name: 'add-property',
                    component: () => import('./pages/add-property/steps/HouseInformation')
                },
                {
                    path: 'rooms',
                    name: 'add-property.rooms',
                    component: () => import('./pages/add-property/steps/Rooms')
                },
                {
                    path: 'questionary',
                    name: 'add-property.questionary',
                    component: () => import('./pages/add-property/steps/Questionary')
                },
                {
                    path: 'services',
                    name: 'add-property.services',
                    component: () => import('./pages/add-property/steps/Services')
                },
                {
                    path: 'photo',
                    name: 'add-property.photo',
                    component: () => import('./pages/add-property/steps/Photo')
                },
            ]
        },
        {
            path: '/edit-property/:id',
            component: () => import('./pages/edit-property/Edit-property'),
            props: route => ({ filter: route.query || {}, id: parseInt(route.params.id) }),
            children: [
                {
                    path: '',
                    name: 'edit-property',
                    component: () => import('./pages/edit-property/tabs/HouseInformation'),
                },
                {
                    path: 'questionary',
                    name: 'edit-property.questionary',
                    component: () => import('./pages/edit-property/tabs/Questionary'),
                },
                {
                    path: 'service-requests',
                    name: 'edit-property.service-requests',
                    component: () => import('./pages/edit-property/tabs/ServiceRequests'),
                },
                {
                    path: 'wifi',
                    name: 'edit-property.wifi',
                    component: () => import('./pages/edit-property/tabs/Wifi'),
                },
                {
                    path: 'rules',
                    name: 'edit-property.rules',
                    component: () => import('./pages/edit-property/tabs/Rules'),
                },
                {
                    path: 'manuals',
                    name: 'edit-property.manuals',
                    component: () => import('./pages/edit-property/tabs/Manuals'),
                }
            ]
        },
        // {
        //     path: '/offer',
        //     name: 'offer',
        //     component: () => import(/* webpackChunkName: "static" */ '@/components/pages/PageOffer'),
        //     meta: {
        //         title: 'Условия использования'
        //     }
        // },
        // {
        //     path: '/registration',
        //     name: 'registration',
        //     component: () => import(/* webpackChunkName: "login" */ '@/components/pages/PageRegistration'),
        //     meta: {
        //         title: 'Регистрация'
        //     }
        // },
        // {
        //     path: '/login',
        //     name: 'login',
        //     component: () => import(/* webpackChunkName: "login" */ '@/components/pages/PageLogin'),
        //     meta: {
        //         title: 'Авторизация'
        //     }
        // },
        // {
        //     path: '/login/forgot',
        //     name: 'forgot',
        //     component: () => import(/* webpackChunkName: "login" */ '@/components/pages/PagePasswordRecovery'),
        //     meta: {
        //         title: 'Восстановление пароля'
        //     }
        // },
        // {
        //     path: '/',
        //     name: 'home',
        //     meta: {
        //         requiresAuth: true,
        //         title: 'Главная'
        //     },
        //     component: () => import(/* webpackChunkName: "dashboard" */ '@/components/pages/PageDashboard')
        // },
        // {
        //     path: '/kb',
        //     name: 'kb',
        //     meta: {
        //         requiresAuth: true,
        //         title: 'База знаний'
        //     },
        //     component: () => import(/* webpackChunkName: "static" */ '@/components/pages/PageKnowledgeBase')
        // },
        // {
        //     path: '/stocks',
        //     component: () => import('@/components/pages/PageStocks'),
        //     props: route => ({ filter: route.query || {} }),
        //     children: [
        //         {
        //             path: '',
        //             name: 'stocks',
        //             component: () => import(/* webpackChunkName: "stocks" */ '@/components/pages/PageProducts'),
        //             props: route => ({ filter: route.query || {} }),
        //             meta: {
        //                 requiresAuth: true,
        //                 title: 'Продукты'
        //             }
        //         },
        //         {
        //             path: 'recipes',
        //             name: 'stocks.recipes',
        //             component: () => import(/* webpackChunkName: "stocks" */ '@/components/pages/PageRecipes'),
        //             props: route => ({ filter: route.query || {} }),
        //             meta: {
        //                 requiresAuth: true,
        //                 title: 'Рецепты'
        //             }
        //         },
        //         {
        //             path: 'components',
        //             name: 'stocks.components',
        //             component: () => import(/* webpackChunkName: "stocks" */ '@/components/pages/PageComponents'),
        //             props: route => ({ filter: route.query || {} }),
        //             meta: {
        //                 requiresAuth: true,
        //                 title: 'Ингредиенты'
        //             }
        //         }
        //     ]
        // },
        // {
        //     path: '/planograms',
        //     component: () => import(/* webpackChunkName: "stocks" */ '@/components/pages/PagePlanograms'),
        //     props: route => ({ filter: route.query || {} }),
        //     children: [
        //         {
        //             path: '',
        //             name: 'planograms',
        //             component: () => import(/* webpackChunkName: "stocks" */ '@/components/pages/PagePlanogramsList'),
        //             props: route => ({ filter: route.query || {} }),
        //             meta: {
        //                 requiresAuth: true,
        //                 title: 'Планограммы'
        //             }
        //
        //         },
        //         {
        //             path: ':id',
        //             component: () => import(/* webpackChunkName: "stocks" */ '@/components/pages/PagePlanogram'),
        //             props: route => ({ filter: route.query || {}, id: parseInt(route.params.id) }),
        //             children: [
        //                 {
        //                     path: '',
        //                     name: 'planogram',
        //                     component: () => import(/* webpackChunkName: "stocks" */ '@/components/pages/PagePlanogramLayout'),
        //                     props: route => ({ filter: route.query || {} }),
        //                     meta: {
        //                         requiresAuth: true,
        //                         title: route => `Планограмма #${route.params.id}`
        //                     }
        //                 },
        //                 {
        //                     path: 'capacity',
        //                     name: 'planogram.capacity',
        //                     component: () => import(/* webpackChunkName: "stocks" */ '@/components/pages/PagePlanogramCapacity'),
        //                     props: route => ({ filter: route.query || {} }),
        //                     meta: {
        //                         requiresAuth: true,
        //                         title: route => `Планограмма #${route.params.id}`
        //                     }
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     path: '/modems',
        //     name: 'modems',
        //     component: () => import(/* webpackChunkName: "modems" */ '@/components/pages/PageModems'),
        //     props: route => ({ filter: route.query || {} }),
        //     meta: {
        //         requiresAuth: true,
        //         title: 'Модемы'
        //     }
        // },
        // {
        //     path: '/vms',
        //     name: 'vms',
        //     meta: {
        //         requiresAuth: true,
        //         title: 'Автоматы'
        //     },
        //     component: () => import(/* webpackChunkName: "vms" */ '@/components/pages/PageVms'),
        //     props: route => ({ filter: route.query || {} }),
        //     children: [
        //         {
        //             path: 'new',
        //             name: 'vms.new',
        //             component: () => import(/* webpackChunkName: "vms" */ '@/components/VmModal'),
        //             meta: {
        //                 requiresAuth: true,
        //                 title: 'Новый автомат'
        //             }
        //         }
        //     ]
        // },
        // {
        //     path: '/vms/:id',
        //     component: () => import(/* webpackChunkName: "vms" */ '@/components/pages/PageVm'),
        //     props: route => ({ filter: route.query || {}, id: parseInt(route.params.id) }),
        //     children: [
        //         {
        //             path: '',
        //             name: 'vm',
        //             redirect: 'vends'
        //         },
        //         {
        //             path: 'vends',
        //             name: 'vm.vends',
        //             component: () => import(/* webpackChunkName: "vms" */ '@/components/pages/PageVmTabVends'),
        //             meta: {
        //                 requiresAuth: true,
        //                 title: route => `Автоматы - T${route.params.id}`
        //             },
        //             children: [
        //                 {
        //                     path: 'correction',
        //                     name: 'vm.vends.correction',
        //                     component: () => import(/* webpackChunkName: "vms" */ '@/components/VmCorrectionModal'),
        //                     meta: {
        //                         requiresAuth: true,
        //                         title: route => `Автоматы - T${route.params.id}`
        //                     }
        //                 }
        //             ]
        //         },
        //         {
        //             path: 'layout',
        //             name: 'vm.layout',
        //             component: () => import(/* webpackChunkName: "vms" */ '@/components/pages/PageVmTabLayout'),
        //             meta: {
        //                 requiresAuth: true,
        //                 title: route => `Автоматы - T${route.params.id}`
        //             }
        //         },
        //         {
        //             path: 'capacity',
        //             name: 'vm.capacity',
        //             component: () => import(/* webpackChunkName: "vms" */ '@/components/pages/PageVmTabCapacity'),
        //             meta: {
        //                 requiresAuth: true,
        //                 title: route => `Автоматы - T${route.params.id}`
        //             },
        //             children: [
        //                 {
        //                     path: 'loading',
        //                     name: 'vm.capacity.loading',
        //                     component: () => import(/* webpackChunkName: "vms" */ '@/components/VmLoadingModal'),
        //                     props: route => ({ filter: route.query || {} }),
        //                     meta: {
        //                         requiresAuth: true,
        //                         title: route => `Автоматы - T${route.params.id}`
        //                     }
        //                 }
        //             ]
        //         },
        //         {
        //             path: 'settings',
        //             name: 'vm.settings',
        //             component: () => import(/* webpackChunkName: "vms" */ '@/components/pages/PageVmTabSettings'),
        //             meta: {
        //                 requiresAuth: true,
        //                 title: route => `Автоматы - T${route.params.id}`
        //             }
        //         }
        //     ]
        // },
        //
        // {
        //     path: '/vends',
        //     name: 'vends',
        //     component: () => import(/* webpackChunkName: "vends" */ '@/components/pages/PageVends'),
        //     props: route => ({ filter: route.query || {} }),
        //     meta: {
        //         requiresAuth: true,
        //         title: 'Продажи'
        //     }
        // },
        //
        // {
        //     path: '/setup',
        //     name: 'profile.setup',
        //     component: () => import(/* webpackChunkName: "profile" */ '@/components/profile/pages/PageBoarding'),
        //     meta: {
        //         requiresAuth: true,
        //         title: 'Быстрая настройка'
        //     }
        // },
        // {
        //     path: '/profile',
        //     component: () => import(/* webpackChunkName: "profile" */ '@/components/profile/pages/PageProfile'),
        //     meta: {
        //         requiresAuth: true,
        //         title: 'Профиль'
        //     },
        //     children: [
        //         {
        //             path: 'company',
        //             name: 'profile.company',
        //             component: () => import(/* webpackChunkName: "profile" */ '@/components/profile/pages/PageProfileCompany'),
        //             meta: {
        //                 requiresAuth: true,
        //                 title: 'Профиль'
        //             },
        //             children: [
        //                 {
        //                     path: 'fares',
        //                     name: 'profile.company.fares',
        //                     component: () => import(/* webpackChunkName: "profile" */ '@/components/profile/pages/PageFares'),
        //                     meta: {
        //                         title: 'Тарифы',
        //                         requiresAuth: true
        //                     }
        //                 },
        //                 {
        //                     path: 'requisites',
        //                     name: 'profile.company.requisites',
        //                     component: () => import(/* webpackChunkName: "profile" */ '@/components/profile/pages/PageRequisites'),
        //                     meta: {
        //                         title: 'Тарифы',
        //                         requiresAuth: true
        //                     }
        //                 }
        //             ]
        //         },
        //         {
        //             path: 'user',
        //             name: 'profile.user',
        //             component: () => import(/* webpackChunkName: "profile" */ '@/components/profile/pages/PageProfileUser'),
        //             meta: {
        //                 requiresAuth: true,
        //                 title: 'Профиль'
        //             }
        //         },
        //         {
        //             path: '',
        //             name: 'profile',
        //             redirect: 'company'
        //         }
        //     ]
        // },
        //
        // {
        //     path: '/console',
        //     name: 'admin',
        //     component: () => import(/* webpackChunkName: "admin" */ '@/components/admin/pages/PageDashboard'),
        //     props: route => ({ filter: route.query || {} }),
        //     meta: {
        //         title: 'Админка',
        //         requireAdmin: true,
        //         adminArea: true
        //     }
        // },
        //
        // {
        //     path: '/console/company/:id',
        //     name: 'admin.company',
        //     component: () => import(/* webpackChunkName: "admin" */ '@/components/admin/pages/PageCompany'),
        //     meta: {
        //         title: route => `Компания #${route.params.id}`,
        //         requireAdmin: true,
        //         adminArea: true
        //     }
        // },
        //
        // {
        //     path: '/billing',
        //     name: 'billing',
        //     component: () => import(/* webpackChunkName: "billing" */ '@/components/billing/pages/PageBilling'),
        //     meta: {
        //         title: 'Биллинг',
        //         requiresAuth: true,
        //         availableWhenSuspend: true
        //     },
        //     children: [
        //         {
        //             path: 'recharge',
        //             name: 'billing.recharge',
        //             component: () => import(/* webpackChunkName: "billing" */ '@/components/billing/pages/PageRecharge'),
        //             meta: {
        //                 title: 'Онлайн-платеж',
        //                 requiresAuth: true,
        //                 availableWhenSuspend: true
        //             }
        //         },
        //         {
        //             path: 'recharge-success',
        //             component: () => import(/* webpackChunkName: "billing" */ '@/components/billing/pages/PageRechargeComplete'),
        //             props: { state: 'success' },
        //             meta: {
        //                 title: 'Онлайн-платеж',
        //                 requiresAuth: true,
        //                 availableWhenSuspend: true
        //             }
        //         },
        //         {
        //             path: 'recharge-fail',
        //             component: () => import(/* webpackChunkName: "billing" */ '@/components/billing/pages/PageRechargeComplete'),
        //             props: { state: 'fail' },
        //             meta: {
        //                 title: 'Онлайн-платеж',
        //                 requiresAuth: true,
        //                 availableWhenSuspend: true
        //             }
        //         }
        //     ]
        // },
        //
        // {
        //     path: '/suspend',
        //     name: 'suspend',
        //     component: () => import(/* webpackChunkName: "billing" */ '@/components/pages/PageSuspend'),
        //     meta: {
        //         availableWhenSuspend: true
        //     }
        // },
        //
        // {
        //     path: '*',
        //     redirect: '/'
        // }
    ]
})
