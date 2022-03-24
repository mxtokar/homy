function cretepromotionItem(){
  for(i=0; i < PROMOTIONS.length; i++){
    let promotionTitleID = "promotion-title-" + (i + 1);
    let promotionImgID = "promotion-img-" + (i + 1);
    let promotionDescrID = "promotion-descr-" + (i + 1);
    let promotionDaysID = "promotion-days-" + (i+1);
    let promotionHoursID = "promotion-hours-" + (i+1);
    let promotionMinutesID = "promotion-minutes-" + (i+1);
    let promotionDateBlockID = "promotion-date-block-" + (i+1)

    let promotionTitle = document.createElement("a")
    promotionTitle.classList.add("promotion__wrapper_item_title")
    promotionTitle.innerHTML = PROMOTIONS[i].title
    document.getElementById(promotionTitleID).appendChild(promotionTitle)

    if(PROMOTIONS[i].img !== "" && PROMOTIONS[i].img !== undefined){
    let promotionImg = document.createElement("img")
    promotionImg.classList.add("promotion__wrapper_item_img")
    promotionImg.src = PROMOTIONS[i].img
    promotionImg.alt = "promotion-photo"
    document.getElementById(promotionImgID).appendChild(promotionImg)
    }

    else{
      let promotionImg = document.createElement("div")
      promotionImg.classList.add("promotion__wrapper_item_img")
      promotionImg.innerHTML = "фото временно <br> недоступно"
      document.getElementById(promotionImgID).appendChild(promotionImg)
    }

    let promotionDescr = document.createElement("p")
    promotionDescr.classList.add("promotion__wrapper_item_descr-text")
    promotionDescr.innerHTML = PROMOTIONS[i].description
    document.getElementById(promotionDescrID).appendChild(promotionDescr)



    if(PROMOTIONS[i].time_action !== "" && PROMOTIONS[i].time_action !== undefined){
      let promotionsDate = PROMOTIONS[i].time_action;
      let promotionsTimeAction = promotionsDate.match(/\d{1,}/g);
      let promotionDays = promotionsTimeAction[0].toString()
      let promotionHours = promotionsTimeAction[1]
      let promotionMinutes = promotionsTimeAction[2]

      let promotionDaysFirst = document.createElement("span")
      promotionDaysFirst.classList.add("promotion__wrapper_item_term-box_numbers_first")
      if(promotionDays < 10){
        promotionDaysFirst.innerHTML = "0"
      }
      else{
        promotionDaysFirst.innerHTML = promotionDays[0]
      }
      document.getElementById(promotionDaysID).appendChild(promotionDaysFirst)

      let promotionDaysSecond = document.createElement("span")
      promotionDaysSecond.classList.add("promotion__wrapper_item_term-box_numbers_second")
      if(promotionDays < 10){
        promotionDaysSecond.innerHTML = promotionDays
      }
      else{
        promotionDaysSecond.innerHTML = promotionDays[1]
      }
      document.getElementById(promotionDaysID).appendChild(promotionDaysSecond)




      let promotionHoursFirst = document.createElement("span")
      promotionHoursFirst.classList.add("promotion__wrapper_item_term-box_numbers_first")
      if(promotionHours < 10){
        promotionHoursFirst.innerHTML = "0"
      }
      else{
        promotionHoursFirst.innerHTML = promotionHours[0]
      }
      document.getElementById(promotionHoursID).appendChild(promotionHoursFirst)

      let promotionHoursSecond = document.createElement("span")
      promotionHoursSecond.classList.add("promotion__wrapper_item_term-box_numbers_second")
      if(promotionHours < 10){
        promotionHoursSecond.innerHTML = promotionHours
      }
      else{
        promotionHoursSecond.innerHTML = promotionHours[1]
      }
      document.getElementById(promotionHoursID).appendChild(promotionHoursSecond)



      let promotionMinutesFirst = document.createElement("span")
      promotionMinutesFirst.classList.add("promotion__wrapper_item_term-box_numbers_first")
      if(promotionMinutes < 10){
        promotionMinutesFirst.innerHTML = "0"
      }
      else{
        promotionMinutesFirst.innerHTML = promotionMinutes[0]
      }
      document.getElementById(promotionMinutesID).appendChild(promotionMinutesFirst)

      let promotionMinutesSecond = document.createElement("span")
      promotionMinutesSecond.classList.add("promotion__wrapper_item_term-box_numbers_second")
      if(promotionMinutes < 10){
        promotionMinutesSecond.innerHTML = promotionMinutes
      }
      else{
        promotionMinutesSecond.innerHTML = promotionMinutes[1]
      }
      document.getElementById(promotionMinutesID).appendChild(promotionMinutesSecond)
    }
    else{
      document.getElementById(promotionDateBlockID).innerHTML = ""

      let promotionTermTitle = document.createElement("span")
      promotionTermTitle.classList.add("promotion__wrapper_item_term-title")
      promotionTermTitle.innerHTML = "Срок действия:"
      document.getElementById(promotionDateBlockID).appendChild(promotionTermTitle)

      let promotionTermSubtitle= document.createElement("div")
      promotionTermSubtitle.classList.add("promotion__wrapper_item_term-subtitle2")
      promotionTermSubtitle.innerHTML = "бессрочно"
      document.getElementById(promotionDateBlockID).appendChild(promotionTermSubtitle)
    }
  }
}

cretepromotionItem()


