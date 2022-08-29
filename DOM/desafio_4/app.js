new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		letraBranca: 'letra-branca',
		fundoAzul: 'fundo-azul',
		classe2: 'letra-branca',
		classe3: 'fundo-azul',
		aplicar: true,
		estilos: '',
		barra: 'barra',
		largura: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 2000);
		},
		iniciarProgresso() {
			setInterval(() => {
				this.largura == 300 ? 0 : this.largura += 20
			}, 1000);
		},
		alterar(event) {
			if (event.target.value == "true")
				this.aplicar = true
			if (event.target.value == "false")
				this.aplicar = false
		}
	},
	computed: {
		meuEstilo() {
			return {
				backgroundColor: 'red',
				width: this.largura + 'px'
			}
		}
	}
})
