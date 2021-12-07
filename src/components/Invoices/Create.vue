<template lang="pug">
	.flex.flex-col.p-2.bg-white.shadow-xl.rounded-xl
		form(class='space-y-8 divide-y divide-gray-200 p-8')
			div(class='space-y-8 divide-y divide-gray-200')
				div
					div
						h3(class='text-lg leading-6 font-medium text-gray-900') Create Invoice
						p(class='mt-1 text-sm text-gray-500') Please fill in the form below to create a new invoice.
					div(class='mt-6 grid grid-cols-1 gap-y-6 gap-x-4')
						TADAFormSelect(
							:options='state_users.data'
							@on-select='(user_id) => new_invoice = { ...new_invoice, user_id: user_id }'
							placeholder='Choose user'
							title='Invoice User'
							v-model='new_invoice.user_id'
						)
						div(class='col-span-4')
							label(class='block text-sm font-medium text-gray-700') Invoice Items
							.flex.w-full.items-center.mt-2(
								:key='item_index'
								v-for='(item, item_index) in new_invoice.items'
							)
								.flex.flex-1.items-center
									label(class='block text-sm text-gray-700') Item:
									TADAFormSelect.flex-1.ml-2(
										:options='state_items.data'
										@on-select='addItem($event, item, item_index)'
										placeholder='Choose item'
										v-model='item._id'
									)
								.flex.items-center.ml-4
									label(class='block text-sm text-gray-700') Quantity:
									input.border.border-gray-300.ml-2.px-3.py-2.rounded-lg(
										@input='updateQuantity(item_index, $event), getTotalAmount()'
										min=0
										type='number'
										v-model='item.quantity'
									)
							.flex.w-full.justify-end.mt-4
								button(
									:class='new_invoice.items.length === 0 ? "bg-gray-200 text-gray-600 cursor-not-allowed" : "text-green-600 bg-green-100 hover:bg-green-200 focus:ring-green-500"'
									@click='addNewItem'
									class='inline-flex items-center px-3 py-1 border border-transparent text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2'
									type='button'
								) Add more item
						.flex.flex-col.w-full.justify-end
							.flex
								span.text-lg.uppercase.text-gray-500 Total
								span.font-semibold.text-lg.text-gray-700.ml-2 {{ new_invoice.total_amount | currency }}
				.flex.w-full.justify-end.pt-8
					button(
						@click='$emit("on-cancel")'
						class='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-yellow-600 bg-yellow-100 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
						type='button'
					) Cancel
</template>

<script>
	import { mapGetters } from 'vuex'
	import { each } from 'underscore'
	import TADAFormSelect from '../Forms/Select'

	export default {
		name: 'CreateInvoice',
		components: { TADAFormSelect },
		emits: ['on-cancel'],
		data() {
			return {
				new_item: {
					_id: null,
					quantity: 0,
				},
				new_invoice: {
					total_amount: 0,
					items: [
						{
							_id: null,
							quantity: 0,
						},
					],
					user_id: null,
				},
			}
		},
		computed: {
			...mapGetters({
				getItemPriceById: 'ITEMS/getItemPriceById',
				state_items: 'ITEMS/items',
				state_users: 'USERS/users',
			}),
		},
		methods: {
			addItem(item_id, { quantity }, index) {
				this.new_invoice.items[index] = {
					...this.new_invoice[index],
					_id: item_id,
					quantity: quantity,
				}

				this.getTotalAmount()
			},
			addNewItem() {
				this.new_invoice.items = [
					...this.new_invoice.items,
					{
						...this.new_item,
					},
				]
			},
			getTotalAmount() {
				let total_amount = 0

				each(this.new_invoice.items, (item) => {
					const price = this.getItemPriceById(item._id)
					const quantity = parseInt(item.quantity, 10)
					const total = price * quantity

					total_amount += total
				})

				this.new_invoice = {
					...this.new_invoice,
					total_amount: total_amount,
				}
			},
			updateQuantity(index, { target: { value } }) {
				this.new_invoice.items[index] = {
					...this.new_invoice.items[index],
					quantity: value,
				}
			},
		},
	}
</script>
