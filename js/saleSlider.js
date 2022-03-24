let positionSales = 0;
const slidesToShowSales = 4;
const slidesToShowSalesTablet = 3;
const slidesToShowSalesPhone = 1;

const slideToScrollSales = 1;
const trackSales = document.querySelector(".sales__wrapper_item-track");

const btnPrevSales = document.querySelector(".sales-button_prev");
const btnPrevSalesTabletLandscape = document.querySelector(".btnPrev-sales_tablet-landscape");
const btnPrevSalesTablet = document.querySelector(".btnPrev-sales_tablet");
const btnPrevSalesPhone = document.querySelector(".btnPrev-sales_phone");

const btnNextSales = document.querySelector(".sales-button_next");
const btnNextSalesTabletLandscape = document.querySelector(".btnNext-sales_tablet-landscape");
const btnNextSalesTablet = document.querySelector(".btnNext-sales_tablet");
const btnNextSalesPhone = document.querySelector(".btnNext-sales_phone");

const itemWidthSales = 27;
const itemWidthSalesTabletLandscape = 25;
const itemWidthSalesTablet = 33;
const itemWidthSalesPhone = 100;

const movepositionSales = slideToScrollSales * itemWidthSales;
const movepositionSalesTabletLandscape = slideToScrollSales * itemWidthSalesTabletLandscape;
const movepositionSalesTablet = slideToScrollSales * itemWidthSalesTablet;
const movepositionSalesPhone = slideToScrollSales * itemWidthSalesPhone;


//disable buttons
let salesItems = []

for(let i=0; i<ITEMS.length; i++){
  if(ITEMS[i].type === "sale"){
    salesItems.push(ITEMS[i])
  }
}

const itemsCountSales = salesItems.length;

const salesArrowDisable = document.querySelectorAll(".sales__wrapper_arrow")
if(salesItems.length <= slidesToShowSales){
   salesArrowDisable[0].visibility  = "hidden"
   salesArrowDisable[1].visibility  = "hidden"
}


const salesArrowDisableTabletLandscape = document.querySelectorAll(".sales__header_arrow-box")
if(salesItems.length <= slidesToShowSales){
  salesArrowDisableTabletLandscape[0].visibility  = "hidden"
  salesArrowDisableTabletLandscape[1].visibility  = "hidden"
}

const salesArrowDisableTablet = document.querySelectorAll(".sales__header_arrow-box_tablet")
if(salesItems.length <= slidesToShowSalesTablet){
  salesArrowDisableTablet[0].visibility  = "hidden"
  salesArrowDisableTablet[1].visibility  = "hidden"
}

const salesArrowDisablePhone = document.querySelectorAll(".sales__header_arrow-box_phone")
if(salesItems.length <= slidesToShowSalesPhone){
  salesArrowDisablePhone[0].visibility  = "hidden"
  salesArrowDisablePhone[1].visibility  = "hidden"
}



btnNextSales.addEventListener('click', () =>{
  const itemsSalesLeft  = itemsCountSales - (Math.abs(positionSales) + slidesToShowSales * itemWidthSales) / itemWidthSales;

  positionSales -= itemsSalesLeft >= slideToScrollSales ? movepositionSales : itemsSalesLeft * itemWidthSales;

  setpositionSales();
  checkBtnsSales();
})

btnNextSalesTabletLandscape.addEventListener('click', () =>{
  const itemsSalesLeft  = itemsCountSales - (Math.abs(positionSales) + slidesToShowSales * itemWidthSalesTabletLandscape) / itemWidthSalesTabletLandscape;

  positionSales -= itemsSalesLeft >= slideToScrollSales ? movepositionSalesTabletLandscape : itemsSalesLeft * itemWidthSalesTabletLandscape;

  setpositionSales();
  checkBtnsSalesTabletLandscape();
})

btnNextSalesTablet.addEventListener('click', () =>{
  const itemsSalesLeft  = itemsCountSales - (Math.abs(positionSales) + slidesToShowSalesTablet * itemWidthSalesTablet) / itemWidthSalesTablet;

  positionSales -= itemsSalesLeft >= slideToScrollSales ? movepositionSalesTablet : itemsSalesLeft * itemWidthSalesTablet;

  setpositionSales();
  checkBtnsSalesTablet();
})

btnNextSalesPhone.addEventListener('click', () =>{
  const itemsSalesLeft  = itemsCountSales - (Math.abs(positionSales) + slidesToShowSalesPhone * itemWidthSalesPhone) / itemWidthSalesPhone;

  positionSales -= itemsSalesLeft >= slideToScrollSales ? movepositionSalesPhone : itemsSalesLeft * itemWidthSalesPhone;

  setpositionSales();
  checkBtnsSalesPhone();
})

btnPrevSales.addEventListener('click', () =>{
  const itemsSalesLeft  =  Math.abs(positionSales) / itemWidthSales;

  positionSales += itemsSalesLeft >= slideToScrollSales ? movepositionSales : itemsSalesLeft * itemWidthSales;

  setpositionSales();
  checkBtnsSales();
})

btnPrevSalesTabletLandscape.addEventListener('click', () =>{
  const itemsSalesLeft  =  Math.abs(positionSales) / itemWidthSalesTabletLandscape;

  positionSales += itemsSalesLeft >= slideToScrollSales ? movepositionSalesTabletLandscape : itemsSalesLeft * itemWidthSalesTabletLandscape;

  setpositionSales();
  checkBtnsSalesTabletLandscape();
})

btnPrevSalesTablet.addEventListener('click', () =>{
  const itemsSalesLeft  =  Math.abs(positionSales) / itemWidthSalesTablet;

  positionSales += itemsSalesLeft >= slideToScrollSales ? movepositionSalesTablet : itemsSalesLeft * itemWidthSalesTablet;

  setpositionSales();
  checkBtnsSalesTablet();
})

btnPrevSalesPhone.addEventListener('click', () =>{
  const itemsSalesLeft  =  Math.abs(positionSales) / itemWidthSalesPhone;

  positionSales += itemsSalesLeft >= slideToScrollSales ? movepositionSalesPhone : itemsSalesLeft * itemWidthSalesPhone;

  setpositionSales();
  checkBtnsSalesPhone();
})

const setpositionSales = () => {
  trackSales.style.transform = `translateX(${positionSales}%)`;
}

const checkBtnsSales = () => {
  btnPrevSales.disabled = positionSales === 0;
  btnNextSales.disabled = positionSales <= -(itemsCountSales - slidesToShowSales) * itemWidthSales;
}

const checkBtnsSalesTabletLandscape = () => {
  btnPrevSales.disabled = positionSales === 0;
  btnNextSales.disabled = positionSales <= -(itemsCountSales - slidesToShowSales) * itemWidthSalesTabletLandscape;
}

const checkBtnsSalesTablet = () => {
  btnPrevSales.disabled = positionSales === 0;
  btnNextSales.disabled = positionSales <= -(itemsCountSales - slidesToShowSalesTablet) * itemWidthSalesTablet;
}

const checkBtnsSalesPhone = () => {
  btnPrevSales.disabled = positionSales === 0;
  btnNextSales.disabled = positionSales <= -(itemsCountSales - slidesToShowSalesPhone) * itemWidthSalesPhone;
}

checkBtnsSales();