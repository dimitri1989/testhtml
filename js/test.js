/*import{
    womenclothes
} from '../js/modules.js'*/

var products = ["all products","men's clothing","jewelery","electronics","women's clothing"];
axios.get("https://fakestoreapi.com/products").then(function(respons){
    
const sextionNewsletter = document.querySelector(".sextion-newsletter");
const container = document.createElement("div");
container.classList.add("container");
sextionNewsletter.prepend(container)
var sectionProduqtsH2 = document.createElement("h2")
sectionProduqtsH2.classList.add("section-produqts__h2")
container.prepend(sectionProduqtsH2)
sectionProduqtsH2.innerText="Or Subscribe To The Newsletter"
const row = document.createElement("div")
row.classList.add("row")
container.append(row)
const sextionNewsletterNewsletter = document.createElement("div");
sextionNewsletterNewsletter.classList.add("sextion-newsletter__newsletter")
sextionNewsletterNewsletter.classList.add("mb-5")
row.appendChild(sextionNewsletterNewsletter)
const rowTwo = document.createElement("div")
rowTwo.classList.add("row")
rowTwo.classList.add("flex-row")
rowTwo.classList.add("justify-content-between")
container.append(rowTwo)
const sectionNewsletterNames = document.createElement("div");
sectionNewsletterNames.classList.add("sextion-newsletter__names")
sectionNewsletterNames.classList.add("d-flex")
sectionNewsletterNames.classList.add("flex-wrap")
sectionNewsletterNames.classList.add("mb-3")
rowTwo.append(sectionNewsletterNames)


var products = ["all products","men's clothing","jewelery","electronics","women's clothing"];
products.forEach(function(list){
    var sectionNewsletterNamesText = document.createElement("div");//ვქმნით დივს 
    sectionNewsletterNamesText.classList.add("sextion-newsletter__names__text")//ვანიჭებთ კლასს
    sectionNewsletterNamesText.classList.add("mb-3")
    
    sectionNewsletterNamesText.setAttribute("id", list);//ვანიჭებთ ატრიბუტს id ს და სახელის list რამდენიც არის მასივში იმდენს ვქმნით და სახელს ვაწერთ მასივიდან ამოღებული სახელის
    sectionNewsletterNamesText.innerHTML=list;
    sectionNewsletterNamesText.addEventListener("click",function(it){
        var o = it.target.getAttribute("id")
        
        
        if(sectionNewsletterNamesText.previousElementSibling==null){
            sectionNewsletterNamesText.nextElementSibling.classList.remove("c")
            this.classList.add("c")
        }
        if(sectionNewsletterNamesText.nextElementSibling==null){
            sectionNewsletterNamesText.previousElementSibling.classList.remove("c")
            this.classList.add("c")
        }
        else{sectionNewsletterNamesText.previousElementSibling.classList.remove("c")
        sectionNewsletterNamesText.nextElementSibling.classList.remove("c")
            this.classList.add("c")}
            
        
    })
   
    sectionNewsletterNames.append(sectionNewsletterNamesText)
})


var buttonOne = document.createElement("div")
buttonOne.classList.add("divB")
buttonOne.innerHTML=`<button type="button" class="btn btn-primary d-flex btn-product bt3"><div class="btnss me-1"><img src="img/arow.png" alt=""></div><div class="fil">filter</div></button>
<div class="row mb-5">`

rowTwo.append(buttonOne)
const rowTree = document.createElement("div")
rowTree.classList.add("row")
rowTree.classList.add("mb-5")
container.append(rowTree)



function elements(user, name){//უსერი მოდის მასივები 
	let productsDiv = document.createElement("div");

	user.forEach(data2=> {
		if(data2.category == name || name == 'all products') {//Tთუ მასივების კატეგორია უდრის name ს ამ შემთხვევაში დაკლიკებით წამოღებულ სახელს ან ნამე უდრის ყველა პროდუქტს 
                const col = document.createElement("div")
                col.classList.add("col-lg-3")
                col.classList.add("col-md-6")
                
                const sectionNewsletterNamesItems=document.createElement("div")
                sectionNewsletterNamesItems.classList.add("section-newsletter__names__items")
                sectionNewsletterNamesItems.classList.add("position-relative")
                col.prepend(sectionNewsletterNamesItems)
                const imgSection = document.createElement("img")
                imgSection.src=data2.image
                sectionNewsletterNamesItems.prepend(imgSection)
                const namesTtemsTitle = document.createElement("h2")
                namesTtemsTitle.classList.add("names__items__title")
                namesTtemsTitle.innerHTML=data2.title
                imgSection.after(namesTtemsTitle)
                const namesitemscontent = document.createElement("div")
                namesitemscontent.classList.add("names__items__content")
                namesitemscontent.classList.add("d-flex")
                namesitemscontent.classList.add("justify-content-between")
                sectionNewsletterNamesItems.append(namesitemscontent)
                const namesItemsContentCategoria = document.createElement("div")
                namesItemsContentCategoria.classList.add("names__items__content__categoria")
                namesitemscontent.prepend(namesItemsContentCategoria)
                namesItemsContentCategoria.innerHTML=data2.category
                const namesItemsContentCostOld = document.createElement("div")
                namesItemsContentCostOld.classList.add("names__items__content__costOld")
                namesItemsContentCostOld.innerHTML="$" +  data2.price
                namesItemsContentCategoria.after(namesItemsContentCostOld)
            
				productsDiv.append(col);
                
		}
        

        
   });
   
	return productsDiv;
}

    var user = respons.data;
    var click = false;

	sectionNewsletterNames.addEventListener("click",function(item){//აქ ფილტრზე დაწკაპუნებიტ ვიღებთ მისი ელემენტების აიდს 
		let name = item.target.getAttribute("id"); //შესაბამისად ვიგებთ აიდის სახელს  და ვანიჭებთ name ს
		let getElements = elements(user, name);//აქ გადავცემს აიდის სახელს რომელიც კატეგორიას მოვარგებთ უსერი არის მაისვები და name არის იდ სახელები
		var z = rowTree.innerHTML = getElements.innerHTML;//აქ ვწერთ სად ჩაიწეროს მონაცემები
        click = true
        
        })
        if(click==false){//თუ კლიკი არაა მაშინ გამოიტანე ყველა
            let all = 'all products'
            let getElements = elements(user, all)
            rowTree.innerHTML = getElements.innerHTML;
        }
})




