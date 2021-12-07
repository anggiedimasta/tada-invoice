import { actions as actions_module } from './users/actions'
import { getters as getters_module } from './users/getters'
import { mutations as mutations_module } from './users/mutations'
import { state as state_module } from './users/state'

export default {
	actions: actions_module,
	getters: getters_module,
	mutations: mutations_module,
	state: state_module,
}
