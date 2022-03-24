let arrNovetly = []

for(let i=0; i<ITEMS.length; i++){
  if(ITEMS[i].type === "new"){
    arrNovetly.push(ITEMS[i])
  }
}

for(let i=0; i<arrNovetly.length; i++){
  arrNovetly[i].uahPrice = arrNovetly[i].price 
  arrNovetly[i].uahOldPrice = arrNovetly[i].oldPrice 
  if(arrNovetly[i].currency === "USD")
  {
    arrNovetly[i].uahPrice = arrNovetly[i].price * CURRENCY_EXCHANGE.USD
    arrNovetly[i].uahOldPrice = arrNovetly[i].oldPrice * CURRENCY_EXCHANGE.USD
  }
  else if(arrNovetly[i].currency === "RUB")
  {
    arrNovetly[i].uahPrice = arrNovetly[i].price * CURRENCY_EXCHANGE.RUB
    arrNovetly[i].uahOldPrice = arrNovetly[i].oldPrice * CURRENCY_EXCHANGE.RUB
  }
  else if(arrNovetly[i].currency === "EUR")
  {
    arrNovetly[i].uahPrice = arrNovetly[i].price * CURRENCY_EXCHANGE.EUR
    arrNovetly[i].uahOldPrice = arrNovetly[i].oldPrice * CURRENCY_EXCHANGE.EUR
  }
}


let sortedNovetly = arrNovetly.sort(function(a,b){
  if(a.price === undefined){
    a.price = 0
  }

  if(b.price === undefined){
    b.price = 0
  }

  return new Date(b.date) - new Date(a.date)
}) 

function creteNovetlyItem(){
  for(i=0; i<sortedNovetly.length; i++){
    let novetlyImgID = "novetly-img-" + (i + 1);
    let novetlyDescrID = "novetly-descr-" + (i + 1);
    let novetlyPriceID = "novetly_price-title-" + (i + 1);
    let novetlyNewPriceID = "novetly_price-new-" + (i + 1);
    let novetlyOldPriceID = "novetly_price-old-" + (i + 1);
    
    if(sortedNovetly[i].img !== "" && sortedNovetly[i].img !== undefined){
      let novetlyImg = document.createElement("img")
      novetlyImg.src = sortedNovetly[i].img
      novetlyImg.alt = "novetly-img"
      document.getElementById(novetlyImgID).appendChild(novetlyImg)
    }
    else{
      let novetlyImg = document.createElement("div")
      novetlyImg.classList.add("novetly__wrapper_item_img")
      novetlyImg.innerHTML = "фото временно <br> недоступно"
      document.getElementById(novetlyImgID).appendChild(novetlyImg)
    }

  
    let novetlyDescr = document.createElement("a")
    novetlyDescr.href = "#"
    novetlyDescr.innerHTML = sortedNovetly[i].description
    document.getElementById(novetlyDescrID).appendChild(novetlyDescr)
  
    if(sortedNovetly[i].price !== 0){
      let novetlyPriceTitle = document.createElement("span")
      novetlyPriceTitle.classList.add("novetly__wrapper_item_descr-price_title")
      novetlyPriceTitle.innerHTML = "Цена: "
      document.getElementById(novetlyPriceID).appendChild(novetlyPriceTitle)
    
      let novetlyPriceNew = document.createElement("span")
      novetlyPriceNew.innerHTML = (sortedNovetly[i].price + " ")
      document.getElementById(novetlyNewPriceID).appendChild(novetlyPriceNew)
    
      let novetlyPriceCurrencyNew = document.createElement("span")
      novetlyPriceCurrencyNew.innerHTML = sortedNovetly[i].currency
      document.getElementById(novetlyNewPriceID).appendChild(novetlyPriceCurrencyNew)
    }
    else{
      let novetlyPriceNew = document.createElement("span")
      novetlyPriceNew.innerHTML = "нет в наличии" 
      novetlyPriceNew.style.color = "#606060"
      document.getElementById(novetlyNewPriceID).appendChild(novetlyPriceNew)

      for(let j=0; j<sortedNovetly.length; j++){
        novetlyButtonID = "novetly_button-" + (j+1)

        if((sortedNovetly[i].price == 0)){
          let noPrice = i

          if(j === noPrice){
            let novetlyButtonDisabled = document.getElementById(novetlyButtonID)
            novetlyButtonDisabled.style.background = "#808080"
            novetlyButtonDisabled.style.borderBottom = "3px solid #606060"
            novetlyButtonDisabled.style.textDecoration = "line-through"
            novetlyButtonDisabled.style.cursor = "not-allowed"
          }
        } 
      }
    }
  
    if(sortedNovetly[i].oldPrice !== undefined && sortedNovetly[i].price !== 0)
    {
      let novetlyPriceOld = document.createElement("span")
      novetlyPriceOld.innerHTML = sortedNovetly[i].oldPrice
      document.getElementById(novetlyOldPriceID).appendChild(novetlyPriceOld)

      let novetlyPriceCurrencyOld = document.createElement("span")
      novetlyPriceCurrencyOld.innerHTML = sortedNovetly[i].currency
      document.getElementById(novetlyOldPriceID).appendChild(novetlyPriceCurrencyOld)
    }
  }
}
creteNovetlyItem()




