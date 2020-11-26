//do something

import Client from 'shopify-buy';


const shopClient = Client.buildClient({
    domain: 'nicebreads.myshopify.com',
    storefrontAccessToken: '6d8f043c8faac22a22c3505191ee5ba5'
})
shopClient.fetchAllProducts()
    .then((products) => {
        buildProducts(products)
    })
    .catch(() => {
        console.log('Request failed');
    })
let buildProducts = (products) => {
    products.forEach((product) => {
        let productContainer = $('<div/>').attr('id', `product_${product.attrs.product_id}`)
        let title = `<h2>${product.attrs.title}</h2>`
        let img = `<img src="${product.images[0].src}/">`
        let price = `<p class="productPrice-${product.id}">${product.attrs.variants[0].formatted_price}</p>`
        productContainer.append(title, img, price)
        $('#products').append(productContainer)
    })
}  