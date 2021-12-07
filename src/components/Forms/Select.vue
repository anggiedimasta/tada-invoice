<template lang="pug">
	div(class='col-span-4')
		label(
			class='block text-sm font-medium text-gray-700 dark:text-gray-200'
			v-if='title'
		) {{ title }}
		model-list-select.mt-1(
			:list='options'
			:option-text='optionText'
			:option-value='optionValue'
			:placeholder='placeholder'
			v-model='local_value'
		)
</template>

<script>
	import { ModelListSelect } from 'vue-search-select'
	import 'vue-search-select/dist/VueSearchSelect.css'

	export default {
		name: 'FormSelect',
		components: {
			ModelListSelect,
		},
		props: {
			optionText: {
				default: 'name',
				required: false,
				type: String,
			},
			options: {
				default: () => [],
				required: true,
				type: Array,
			},
			optionValue: {
				default: '_id',
				required: false,
				type: String,
			},
			placeholder: {
				default: null,
				required: true,
				type: String,
			},
			title: {
				default: null,
				required: false,
				type: String,
			},
			value: {
				default: null,
				required: false,
				type: String,
			},
		},
		emits: ['on-select'],
		data() {
			return {
				local_value: null,
			}
		},
		watch: {
			value: {
				handler(value) {
					if (value !== this.local_value) {
						this.local_value = value
					}
				},
				immediate: true,
			},
			local_value: {
				handler(local_value) {
					if (local_value !== this.value) {
						this.$emit('on-select', local_value)
					}
				},
			},
		},
	}
</script>
