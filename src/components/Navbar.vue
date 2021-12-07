<template lang="pug">
	nav(class='bg-indigo-600 border-b border-indigo-300 border-opacity-25 lg:border-none')
		div(class='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8')
			div(class='relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25')
				div(class='px-2 flex items-center lg:px-0')
					div(class='flex-shrink-0')
						img(class='block h-8 w-auto' src='https://www.usetada.com/hubfs/Images/TADA-LOGO-01.png' alt='Workflow')
					div(class='hidden lg:block lg:ml-10')
						div(class='flex space-x-4')
							router-link(
								:aria-current='route.name === $route.name ? "page" : undefined'
								:class='[route.name === $route.name ? "bg-indigo-700 text-white" : "text-white hover:bg-indigo-500 hover:bg-opacity-75", "rounded-md py-2 px-3 text-sm font-medium"]'
								:key='route.name'
								:to='{ name: route.name }'
								v-for='route in app_routes'
							) {{ route.name }}
		div(class='lg:hidden')
			div(class='px-2 pt-2 pb-3 space-y-1')
				router-link(
					:aria-current='route.name === $route.name ? "page" : undefined'
					:class='[route.name === $route.name ? "bg-indigo-700 text-white" : "text-white hover:bg-indigo-500 hover:bg-opacity-75", "block rounded-md py-2 px-3 text-base font-medium"]'
					:key='route.name'
					:to='{ name: route.name }'
					v-for='route in app_routes'
				) {{ route.name }}
</template>

<script>
	import { findWhere } from 'underscore'

	export default {
		name: 'Navbar',
		computed: {
			app_routes() {
				return findWhere(this.$router.options.routes, {
					name: 'Main App',
				}).children
			},
		},
	}
</script>
