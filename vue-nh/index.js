var app = new Vue({
	el: '#app',
	methods: {
		jump () {
			this.arr.push({id: "hjehe"});
		}
	},
	data: {
		message: 'hello Vue!',
		title: 'Hello',
		check: true,
		arr: [
			{ id: "lock"},
			{ id: "jeck" },
			{ id: 'ktgh' }
		]
	}
});