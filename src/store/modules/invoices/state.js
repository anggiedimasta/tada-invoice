const state = {
	invoices: {
		data: [
			{
				_id: '61aef2c349de6b3828259fc3',
				code: 'AEZAKMI',
				currency: 'IDR',
				date: {
					created: 1638854619,
					paid: null,
				},
				discount: {
					currency: null,
					is_percentage: true,
					value: 25,
				},
				items: [
					{
						_id: '61af0d7c5f2fece32f5854e3',
						name: 'UI design',
						price: 480000,
						quantity: 10,
					},
					{
						_id: '61af0d88484e8ee7cdc15558',
						name: 'Illustration design set',
						price: 5000000,
						quantity: 1,
					},
				],
				tax: {
					currency: null,
					is_percentage: true,
					value: 10,
				},
				user: {
					_id: '61aef31abe3a6df9ac0bd31c',
					email: 'francois@gmail.com',
					name: 'Francois Hardy',
				},
				status: 'pending',
			},
			{
				_id: '61aef2d698448a9e02f5426b',
				code: 'LLADORT',
				currency: 'IDR',
				date: {
					created: 1638854942,
					paid: 1638855206,
				},
				discount: {
					currency: 'IDR',
					is_percentage: false,
					value: 249999,
				},
				items: [
					{
						_id: '61af0d92c121567afe4758e7',
						name: 'Birkin Bag SE',
						price: 1299900,
						quantity: 1,
					},
					{
						_id: '61af0d9d92f13703f645406d',
						name: 'Hi-Top Loafer',
						price: 2655000,
						quantity: 1,
					},
				],
				tax: {
					currency: null,
					is_percentage: true,
					value: 15,
				},
				user: {
					_id: '61aef31134c4ae1835f56ed8',
					email: 'jane@gmail.com',
					name: 'Jane Birkin',
				},
				status: 'completed',
			},
		],
		index: 0,
		per_page: 10,
		total_data: 2,
	},
}

export { state }
