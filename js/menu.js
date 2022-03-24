for(let i=0; i<MENU.length; i++){
  function createMenuItemValue(){
    const menuItemValue = document.createElement("a")
    menuItemValue.classList.add("header__navbar_link")
    menuItemValue.innerHTML = MENU[i].title
    document.querySelector(".header__navbar_menu-track").appendChild(menuItemValue)
  }

  createMenuItemValue()
}

let position = 0;
const slidesToShow = 10;
const slideToScroll = 1;
const track = document.querySelector(".header__navbar_menu-track");
const btnPrev = document.querySelector(".header__navbar_link-icon_left");
const btnNext = document.querySelector(".header__navbar_link-icon_right");
const items = document.querySelectorAll(".header__navbar_link");
const itemsCount = items.length;
const itemWidth = 100 / slidesToShow;
const movePosition = slideToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}%`;
})

btnNext.addEventListener('click', () =>{
  const itemsLeft  = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -= itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
})


btnPrev.addEventListener('click', () =>{
  const itemsLeft  =  Math.abs(position) / itemWidth;

  position += itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
})

const setPosition = () => {
  track.style.transform = `translateX(${position}%)`;
}

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}

checkBtns();










