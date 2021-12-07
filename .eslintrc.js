module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		mongo: true,
		node: true,
	},
	extends: [
		'airbnb-base/legacy',
		'prettier',
		'plugin:vue/vue3-recommended'
	],
	plugins: [
		'prettier',
		'vue'
	],
	parserOptions: {
		ecmaVersion: 2020,
		parser: 'babel-eslint',
		sourceType: 'module'
	},
	rules: {
		'camelcase': 'off',
		'func-names': 'off',
		'no-param-reassign': 'off',
		'no-process-exit': 'off',
		'no-restricted-globals': 'off',
		'no-underscore-dangle': ['error', { 'allow': ['_id', '__typename'] }],
		'no-unused-vars': ["warn", { "argsIgnorePattern": "^_" }],
		'prettier/prettier': 'error',
	}
}
