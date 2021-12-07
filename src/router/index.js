import AppRouter from './app'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const DefaultRouter = [
	{
		path: '*',
		redirect: '/app',
	},
]

const routes = [...AppRouter, ...DefaultRouter]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

router.beforeEach((to, _from, next) => {
	document.title = 'TADA | ' + to.name

	next()
})

export default router
