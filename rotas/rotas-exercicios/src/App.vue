<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<menu-vue></menu-vue>
		<router-view/>
	</div>
</template>

<script>
	import MenuVue from './components/template/Menu.vue';
export default {
	components:{MenuVue}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
