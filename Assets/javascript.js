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

                let url = new URL(`${window.location.origin}/product.html`); 
                url.searchParams.append('p', `${product.attrs.handle}`); 

                let productContainer = document.createElement("a");
                productContainer.setAttribute('id', `product_${product.attrs.id}`);
                productContainer.setAttribute("href", `${url}`);

                let title = document.createElement("h2");
                title.append(`${product.attrs.title}`);

                let img = document.createElement("img");
                img.className = "product-images";
                img.setAttribute("src", `${product.images[0].src}`);

                let price = document.createElement("p");
                price.className = `productPrice-${product.id}`;
                price.append(`${product.attrs.variants[0].price}`);

                productContainer.append(title, img, price);

                let productElement = document.getElementById("products");
                productElement.append(productContainer);

              })
            }  

            // client.checkout.create().then((checkout) => {
            //     // Do something with the checkout
            //     console.log(checkout);
            //   });

        }
      })();


      
      // var url = new URL("http://127.0.0.1:5500/index.html"); 
        
      //     url.searchParams.set('param_1', 'val_1'); 
      //     console.log(url.searchParams.set('param_1', 'val_1'))
      

      // var up = document.getElementById('GFG_UP'); 
      // var url = new URL("http://127.0.0.1:5501/index2.html"); 
      // up.innerHTML = url; 
      // var down = document.getElementById('GFG_DOWN'); 
        
      // function GFG_Fun() { 
      //     url.searchParams.append('param_1', 'val_1'); 
      //     down.innerHTML = url; 
      // } 











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