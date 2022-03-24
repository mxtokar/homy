let arrRecomm = []

for(let i=0; i<ITEMS.length; i++){
  if(ITEMS[i].type === "recommended"){
    arrRecomm.push(ITEMS[i])
  }
}

for(let i=0; i<arrRecomm.length; i++){
  arrRecomm[i].uahPrice = arrRecomm[i].price 
  arrRecomm[i].uahOldPrice = arrRecomm[i].oldPrice 
  if(arrRecomm[i].currency === "USD")
  {
    arrRecomm[i].uahPrice = arrRecomm[i].price * CURRENCY_EXCHANGE.USD
    arrRecomm[i].uahOldPrice = arrRecomm[i].oldPrice * CURRENCY_EXCHANGE.USD
  }
  else if(arrRecomm[i].currency === "RUB")
  {
    arrRecomm[i].uahPrice = arrRecomm[i].price * CURRENCY_EXCHANGE.RUB
    arrRecomm[i].uahOldPrice = arrRecomm[i].oldPrice * CURRENCY_EXCHANGE.RUB
  }
  else if(arrRecomm[i].currency === "EUR")
  {
    arrRecomm[i].uahPrice = arrRecomm[i].price * CURRENCY_EXCHANGE.EUR
    arrRecomm[i].uahOldPrice = arrRecomm[i].oldPrice * CURRENCY_EXCHANGE.EUR
  }
}


let sortedRecomm = arrRecomm.sort(function(a,b){
  if(a.price === undefined){
    a.price = 0
  }

  if(b.price === undefined){
    b.price = 0
  }

  return new Date(a.uahPrice) - new Date(b.uahPrice)
}) 

function creteRecommItem(){
  for(i=0; i<sortedRecomm.length; i++){
    let recommImgID = "recomm-img-" + (i + 1);
    let recommDescrID = "recomm-descr-" + (i + 1);
    let recommPriceID = "recomm_price-title-" + (i + 1);
    let recommNewPriceID = "recomm_price-new-" + (i + 1);
    let recommOldPriceID = "recomm_price-old-" + (i + 1);
    
    if(sortedRecomm[i].img !== "" && sortedRecomm[i].img !== undefined){
      let recommImg = document.createElement("img")
      recommImg.src = sortedRecomm[i].img
      recommImg.alt = "recommy-img"
      document.getElementById(recommImgID).appendChild(recommImg)
    }
    else{
      let recommImg = document.createElement("div")
      recommImg.classList.add("recomm__wrapper_item_img")
      recommImg.innerHTML = "фото временно <br> недоступно"
      document.getElementById(recommImgID).appendChild(recommImg)
    }
  
    let recommDescr = document.createElement("a")
    recommDescr.href = "#"
    recommDescr.innerHTML = sortedRecomm[i].description
    document.getElementById(recommDescrID).appendChild(recommDescr)
  
    if(sortedRecomm[i].price !== 0){
      let recommPriceTitle = document.createElement("span")
      recommPriceTitle.classList.add("recomm__wrapper_item_descr-price_title")
      recommPriceTitle.innerHTML = "Цена: "
      document.getElementById(recommPriceID).appendChild(recommPriceTitle)
  
      let recommPriceNew = document.createElement("span")
      recommPriceNew.innerHTML = (sortedRecomm[i].price + " ")
      document.getElementById(recommNewPriceID).appendChild(recommPriceNew)
    
      let recommPriceCurrencyNewRec = document.createElement("span")
      recommPriceCurrencyNewRec.innerHTML = sortedRecomm[i].currency
      document.getElementById(recommNewPriceID).appendChild(recommPriceCurrencyNewRec)
    }
    else{
      let recommPriceNew = document.createElement("span")
      recommPriceNew.innerHTML = "нет в наличии" 
      recommPriceNew.style.color = "#606060"
      document.getElementById(recommNewPriceID).appendChild(recommPriceNew)

      for(let j=0; j<sortedRecomm.length; j++){
        recommButtonID = "recomm_button-" + (j+1)

        if((sortedRecomm[i].price == 0)){
          let noPrice = i

          if(j === noPrice){
            let recommButtonDisabled = document.getElementById(recommButtonID)
            recommButtonDisabled.style.background = "#808080"
            recommButtonDisabled.style.borderBottom = "3px solid #606060"
            recommButtonDisabled.style.textDecoration = "line-through"
            recommButtonDisabled.style.cursor = "not-allowed"
          }
        } 
      }
    }

    if(sortedRecomm[i].oldPrice !== undefined && sortedRecomm[i].price !== 0){
      let recommPriceOld = document.createElement("span")
      recommPriceOld.innerHTML = sortedRecomm[i].oldPrice
      document.getElementById(recommOldPriceID).appendChild(recommPriceOld)

      let recommPriceCurrencyOldRec = document.createElement("span")
      recommPriceCurrencyOldRec.innerHTML = sortedRecomm[i].currency
      document.getElementById(recommOldPriceID).appendChild(recommPriceCurrencyOldRec)
    }
  }
}

creteRecommItem()




