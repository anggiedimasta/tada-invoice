import { actions as actions_module } from './items/actions'
import { getters as getters_module } from './items/getters'
import { mutations as mutations_module } from './items/mutations'
import { state as state_module } from './items/state'

export default {
	actions: actions_module,
	getters: getters_module,
	mutations: mutations_module,
	state: state_module,
}
