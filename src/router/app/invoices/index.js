export default {
	path: 'invoices',
	name: 'Invoices',
	component: () =>
		import(
			/* webpackChunkName: "invoices" */ '@/views/app/invoices/Index.vue'
		),
	meta: {
		icon: 'person',
	},
}
