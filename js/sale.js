let arrSales = []

for(let i=0; i<ITEMS.length; i++){
  if(ITEMS[i].type === "sale"){
    arrSales.push(ITEMS[i])
  }
}

for(let i=0; i<arrSales.length; i++){
  arrSales[i].uahPrice = arrSales[i].price 
  arrSales[i].uahOldPrice = arrSales[i].oldPrice 
  if(arrSales[i].currency === "USD")
  {
    arrSales[i].uahPrice = arrSales[i].price * CURRENCY_EXCHANGE.USD
    arrSales[i].uahOldPrice = arrSales[i].oldPrice * CURRENCY_EXCHANGE.USD
  }
  else if(arrSales[i].currency === "RUB")
  {
    arrSales[i].uahPrice = arrSales[i].price * CURRENCY_EXCHANGE.RUB
    arrSales[i].uahOldPrice = arrSales[i].oldPrice * CURRENCY_EXCHANGE.RUB
  }
  else if(arrSales[i].currency === "EUR")
  {
    arrSales[i].uahPrice = arrSales[i].price * CURRENCY_EXCHANGE.EUR
    arrSales[i].uahOldPrice = arrSales[i].oldPrice * CURRENCY_EXCHANGE.EUR
  }
}

let sortedSales = arrSales.sort(function(a,b){
  if(a.price === undefined || a.oldPrice === undefined){
    a.price = 0
    a.oldPrice = 0

  }

  if(b.price === undefined || b.oldPrice === undefined){
    b.price = 0
    b.oldPrice = 0
  }

  return new Date(b.uahOldPrice - b.uahPrice) - new Date(a.uahOldPrice - a.uahPrice)
}) 

function creteSalesItem(){
  for(i=0; i<sortedSales.length; i++){
    let salesImgID = "sales-img-" + (i + 1);
    let salesDescrID = "sales-descr-" + (i + 1);
    let salesPriceID = "sales_price-title-" + (i + 1);
    let salesNewPriceID = "sales_price-new-" + (i + 1);
    let salesOldPriceID = "sales_price-old-" + (i + 1);
    
    if(sortedSales[i].img !== "" && sortedSales[i].img !== undefined){
      let salesImg = document.createElement("img")
      salesImg.src = sortedSales[i].img
      salesImg.alt = "sales-img"
      document.getElementById(salesImgID).appendChild(salesImg)
    }
    else{
      let salesImg = document.createElement("div")
      salesImg.classList.add("sales__wrapper_item_img")
      salesImg.innerHTML = "фото временно <br> недоступно"
      document.getElementById(salesImgID).appendChild(salesImg)
    }

    let salesDescr = document.createElement("a")
    salesDescr.href = "#"
    salesDescr.innerHTML = sortedSales[i].description
    document.getElementById(salesDescrID).appendChild(salesDescr)
  
    if(sortedSales[i].price !== 0){
      let salesPriceTitle = document.createElement("span")
      salesPriceTitle.classList.add("Sales__wrapper_item_descr-price_title")
      salesPriceTitle.innerHTML = "Цена: "
      document.getElementById(salesPriceID).appendChild(salesPriceTitle)
  
      let salesPriceNew = document.createElement("span")
      salesPriceNew.innerHTML = (sortedSales[i].price + " ")
      document.getElementById(salesNewPriceID).appendChild(salesPriceNew)
    
      let salesPriceCurrencyNewRec = document.createElement("span")
      salesPriceCurrencyNewRec.innerHTML = sortedSales[i].currency
      document.getElementById(salesNewPriceID).appendChild(salesPriceCurrencyNewRec)
    }
    else{
      let salesPriceNew = document.createElement("span")
      salesPriceNew.innerHTML = "нет в наличии" 
      salesPriceNew.style.color = "#606060"
      document.getElementById(salesNewPriceID).appendChild(salesPriceNew)

      for(let j=0; j<sortedSales.length; j++){
        salesButtonID = "sales_button-" + (j+1)

        if((sortedSales[i].price == 0)){
          let noPrice = i

          if(j === noPrice){
            let salesButtonDisabled = document.getElementById(salesButtonID)
            salesButtonDisabled.style.background = "#808080"
            salesButtonDisabled.style.borderBottom = "3px solid #606060"
            salesButtonDisabled.style.textDecoration = "line-through"
            salesButtonDisabled.style.cursor = "not-allowed"
          }
        } 
      }
    }

    if(sortedSales[i].oldPrice !== undefined && sortedSales[i].price !== 0){
      let salesPriceOld = document.createElement("span")
      salesPriceOld.innerHTML = sortedSales[i].oldPrice
      document.getElementById(salesOldPriceID).appendChild(salesPriceOld)

      let salesPriceCurrencyOldRec = document.createElement("span")
      salesPriceCurrencyOldRec.innerHTML = sortedSales[i].currency
      document.getElementById(salesOldPriceID).appendChild(salesPriceCurrencyOldRec)
    }
  }
}

creteSalesItem()




