const { createApp , ref } = Vue 

createApp ({
    setup(){

        const product = ref('Boots')
        const description = ref('Size 36-45')
        const image = ref('./assets/images/socks_green.jpg')
        const inStock = ref(true)
        const inventory = ref(9)
        const onSale = ref(true)
        const link = ref('https://www.camt.cmu.ac.th/index.php/th/')
       
        return {
            product , 
            description ,
            image ,
            link , 
            inStock ,
            inventory ,
            onSale 
        }
    }
}) .mount('#app')