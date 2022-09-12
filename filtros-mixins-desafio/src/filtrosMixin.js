export default {
    computed: {
        filtroTrocaMixin() {
          let newArray = this.infoMixin.replaceAll(" ", ",");
          return newArray;
        },
        filtroContaMixin() {
        
            const arr =  this.infoMixin.split(" ");
            let newArray = "";
            arr.forEach((element) => {
              newArray += element + " (" + element.length + ") ";
            });
    
            return newArray;
    
        },
      },
}