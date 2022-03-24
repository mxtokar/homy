let positionNovetly = 0;
const slidesToShowNovetly = 4;
const slidesToShowNovetlyTablet = 3;
const slidesToShowNovetlyPhone = 1;

const slideToScrollNovetly = 1;
const trackNovetly = document.querySelector(".novetly__wrapper_item-track");

const btnPrevNovetly = document.querySelector(".novetly-button_prev");
const btnPrevNovetlyTabletLandscape = document.querySelector(".btnPrev-novetly_tablet-landscape");
const btnPrevNovetlyTablet = document.querySelector(".btnPrev-novetly_tablet");
const btnPrevNovetlyPhone = document.querySelector(".btnPrev-novetly_phone");

const btnNextNovetly = document.querySelector(".novetly-button_next");
const btnNextNovetlyTabletLandscape = document.querySelector(".btnNext-novetly_tablet-landscape");
const btnNextNovetlyTablet = document.querySelector(".btnNext-novetly_tablet");
const btnNextNovetlyPhone = document.querySelector(".btnNext-novetly_phone");

const itemWidthNovetly = 27;
const itemWidthNovetlyTabletLandscape = 25;
const itemWidthNovetlyTablet = 33;
const itemWidthNovetlyPhone = 100;

const movepositionNovetly = slideToScrollNovetly * itemWidthNovetly;
const movepositionNovetlyTabletLandscape = slideToScrollNovetly * itemWidthNovetlyTabletLandscape;
const movepositionNovetlyTablet = slideToScrollNovetly * itemWidthNovetlyTablet;
const movepositionNovetlyPhone = slideToScrollNovetly * itemWidthNovetlyPhone;


//disable buttons
let novetlyItems = []

for(let i=0; i<ITEMS.length; i++){
  if(ITEMS[i].type === "new"){
    novetlyItems.push(ITEMS[i])
  }
}

const itemsCountNovetly = novetlyItems.length;

const NovetlyArrowDisable = document.querySelectorAll(".novetly__wrapper_arrow")
if(novetlyItems.length <= slidesToShowNovetly){
   NovetlyArrowDisable[0].style.visibility  = "hidden"
   NovetlyArrowDisable[1].style.visibility  = "hidden"
}


const NovetlyArrowDisableTabletLandscape = document.querySelectorAll(".novetly__header_arrow-box")
if(novetlyItems.length <= slidesToShowNovetly){
  NovetlyArrowDisableTabletLandscape[0].style.visibility  = "hidden"
  NovetlyArrowDisableTabletLandscape[1].style.visibility  = "hidden"
}

const NovetlyArrowDisableTablet = document.querySelectorAll(".novetly__header_arrow-box_tablet")
if(novetlyItems.length <= slidesToShowNovetlyTablet){
  NovetlyArrowDisableTablet[0].style.visibility  = "hidden"
  NovetlyArrowDisableTablet[1].style.visibility  = "hidden"
}

const NovetlyArrowDisablePhone = document.querySelectorAll(".novetly__header_arrow-box_phone")
if(novetlyItems.length <= slidesToShowNovetlyPhone){
  NovetlyArrowDisablePhone[0].style.visibility  = "hidden"
  NovetlyArrowDisablePhone[1].style.visibility  = "hidden"
}



btnNextNovetly.addEventListener('click', () =>{
  const itemsNovetlyLeft  = itemsCountNovetly - (Math.abs(positionNovetly) + slidesToShowNovetly * itemWidthNovetly) / itemWidthNovetly;

  positionNovetly -= itemsNovetlyLeft >= slideToScrollNovetly ? movepositionNovetly : itemsNovetlyLeft * itemWidthNovetly;

  setpositionNovetly();
  checkBtnsNovetly();
})

btnNextNovetlyTabletLandscape.addEventListener('click', () =>{
  const itemsNovetlyLeft  = itemsCountNovetly - (Math.abs(positionNovetly) + slidesToShowNovetly * itemWidthNovetlyTabletLandscape) / itemWidthNovetlyTabletLandscape;

  positionNovetly -= itemsNovetlyLeft >= slideToScrollNovetly ? movepositionNovetlyTabletLandscape : itemsNovetlyLeft * itemWidthNovetlyTabletLandscape;

  setpositionNovetly();
  checkBtnsNovetlyTabletLandscape();
})

