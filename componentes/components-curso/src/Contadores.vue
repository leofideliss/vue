<template>
<div>
  <contador v-for="c in 5" :key="c" />
<button>?</button>
</div>
</template>

<script>
import Contador from "./Contador.vue";
export default {
    components:{
        contador:Contador
    }
}
</script>

<style>

</style>