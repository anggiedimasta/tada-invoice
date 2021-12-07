<template lang="pug">
	.flex.flex-col.flex-1.min-h-screen.w-screen.bg-gray-50.overflow-y-auto
		div(class='bg-indigo-600 pb-32')
			TADANavbar
			header(class='py-10')
				div(class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8')
					h1(class='text-3xl font-bold text-white') {{ $route.name }}
		slide-y-up-transition
			main.flex-1.overflow-y-auto.-mt-32(v-if='is.mounted')
				router-view.flex.flex-col.w-full
</template>

<script>
	import { SlideYUpTransition } from 'vue2-transitions'
	import { TADANavbar } from '@/components'

	export default {
		name: 'MainApp',
		components: { SlideYUpTransition, TADANavbar },
		data() {
			return {
				is: {
					mounted: false,
				},
			}
		},
		mounted() {
			const self = this

			setTimeout(() => {
				self.is = {
					...self.is,
					mounted: true,
				}
			}, 500)
		},
	}
</script>
