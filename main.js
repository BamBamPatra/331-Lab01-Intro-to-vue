const { createApp , ref } = Vue 

createApp ({
    setup(){

        const product = ref('Boots')
        const description = ref('Size 36-45')
        const image = ref('./assets/image/sock_green.jpg')
        return {
            product , 
            description ,
            image
        }
    }
}) .mount('#app')