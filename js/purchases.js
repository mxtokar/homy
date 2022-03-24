function cretePurchasesItem(){
  function severalRandom(min, max, num) {
    let i, arr = [], res = [];
    for (i = min; i <= max; i++ ) arr.push(i);
    for (i = 0; i < num; i++) res.push(arr.splice(Math.floor(Math.random() * (arr.length)), 1)[0])
    return res;
  }
  let randomArr = severalRandom(1, (BUYING_RIGHT_NOW.length - 1), 4)

  for(i=0; i < BUYING_RIGHT_NOW.length; i++){
    let purchasesImgID = "purchases-img-" + (i + 1);
    let purchasesTitleID = "purchases-title-" + (i + 1);
    let purchaseProductID = "purchases__products-box-" + (i + 1)

    if(BUYING_RIGHT_NOW[i].img !== "" && BUYING_RIGHT_NOW[i].img !== undefined){
      let purchasesImg = document.createElement("img")
      purchasesImg.classList.add("purchases__products_img")
      purchasesImg.src = BUYING_RIGHT_NOW[i].img
      purchasesImg.alt = "novetly-img"
      document.getElementById(purchasesImgID).appendChild(purchasesImg)
    }
    else{
      let purchasesImg = document.createElement("div")
      purchasesImg.classList.add("novetly__wrapper_item_img")
      purchasesImg.innerHTML = "фото временно <br> недоступно"
      document.getElementById(purchasesImgID).appendChild(purchasesImg)
    }

    let purchasesTitle = document.createElement("a")
    purchasesTitle.classList.add("purchases__products_img_descr")
    purchasesTitle.innerHTML = BUYING_RIGHT_NOW[i].title
    purchasesTitle.href = "#"
    document.getElementById(purchasesTitleID).appendChild(purchasesTitle)

    let productBox = document.getElementById(purchaseProductID)

    if(randomArr[0] === i)
    {
      productBox.style.display ="flex"
    }
    if(randomArr[1] === i)
    {
      productBox.style.display ="flex"
    }
    if(randomArr[2] === i)
    {
      productBox.style.display ="flex"
    }

    const iCounter = i;
    purchaseCheckWidth()
    function purchaseCheckWidth() {
      var w = window.innerWidth;
      if (w > 980) {
        if(randomArr[3] === iCounter)
        {
          productBox.style.display ="flex"
        }
      }
      else{
        if(randomArr[3] === iCounter)
        {
          productBox.style.display ="none"
        }
      }
    }
    window.addEventListener('resize', function() {
      purchaseCheckWidth();
    });
  }
}

cretePurchasesItem()


