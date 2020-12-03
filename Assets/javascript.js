//do something

// import Client from '../node_modules/shopify-buy';


/*<![CDATA[*/
    (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }
        function loadScript() {
          var script = document.createElement('script');
          script.async = true;
          script.src = scriptURL;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
          script.onload = ShopifyBuyInit;
        }
        function ShopifyBuyInit() {
          var client = ShopifyBuy.buildClient({
            domain: 'nicebreads.myshopify.com',
            storefrontAccessToken: '6d8f043c8faac22a22c3505191ee5ba5',
          });
          
          client.product.fetchAll().then((products) => {
            console.log(products);
            buildProducts(products)
          })
          .catch(() => {
            console.log('Request failed');
            })
            let buildProducts = (products) => {
                products.forEach((product) => {
                    let productContainer = $('<a/>').attr('id', `product_${product.attrs.id}`);
                    console.log(productContainer);
                    let title = `<h2>${product.attrs.title}</h2>`
                    console.log(title);
                    let img = `<img class="product-images" src="${product.images[0].src}/">`
                    console.log(img);
                    let price = `<p class="productPrice-${product.id}">${product.attrs.variants[0].price}</p>`
                    console.log(price);
                    productContainer.append(title, img, price)
                    $('#products').append(productContainer)
                })
            }  

            client.checkout.create().then((checkout) => {
                // Do something with the checkout
                console.log(checkout);
              });

        }
      })();


      
      /*]]>*/

// const shopClient = ShopifyBuy.buildClient({
//     domain: 'nicebreads.myshopify.com',
//     accessToken: '6d8f043c8faac22a22c3505191ee5ba5'
// })
// shopClient.fetchAllProducts()
//     .then((products) => {
//         buildProducts(products)
//     })
//     .catch(() => {
//         console.log('Request failed');
//     })
// let buildProducts = (products) => {
//     products.forEach((product) => {
//         let productContainer = $('<div/>').attr('id', `product_${product.attrs.product_id}`)
//         let title = `<h2>${product.attrs.title}</h2>`
//         let img = `<img src="${product.images[0].src}/">`
//         let price = `<p class="productPrice-${product.id}">${product.attrs.variants[0].formatted_price}</p>`
//         productContainer.append(title, img, price)
//         $('#products').append(productContainer)
//     })
// }  