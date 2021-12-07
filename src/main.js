import { each } from 'underscore'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueCurrencyFilter from 'vue-currency-filter'
import VueModal from 'vue-js-modal'
import VueToast, { createToastInterface } from 'vue-toastification'

import dayjs from 'dayjs'

import 'vue-toastification/dist/index.css'
import '@/stylesheets/tailwind.sass'

Vue.config.productionTip = false

const errorResponseHandler = (errors) => {
	if (errors.response && errors.response.data.data?.errors) {
		const toast = createToastInterface()

		each(errors.response.data.data.errors, (error_type) => {
			each(error_type, (error) => {
				toast.error(error)
			})
		})
	}
	if (errors.response && errors.response.data.errors) {
		const toast = createToastInterface()

		each(errors.response.data.errors, (error_type) => {
			each(error_type, (error) => {
				toast.error(error)
			})
		})
	}
}

axios.interceptors.response.use((response) => response, errorResponseHandler)

Vue.filter('datetime', (datetime) => {
	const time = dayjs.unix(datetime)

	return time ? dayjs(time).format('DD/MM/YYYY[,] HH:mm:ss') : ''
})

Vue.use(VueCurrencyFilter, {
	thousandsSeparator: '.',
	fractionCount: 0,
	symbolPosition: 'front',
	symbolSpacing: true,
})

Vue.use(VueAxios, axios)
Vue.use(VueModal)
Vue.use(VueToast)

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
