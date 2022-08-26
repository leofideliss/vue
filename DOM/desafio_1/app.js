new Vue({
    el:"#desafio",
    data:{
        name:"Leonardo",
        age:"23",
        linkImg:"https://image.shutterstock.com/image-illustration/explosion-pink-blue-powder-freeze-600w-1077184466.jpg"
    },
    methods: {
        random(){
            return Math.random()
        }
    },
})