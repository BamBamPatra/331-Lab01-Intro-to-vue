const { createApp , ref } = Vue 

createApp ({
    setup(){

        const product = ref('Boots')
        const description = ref('Size 36-45')
        return {
            product , 
            description
        }
    }
}) .mount('#app')