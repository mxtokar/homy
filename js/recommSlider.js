let positionRecomm = 0;
const slidesToShowRecomm = 4;
const slidesToShowRecommTablet = 3;
const slidesToShowRecommPhone = 1;

const slideToScrollRecomm = 1;
const trackRecomm = document.querySelector(".recomm__wrapper_item-track");

const btnPrevRecomm = document.querySelector(".recomm-button_prev");
const btnPrevRecommTabletLandscape = document.querySelector(".btnPrev-recomm_tablet-landscape");
const btnPrevRecommTablet = document.querySelector(".btnPrev-recomm_tablet");
const btnPrevRecommPhone = document.querySelector(".btnPrev-recomm_phone");

const btnNextRecomm = document.querySelector(".recomm-button_next");
const btnNextRecommTabletLandscape = document.querySelector(".btnNext-recomm_tablet-landscape");
const btnNextRecommTablet = document.querySelector(".btnNext-recomm_tablet");
const btnNextRecommPhone = document.querySelector(".btnNext-recomm_phone");

const itemWidthRecomm = 27;
const itemWidthRecommTabletLandscape = 25;
const itemWidthRecommTablet = 33;
const itemWidthRecommPhone = 100;

const movepositionRecomm = slideToScrollRecomm * itemWidthRecomm;
const movepositionRecommTabletLandscape = slideToScrollRecomm * itemWidthRecommTabletLandscape;
const movepositionRecommTablet = slideToScrollRecomm * itemWidthRecommTablet;
const movepositionRecommPhone = slideToScrollRecomm * itemWidthRecommPhone;


//disable buttons
let recommItems = []

for(let i=0; i<ITEMS.length; i++){
  if(ITEMS[i].type === "recommended"){
    recommItems.push(ITEMS[i])
  }
}

const itemsCountRecomm = recommItems.length;

const recommArrowDisable = document.querySelectorAll(".recomm__wrapper_arrow")
if(recommItems.length <= slidesToShowRecomm){
   recommArrowDisable[0].style.visibility  = "hidden"
   recommArrowDisable[1].style.visibility  = "hidden"
}


const recommArrowDisableTabletLandscape = document.querySelectorAll(".recomm__header_arrow-box")
if(recommItems.length <= slidesToShowRecomm){
  recommArrowDisableTabletLandscape[0].visibility  = "hidden"
  recommArrowDisableTabletLandscape[1].visibility  = "hidden"
}

const recommArrowDisableTablet = document.querySelectorAll(".recomm__header_arrow-box_tablet")
if(recommItems.length <= slidesToShowRecommTablet){
  recommArrowDisableTablet[0].visibility  = "hidden"
  recommArrowDisableTablet[1].visibility  = "hidden"
}

const recommArrowDisablePhone = document.querySelectorAll(".recomm__header_arrow-box_phone")
if(recommItems.length <= slidesToShowRecommPhone){
  recommArrowDisablePhone[0].visibility  = "hidden"
  recommArrowDisablePhone[1].visibility  = "hidden"
}



btnNextRecomm.addEventListener('click', () =>{
  const itemsRecommLeft  = itemsCountRecomm - (Math.abs(positionRecomm) + slidesToShowRecomm * itemWidthRecomm) / itemWidthRecomm;

  positionRecomm -= itemsRecommLeft >= slideToScrollRecomm ? movepositionRecomm : itemsRecommLeft * itemWidthRecomm;

  setpositionRecomm();
  checkBtnsRecomm();
})

btnNextRecommTabletLandscape.addEventListener('click', () =>{
  const itemsRecommLeft  = itemsCountRecomm - (Math.abs(positionRecomm) + slidesToShowRecomm * itemWidthRecommTabletLandscape) / itemWidthRecommTabletLandscape;

  positionRecomm -= itemsRecommLeft >= slideToScrollRecomm ? movepositionRecommTabletLandscape : itemsRecommLeft * itemWidthRecommTabletLandscape;

  setpositionRecomm();
  checkBtnsRecommTabletLandscape();
})