btnNextNovetlyTablet.addEventListener('click', () =>{
  const itemsNovetlyLeft  = itemsCountNovetly - (Math.abs(positionNovetly) + slidesToShowNovetlyTablet * itemWidthNovetlyTablet) / itemWidthNovetlyTablet;

  positionNovetly -= itemsNovetlyLeft >= slideToScrollNovetly ? movepositionNovetlyTablet : itemsNovetlyLeft * itemWidthNovetlyTablet;

  setpositionNovetly();
  checkBtnsNovetlyTablet();
})

btnNextNovetlyPhone.addEventListener('click', () =>{
  const itemsNovetlyLeft  = itemsCountNovetly - (Math.abs(positionNovetly) + slidesToShowNovetlyPhone * itemWidthNovetlyPhone) / itemWidthNovetlyPhone;

  positionNovetly -= itemsNovetlyLeft >= slideToScrollNovetly ? movepositionNovetlyPhone : itemsNovetlyLeft * itemWidthNovetlyPhone;

  setpositionNovetly();
  checkBtnsNovetlyPhone();
})

btnPrevNovetly.addEventListener('click', () =>{
  const itemsNovetlyLeft  =  Math.abs(positionNovetly) / itemWidthNovetly;

  positionNovetly += itemsNovetlyLeft >= slideToScrollNovetly ? movepositionNovetly : itemsNovetlyLeft * itemWidthNovetly;

  setpositionNovetly();
  checkBtnsNovetly();
})

btnPrevNovetlyTabletLandscape.addEventListener('click', () =>{
  const itemsNovetlyLeft  =  Math.abs(positionNovetly) / itemWidthNovetlyTabletLandscape;

  positionNovetly += itemsNovetlyLeft >= slideToScrollNovetly ? movepositionNovetlyTabletLandscape : itemsNovetlyLeft * itemWidthNovetlyTabletLandscape;

  setpositionNovetly();
  checkBtnsNovetlyTabletLandscape();
})

btnPrevNovetlyTablet.addEventListener('click', () =>{
  const itemsNovetlyLeft  =  Math.abs(positionNovetly) / itemWidthNovetlyTablet;

  positionNovetly += itemsNovetlyLeft >= slideToScrollNovetly ? movepositionNovetlyTablet : itemsNovetlyLeft * itemWidthNovetlyTablet;

  setpositionNovetly();
  checkBtnsNovetlyTablet();
})

btnPrevNovetlyPhone.addEventListener('click', () =>{
  const itemsNovetlyLeft  =  Math.abs(positionNovetly) / itemWidthNovetlyPhone;

  positionNovetly += itemsNovetlyLeft >= slideToScrollNovetly ? movepositionNovetlyPhone : itemsNovetlyLeft * itemWidthNovetlyPhone;

  setpositionNovetly();
  checkBtnsNovetlyPhone();
})

const setpositionNovetly = () => {
  trackNovetly.style.transform = `translateX(${positionNovetly}%)`;
}

const checkBtnsNovetly = () => {
  btnPrevNovetly.disabled = positionNovetly === 0;
  btnNextNovetly.disabled = positionNovetly <= -(itemsCountNovetly - slidesToShowNovetly) * itemWidthNovetly;
}

const checkBtnsNovetlyTabletLandscape = () => {
  btnPrevNovetly.disabled = positionNovetly === 0;
  btnNextNovetly.disabled = positionNovetly <= -(itemsCountNovetly - slidesToShowNovetly) * itemWidthNovetlyTabletLandscape;
}

const checkBtnsNovetlyTablet = () => {
  btnPrevNovetly.disabled = positionNovetly === 0;
  btnNextNovetly.disabled = positionNovetly <= -(itemsCountNovetly - slidesToShowNovetlyTablet) * itemWidthNovetlyTablet;
}

const checkBtnsNovetlyPhone = () => {
  btnPrevNovetly.disabled = positionNovetly === 0;
  btnNextNovetly.disabled = positionNovetly <= -(itemsCountNovetly - slidesToShowNovetlyPhone) * itemWidthNovetlyPhone;
}

checkBtnsNovetly();