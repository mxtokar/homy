let basketElementsCount = BASKET.elements
let basketPriceCount = BASKET.price

let basketElements = document.createElement("a")
basketElements.classList.add("header__info_purchase_basket-text_link")
basketElements.href = "#"
basketElements.innerHTML = basketElementsCount
document.getElementById("header-basket").appendChild(basketElements)

let basketPrice = document.createElement("span")
basketPrice.innerHTML = (" / " + basketPriceCount) 
document.getElementById("header-basket").appendChild(basketPrice)





const buttonNovetlyAdd = document.querySelectorAll(".novetly__wrapper_item_descr-button_orange")
const buttonRecommAdd = document.querySelectorAll(".recomm__wrapper_item_descr-button_orange")
const buttonSalesAdd = document.querySelectorAll(".sales__wrapper_item_descr-button_orange")


let cartFirst = [].forEach.call(buttonNovetlyAdd,function(e){e.addEventListener('click', e => {
  plusElement()
  plusPrice()
}, false)})

let cartSeond = [].forEach.call(buttonRecommAdd,function(e){e.addEventListener('click', e => {
  plusElement()
  plusPrice()
}, false)})

let cartThird = [].forEach.call(buttonSalesAdd,function(e){e.addEventListener('click', e => {
  plusElement()
  plusPrice()
}, false)})

function plusElement(){
  basketElementsCount++
  
  basketElements.innerHTML = basketElementsCount
}

function plusPrice(){
  basketPriceCount++


  basketPrice.innerHTML = (" / " + basketPriceCount) 

}