btnNextRecommTablet.addEventListener('click', () =>{
  const itemsRecommLeft  = itemsCountRecomm - (Math.abs(positionRecomm) + slidesToShowRecommTablet * itemWidthRecommTablet) / itemWidthRecommTablet;

  positionRecomm -= itemsRecommLeft >= slideToScrollRecomm ? movepositionRecommTablet : itemsRecommLeft * itemWidthRecommTablet;

  setpositionRecomm();
  checkBtnsRecommTablet();
})

btnNextRecommPhone.addEventListener('click', () =>{
  const itemsRecommLeft  = itemsCountRecomm - (Math.abs(positionRecomm) + slidesToShowRecommPhone * itemWidthRecommPhone) / itemWidthRecommPhone;

  positionRecomm -= itemsRecommLeft >= slideToScrollRecomm ? movepositionRecommPhone : itemsRecommLeft * itemWidthRecommPhone;

  setpositionRecomm();
  checkBtnsRecommPhone();
})

btnPrevRecomm.addEventListener('click', () =>{
  const itemsRecommLeft  =  Math.abs(positionRecomm) / itemWidthRecomm;

  positionRecomm += itemsRecommLeft >= slideToScrollRecomm ? movepositionRecomm : itemsRecommLeft * itemWidthRecomm;

  setpositionRecomm();
  checkBtnsRecomm();
})

btnPrevRecommTabletLandscape.addEventListener('click', () =>{
  const itemsRecommLeft  =  Math.abs(positionRecomm) / itemWidthRecommTabletLandscape;

  positionRecomm += itemsRecommLeft >= slideToScrollRecomm ? movepositionRecommTabletLandscape : itemsRecommLeft * itemWidthRecommTabletLandscape;

  setpositionRecomm();
  checkBtnsRecommTabletLandscape();
})

btnPrevRecommTablet.addEventListener('click', () =>{
  const itemsRecommLeft  =  Math.abs(positionRecomm) / itemWidthRecommTablet;

  positionRecomm += itemsRecommLeft >= slideToScrollRecomm ? movepositionRecommTablet : itemsRecommLeft * itemWidthRecommTablet;

  setpositionRecomm();
  checkBtnsRecommTablet();
})

btnPrevRecommPhone.addEventListener('click', () =>{
  const itemsRecommLeft  =  Math.abs(positionRecomm) / itemWidthRecommPhone;

  positionRecomm += itemsRecommLeft >= slideToScrollRecomm ? movepositionRecommPhone : itemsRecommLeft * itemWidthRecommPhone;

  setpositionRecomm();
  checkBtnsRecommPhone();
})

const setpositionRecomm = () => {
  trackRecomm.style.transform = `translateX(${positionRecomm}%)`;
}

const checkBtnsRecomm = () => {
  btnPrevRecomm.disabled = positionRecomm === 0;
  btnNextRecomm.disabled = positionRecomm <= -(itemsCountRecomm - slidesToShowRecomm) * itemWidthRecomm;
}

const checkBtnsRecommTabletLandscape = () => {
  btnPrevRecomm.disabled = positionRecomm === 0;
  btnNextRecomm.disabled = positionRecomm <= -(itemsCountRecomm - slidesToShowRecomm) * itemWidthRecommTabletLandscape;
}

const checkBtnsRecommTablet = () => {
  btnPrevRecomm.disabled = positionRecomm === 0;
  btnNextRecomm.disabled = positionRecomm <= -(itemsCountRecomm - slidesToShowRecommTablet) * itemWidthRecommTablet;
}

const checkBtnsRecommPhone = () => {
  btnPrevRecomm.disabled = positionRecomm === 0;
  btnNextRecomm.disabled = positionRecomm <= -(itemsCountRecomm - slidesToShowRecommPhone) * itemWidthRecommPhone;
}

checkBtnsRecomm();