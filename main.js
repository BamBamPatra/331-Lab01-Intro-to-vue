const { createApp , ref } = Vue 

createApp ({
    setup(){

        const product = ref('Boots')
        const description = ref('Size 36-45')
        const image = ref('./assets/images/socks_green.jpg')
        return {
            product , 
            description ,
            image
        }
    }
}) .mount('#app')