import Invoices from './invoices/index'

const MainApp = {
	path: '/app',
	name: 'Main App',
	component: () =>
		import(/* webpackChunkName: "main-app" */ '@/views/app/Index.vue'),
	meta: {
		requiresAuth: true,
	},
	redirect: {
		name: 'Invoices',
	},
	children: [Invoices],
}

let routes = []
routes = [...routes, MainApp]

export default routes
