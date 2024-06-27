const { createApp , ref , computed} = Vue 

const app = createApp ({
    setup(){

        const cart = ref(0)
        const premium = ref(true)
        const details = ref([
            "50% cotton", 
            "30% wool", 
            "20% polyester"
        ])

        function updateCart(){
            cart.value +=1
        }

        return {
            cart ,
            premium ,
            details ,
            updateCart
        }
    }
}) 
app.component('product-display' , productDisplay)
    .component('product-details' , productdetails)
    .mount('#app')