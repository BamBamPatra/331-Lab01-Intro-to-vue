const productDisplay = {

    template:
        /*html*/
    `
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" :class="{outofstockImg: !inStock}">
                </div>
            </div>
        </div>

        <div class="product-info">
            <a :href="link"><h1>{{title}}</h1></a>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
            <p v-else>Out of Stock</p>

            <p v-if="onSale">On Sale</p>
            <p v-else>Out of Sale</p>

            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>

            <p>Shipping: {{shipping}}</p>

            <product-details :details></product-details>

            <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)" 
                class="color-circle" :style="{backgroundColor: variant.color}">
            </div>
           
            <p><span v-for="size in sizes">{{size}}</span></p>

            <div>
                <button class="button" :disabled='!inStock' @click="addToCart" :class="{disabledButton: !inStock}">Add To Cart</button>
            </div>

            <review-list :reviews="reviews"></review-list>
            <review-form @review-subbited="addReview"></review-form>
            
            <button class="button" @click="updateStock">In Stock</button>

            <button class="button" @click="deleteCart">Delete Cart</button>

        </div>
    ` ,
    props: {
        premium: Boolean ,
        details: Array
    } ,
    setup(props , {emit}){

        const product = ref('Boots')
        const brand = ref('SE 331')
        const description = ref('Size 36-45')
        const inventory = ref(9)
        const onSale = ref(true)
        const link = ref('https://www.camt.cmu.ac.th/index.php/th/')
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
        const shipping = computed(() => {
            if(props.premium){
                return 'Free'
            } else {
                return 30
            }
        })
        const reviews = ref([])

        function addToCart(){
           emit('add-to-cart' , variants.value[selectedVariant.value].id)
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
        function deleteCart() {
            emit('delete-cart' , variants.value[selectedVariant.value].id)
        }
        function addReview(review){
            reviews.value.push(review)
        }

        return {
            title ,
            description ,
            image ,
            link , 
            inStock ,
            inventory ,
            onSale ,
            variants ,
            sizes ,
            cart ,
            addToCart ,
            updateImage ,
            updateStock ,
            updateVariant ,
            shipping ,
            deleteCart ,
            addReview
        }
    }
    
}