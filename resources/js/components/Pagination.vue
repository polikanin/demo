<template>
    <ul v-if="ready && pa.last_page > 1" class="pagination">
        <li :class="{ disabled: onFirstPage }" class="page-item">
            <a class="page-link" href="#" @click.prevent="click(pa.current_page - 1)">
                <i class="fa fa-angle-double-left" aria-hidden="true" />
            </a>
        </li>

        <li v-for="link in links" :key="link.page" :class="{ disabled: !link.page, active: link.page == meta.current_page }" class="page-item">
            <a class="page-link" href="#" @click.prevent="click(link.page)">{{ link.page || link }}</a>
        </li>

        <li :class="{ disabled: !hasMorePages }" class="page-item">
            <a class="page-link" href="#" @click.prevent="click(meta.current_page + 1)">
                <i class="fa fa-angle-double-right" aria-hidden="true" />
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            meta: {
                type: Object,
                default() {
                    return {
                        current_page: 1,
                        from: 1,
                        last_page: 1,
                        path: '#',
                        per_page: 15,
                        to: 1,
                        total: 1
                    }
                }
            },

            onEachSide: {
                type: Number,
                default: 1
            }
        },

        computed: {
            ready() {
                return this.links.length > 0
            },

            pa() {
                return this.meta
            },

            onFirstPage() {
                return this.pa.current_page <= 1
            },

            hasMorePages() {
                return this.pa.current_page < this.pa.last_page
            },

            hasPages() {
                return this.pa.last_page > 1
            },

            links() {
                let wndw = this.slider

                return []
                    .concat(...[
                        wndw[0],
                        wndw[1] ? '...' : null,
                        wndw[1],
                        wndw[2] ? '...' : null,
                        wndw[2]
                    ])
                    .filter(link => link !== null)
            },

            slider() {
                let wndw = this.onEachSide * 2

                let range = (start, end) => {
                    let urls = []
                    for (let page = start; page <= end; page++) {
                        urls.push({ href: '#', page })
                    }

                    return urls
                }

                if (this.pa.last_page < (this.onEachSide * 2 + 6)) {
                    return [
                        range(1, this.pa.last_page),
                        null,
                        null
                    ]
                }

                if (!this.hasPages) {
                    return [
                        null,
                        null,
                        null
                    ]
                }

                if (this.pa.current_page <= wndw) {
                    return [
                        range(1, wndw + 2),
                        null,
                        range(this.pa.last_page - 1, this.pa.last_page)
                    ]
                }

                if (this.pa.current_page > (this.pa.last_page - wndw)) {
                    return [
                        range(1, 2),
                        null,
                        range(this.pa.last_page - (wndw + 2), this.pa.last_page)
                    ]
                }

                return [
                    range(1, 2),
                    range(this.pa.current_page - this.onEachSide, this.pa.current_page + this.onEachSide),
                    range(this.pa.last_page - 1, this.pa.last_page)
                ]
            }
        },

        methods: {
            click(page) {
                this.$emit('page', page)
            }
        }
    }
</script>
