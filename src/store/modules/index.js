// Dynamically register all Vuex modules for convenience.
// Components are registered using the
// UPPERCASED version of their file name.

const modules = {}

// https://webpack.js.org/guides/dependency-management/#require-context
const requireModule = require.context(
	// Look for files in the current directory
	'.',
	// Do not look in subdirectories
	false,
	// Only include js files
	/\.js$/,
)

// For each matching file name...
requireModule.keys().forEach((fileName) => {
	// Don't register this file as a Vuex Module
	if (fileName === './index.js') return

	// Get the UPPERCASE version of the module name
	const moduleName = fileName.replace(/(\.\/|\.js)/g, '').toUpperCase()

	modules[moduleName] = {
		namespaced: true,
		...requireModule(fileName).default,
	}
})

export default modules
