import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter("conta", (value) => {
	const arr = value.split(' ')
	let newArray = ''
	arr.forEach(element => {
		newArray += element + " (" + element.length + ") "
	});

	return newArray
	
})
new Vue({
	render: h => h(App),
}).$mount('#app')