axios.get('https://fakestoreapi.com/products?limit=4').then(function(respons){



function elements(user, name){//უსერი მოდის მასივები 
	let productsDiv = document.createElement("div");

	user.forEach(data2=> {
		if(data2.category == name || name == 'all products') {//Tთუ მასივების კატეგორია უდრის name ს ამ შემთხვევაში დაკლიკებით წამოღებულ სახელს ან ნამე უდრის ყველა პროდუქტს 
                const col = document.createElement("div")
                col.classList.add("col-lg-3")
                col.classList.add("col-md-6")
                
                const sectionNewsletterNamesItems=document.createElement("div")
                sectionNewsletterNamesItems.classList.add("section-newsletter__names__items")
                sectionNewsletterNamesItems.classList.add("position-relative")
                col.prepend(sectionNewsletterNamesItems)
                const imgSection = document.createElement("img")
                imgSection.src=data2.image
                sectionNewsletterNamesItems.prepend(imgSection)
                const namesTtemsTitle = document.createElement("h2")
                namesTtemsTitle.classList.add("names__items__title")
                namesTtemsTitle.innerHTML=data2.title
                imgSection.after(namesTtemsTitle)
                const namesitemscontent = document.createElement("div")
                namesitemscontent.classList.add("names__items__content")
                namesitemscontent.classList.add("d-flex")
                namesitemscontent.classList.add("justify-content-between")
                sectionNewsletterNamesItems.append(namesitemscontent)
                const namesItemsContentCategoria = document.createElement("div")
                namesItemsContentCategoria.classList.add("names__items__content__categoria")
                namesitemscontent.prepend(namesItemsContentCategoria)
                namesItemsContentCategoria.innerHTML=data2.category
                const namesItemsContentCostOld = document.createElement("div")
                namesItemsContentCostOld.classList.add("names__items__content__costOld")
                namesItemsContentCostOld.innerHTML="$" +  data2.price
                namesItemsContentCategoria.after(namesItemsContentCostOld)
            
				productsDiv.append(col);
                
		}
        

        
   });
   
	return productsDiv;
}

var user = respons.data;
    const sectionNewsletterNames = document.createElement("div");
    const  newrow = document.querySelector(".newrow");
    const  newrow3 = document.querySelector(".newrow3");
    newrow.after(newrow3)
products.forEach(function(list){
    var sectionNewsletterNamesText = document.createElement("div");//ვქმნით დივს 
    sectionNewsletterNamesText.classList.add("sextion-newsletter__names__text")//ვანიჭებთ კლასს
    sectionNewsletterNamesText.classList.add("mb-3")
    
    sectionNewsletterNamesText.setAttribute("id", list);//ვანიჭებთ ატრიბუტს id ს და სახელის list რამდენიც არის მასივში იმდენს ვქმნით და სახელს ვაწერთ მასივიდან ამოღებული სახელის
    sectionNewsletterNamesText.innerHTML=list;
    sectionNewsletterNamesText.addEventListener("click",function(it){
        var o = it.target.getAttribute("id")
        
        
        if(sectionNewsletterNamesText.previousElementSibling==null){
            sectionNewsletterNamesText.nextElementSibling.classList.remove("c")
            this.classList.add("c")
        }
        if(sectionNewsletterNamesText.nextElementSibling==null){
            sectionNewsletterNamesText.previousElementSibling.classList.remove("c")
            this.classList.add("c")
        }
        else{sectionNewsletterNamesText.previousElementSibling.classList.remove("c")
        sectionNewsletterNamesText.nextElementSibling.classList.remove("c")
            this.classList.add("c")
        }
            
        
    })
    sectionNewsletterNames.append(sectionNewsletterNamesText)

    
})
newrow.append(sectionNewsletterNames)
sectionNewsletterNames.classList.add("sextion-newsletter__names")
sectionNewsletterNames.classList.add("d-flex")
sectionNewsletterNames.classList.add("flex-wrap") 
sectionNewsletterNames.classList.add("mb-3")
var buttonOne = document.createElement("div")
buttonOne.classList.add("divB")
buttonOne.innerHTML=`<button type="button" class="btn btn-primary d-flex btn-product bt3"><div class="btnss me-1"><img src="img/arow.png" alt=""></div><div class="fil">filter</div></button>
<div class="row mb-5">`
newrow.append(buttonOne)
const rowTree = document.createElement("div")
rowTree.classList.add("row")
rowTree.classList.add("mb-5")
//console.log(newrow);
var click2 = false
sectionNewsletterNames.addEventListener("click",function(item){//აქ ფილტრზე დაწკაპუნებიტ ვიღებთ მისი ელემენტების აიდს 
    let name = item.target.getAttribute("id"); //შესაბამისად ვიგებთ აიდის სახელს  და ვანიჭებთ name ს
    let getElements = elements(user, name);//აქ გადავცემს აიდის სახელს რომელიც კატეგორიას მოვარგებთ უსერი არის მაისვები და name არის იდ სახელები
    var z = newrow3.innerHTML = getElements.innerHTML;//აქ ვწერთ სად ჩაიწეროს მონაცემები
    click2 = true
    //console.log(z);
    
    
    })
    if(click2==false){//თუ კლიკი არაა მაშინ გამოიტანე ყველა
        let all = 'all products'
        let getElements = elements(user, all)
        newrow3.innerHTML = getElements.innerHTML;
        
    }





})
