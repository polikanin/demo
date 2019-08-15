<template>
    <div class="page-inputs__inner">
        <div class="wrapper">
            <ul class="navigation" v-if="categories.length > 0">
                <li v-for="(category, index) in categories"
                    @click="activeCategoryId = category.id"
                    :class="{active: category.id === activeCategoryId}"
                >
                    <span class="navigation__text">{{ category.name }}</span>
                    <span class="navigation__count">({{ category.rules.length }})</span>
                    <button class="navigation-delete" @click="categories.splice(index, 1)"></button>
                </li>
                <li class="navigation__add" @click="isNewCategoryModal = true">
                    Add category
                </li>
            </ul>

            <div class="container">
                <div class="form">
                    <div v-if="activeCategory">
                        <div class="rules__tab" v-for="(rule, index) in activeCategory.rules">
                            <p class="rules__tab-name"
                               @click="activeAccordion !== index ? activeAccordion = index : activeAccordion = null"
                               :class="{active: activeAccordion === index}"
                            >
                                {{ rule.title }}

                                <img src="/images/icons/icon-tab.svg" alt="pic">
                            </p>
                            <Accordeon>
                                <div class="rules__tab-inner" v-show="activeAccordion === index">
                                    <p class="rules__tab-text">
                                        {{ rule.text }}
                                    </p>
                                </div>
                            </Accordeon>

                            <button class="rules__tab-delete" @click="activeCategory.rules.splice(index, 1)"></button>
                        </div>

                        <div class="rules__item">
                            <p class="rules__item-name">
                                <input type="text" v-model="newRule.title" placeholder="Enter title of a rule">
                            </p>
                            <p class="rules__item-text">
                                <textarea type="text" v-model="newRule.text" placeholder="Enter rule"></textarea>
                            </p>
                        </div>

                        <button class="btn gray" v-on:click.prevent="addRule()">
                            Add the rule
                        </button>
                    </div>

                    <div class="rules_empty" v-if="categories.length === 0">
                        <p class="rules_empty-text">
                            You don’t have any rules
                        </p>

                        <button class="btn gray" v-on:click.prevent="isNewCategoryModal = true">
                            Add category
                        </button>
                    </div>

                </div>
            </div>
        </div>

        <vue-modaltor :visible="isNewCategoryModal" :resize-width='{768:"290px"}' :default-width="'475px'" @hide="isNewCategoryModal = false">
            <div class="modal-container">
                <p class="title_internal">
                    Add category
                </p>
                <input type="text" class="input" v-model="newCategory.name" placeholder="Name of category">

                <button class="btn" @click="addCategory()">Add</button>
            </div>
        </vue-modaltor>
    </div>
</template>

<script>
    import Accordeon from '../../../components/Accordeon'

    import cloneDeep from 'lodash/cloneDeep';
    import isEqual from 'lodash/isEqual';
    import isEmpty from 'lodash/isEmpty';

    const newCategoryInitial = {
        name: '',
        rules: []
    };

    const newRuleInitial = {
        title: '',
        text: ''
    };

    export default {
        components: {
            Accordeon
        },

        props: {
            value: {
                required: true,
                type: Object,
                default: () => ({})
            }
        },

        data() {
            return {
                valueLocal: cloneDeep(this.value),

                activeCategoryId: null,
                activeAccordion: false,
                isNewCategoryModal: false,

                newCategory: { ...newCategoryInitial },
                newRule: { ...newRuleInitial },
            }
        },

        computed: {
            categories: {
                get: function() {
                    return this.valueLocal.rules_categories ? this.valueLocal.rules_categories : [];
                },
                set: function(value) {
                    this.valueLocal.rules_categories = value;
                }
            },
            activeCategory() {
                return this.activeCategoryId !== null ?
                    this.valueLocal.rules_categories.find(category => category.id === this.activeCategoryId) :
                    null;
            }
        },

        created() {
            this.selectActiveCategoryId();
        },

        watch: {
            value: function () {
                if (isEqual(this.valueLocal, this.value)) {
                    return;
                }
                this.valueLocal = cloneDeep(this.value);
            },
            valueLocal: {
                handler: function (value, valueOld) {
                    this.selectActiveCategoryId();

                    if (isEmpty(valueOld)) {
                        return;
                    }
                    this.$emit('input', this.valueLocal);
                },
                deep: true
            }
        },

        methods: {
            addRule: function () {
                this.activeCategory.rules.push(this.newRule);
                this.newRule = { ...newRuleInitial };
            },
            addCategory: function () {
                this.categories.push(this.newCategory);
                this.isNewCategoryModal = false;
                this.newCategory = { ...newCategoryInitial };
            },
            selectActiveCategoryId() {
                if (this.valueLocal &&
                    this.valueLocal.rules_categories &&
                    this.valueLocal.rules_categories.length &&
                    !this.valueLocal.rules_categories.find(item => item.id === this.activeCategoryId)) {
                    this.activeCategoryId = this.valueLocal.rules_categories[0].id;
                }
            }
        }
    }
</script>
