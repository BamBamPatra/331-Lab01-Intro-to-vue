const { createApp , ref , computed} = Vue 

createApp ({
    setup(){

        const product = ref('Boots')
        const brand = ref('SE 331')
        const description = ref('Size 36-45')
        const inventory = ref(9)
        const onSale = ref(true)
        const link = ref('https://www.camt.cmu.ac.th/index.php/th/')
        const details = ref([
            '50% cotton' , 
            '30% wool' ,
            '20% polyester'
        ])
        const variants = ref([
            {id: 2234 , color: 'green' , image: './assets/images/socks_green.jpg' , quantity: 50 , onSale: true} ,
            {id: 2235 , color: 'blue' , image: './assets/images/socks_blue.jpg' , quantity: 0 , onSale: false}
        ])
        const selectedVariant =ref(0)
        const sizes = ref([
            'S  ' , 'M  ' , 'L  '
        ])
        const cart = ref(0)
        const title = computed(() => {
            const variant = variants.value[selectedVariant.value]
            return brand.value + ' ' + product.value + ' ' + (variant.onSale ? ' is on sale' : ' not on sale')
    
        })
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })
        function addToCart(){
            cart.value +=1
        }
        function updateImage(variantImage){
            image.value = variantImage
        }
        function updateStock(){
            inStock.value =! inStock.value
        }
        function updateVariant(index){
            selectedVariant.value = index;
        }

        return {
            title ,
            description ,
            image ,
            link , 
            inStock ,
            inventory ,
            onSale ,
            details ,
            variants ,
            sizes ,
            cart ,
            addToCart ,
            updateImage ,
            updateStock ,
            updateVariant
        }
    }
}) .mount('#app')