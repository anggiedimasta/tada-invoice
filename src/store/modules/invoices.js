import { actions as actions_module } from './invoices/actions'
import { getters as getters_module } from './invoices/getters'
import { mutations as mutations_module } from './invoices/mutations'
import { state as state_module } from './invoices/state'

export default {
	actions: actions_module,
	getters: getters_module,
	mutations: mutations_module,
	state: state_module,
}
