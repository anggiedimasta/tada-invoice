<template lang="pug">
	div(class='max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8')
		slide-y-up-transition
			CreateInvoice.mb-8(
				@on-cancel='toggleCreateInvoice'
				v-if='is.creating_invoice'
			)
		.flex.flex-col.p-4.bg-white.shadow-xl.overflow-hidden.rounded-xl
			.flex.w-full.justify-between.mb-8.p-4
				.flex.flex-1.items-center.text-gray-500
					span Total Invoices:
					span.ml-2.text-2xl.font-semibold {{ state_invoices.total_data }}
				button(
					@click='toggleCreateInvoice'
					class='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
					type='button'
					v-if='!is.creating_invoice'
				) Create Invoice
			ul.rounded-xl.overflow-hidden(
				class='divide-y divide-gray-200'
				role='list'
			)
				li(
					:key='invoice._id'
					v-for='invoice in state_invoices.data'
					v-if='state_invoices.total_data > 0'
				)
					router-link(
						:to='{ name: "Invoice", params: { code: invoice.code } }'
						class='block hover:bg-gray-50'
					)
						.flex.w-full(class='px-4 py-4 sm:px-6')
							.flex.items-start.w-44.flex-col.justify-center
								span.text-gray-400 {{ invoice.code }}
								span.text-xl.font-semibold {{ invoice.currency }} {{ getInvoiceAmountTotal(invoice) | currency }}
							.flex.flex-1.flex-col.pl-4
								div(class='flex items-center justify-between')
									span(class='text-sm font-medium text-indigo-600 truncate') {{ invoice.user.name }}
									div(class='ml-2 flex-shrink-0 flex')
										p(
											:class='invoice.status === "completed" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"'
											class='px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
										) {{ invoice.status }}
								div(class='mt-2 sm:flex sm:justify-between')
									.text-gray-500.text-sm.items-center(class='sm:flex')
										div
											span.font-medium Items:
										div(
											:key='`${invoice.code}-item-${item_index}`'
											class='flex ml-2 items-center bg-gray-100 rounded-full px-2 py-1'
											v-for='(item, item_index) in invoice.items'
											v-if='item_index < 3'
										)
											span.truncate {{ item.name }}
									div(class='mt-2 flex items-center text-sm text-gray-500 sm:mt-0')
										span.flex.font-medium Created at:
										time.flex.ml-2(:datetime='invoice.date.created') {{ invoice.date.created | datetime }}
									div(class='mt-2 flex items-center text-sm text-gray-500 sm:mt-0' v-if='invoice.date.paid')
										span.flex.font-medium Completed at:
										time.flex.ml-2(:datetime='invoice.date.paid') {{ invoice.date.paid | datetime }}
</template>

<script>
	import CreateInvoice from '@/components/Invoices/Create'
	import { mapGetters } from 'vuex'
	import { reduce } from 'underscore'
	import { SlideYUpTransition } from 'vue2-transitions'

	export default {
		name: 'Invoices',
		components: {
			CreateInvoice,
			SlideYUpTransition,
		},
		data() {
			return {
				is: {
					creating_invoice: true,
				},
			}
		},
		computed: {
			...mapGetters({
				state_invoices: 'INVOICES/invoices',
			}),
		},
		methods: {
			getInvoiceAmountTotal({ discount, items, tax }) {
				let amount_total = reduce(
					items,
					(item) => item.price * item.quantity,
				)

				if (discount) {
					if (discount.is_percentage) {
						amount_total =
							(amount_total * (100 - discount.value)) / 100
					} else {
						amount_total -= discount.value
					}
				}

				if (tax) {
					if (tax.is_percentage) {
						amount_total = (amount_total * (100 + tax.value)) / 100
					} else {
						amount_total -= tax.value
					}
				}

				return amount_total
			},
			toggleCreateInvoice() {
				this.is = {
					...this.is,
					creating_invoice: !this.is.creating_invoice,
				}
			},
		},
	}
</script>
