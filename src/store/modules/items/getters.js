const getters = {
	getItemPriceById: (state) => (_id) => {
		const itm = state.items.data.find((item) => item._id === _id)

		return itm ? itm.price : 0
	},
	items(state) {
		return state.items
	},
}

export { getters }
