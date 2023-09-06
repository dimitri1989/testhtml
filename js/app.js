
axios.get('https://fakestoreapi.com/products?limit=6').then(function(respons){
    var user = respons.data;
    var row = document.querySelector(".ross");
    var itemsNumber1 = document.querySelector("#id1");
    var itemsNumber2 = document.querySelector("#id2");
    var number = 0
    user.forEach(function(users){
        
        var col = document.createElement("div");
        col.classList.add("col-lg-4")
        col.classList.add("col-md-6")
        col.classList.add("col-12")
        row.prepend(col)
        var latestProductsContent = document.createElement("div")
        latestProductsContent.classList.add("latest-products_content");
        col.prepend(latestProductsContent)
        var latestProductsContentBg = document.createElement("div");
        latestProductsContentBg.classList.add("latest-products_content__bg");
        latestProductsContentBg.classList.add("position-relative");
        latestProductsContent.prepend(latestProductsContentBg)

        //კალათა
        var list = document.createElement("div");
            list.classList.add("list");
            latestProductsContentBg.prepend(list)
        for(var i = 0; i<2;i++){
            if(i==0){
                var listCart2 = document.createElement("div");
                listCart2.classList.add("list__cart2");
                listCart2.classList.add("mb-2");
                list.prepend(listCart2)
                var listCartBg = document.createElement("div");
                listCartBg.classList.add("list__cart__bg2");
                listCart2.prepend(listCartBg)
                const imgCart = document.createElement("img")
                imgCart.src="img/products/Frame 4.svg"
                listCartBg.append(imgCart)
            }
            if(i==1){
                var listCart = document.createElement("div");
            listCart.classList.add("list__cart");
            listCart.classList.add("mb-3");
            list.prepend(listCart)
            var listCartBg = document.createElement("div");
            listCartBg.classList.add("list__cart__bg");
            listCart.prepend(listCartBg)
            const imgCart = document.createElement("img")
            imgCart.src="img/products/shopping-cart.png"
            listCartBg.append(imgCart)  
            }
            
        }
        
        var latestProductsCcontentImg = document.createElement("div");
        latestProductsCcontentImg.classList.add("latest-products_content__img");
        list.after(latestProductsCcontentImg);
        var imgProduct = document.createElement("img")
        imgProduct.src=users.image
        
        latestProductsCcontentImg.append(imgProduct)
        
        latestProductsContent.addEventListener("mousemove",function(show){
            listCart.style.display = "block";
            listCart2.style.display = "block";
            
        })
        latestProductsContent.addEventListener("mouseout",function(show){
            listCart.style.display = "none";
            listCart2.style.display = "none";
            
        })
        listCartBg.addEventListener("click",function(additems){
            number++
    
            itemsNumber2.innerHTML=number
            itemsNumber1.innerHTML=number
           
        })

        
    })

})