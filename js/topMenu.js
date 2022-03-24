//Parse object TOP_MENU 
let topMenuTitle = []
let topMenuObj = []

for (let [key, value] of Object.entries(TOP_MENU)) {
  topMenuTitle.push(value.title)
  topMenuObj.push(value)
}

const subtitleArrays = topMenuObj.map(item => {
  return item.submenu
})




//create top menu items
let topMenuCount = Object.keys(TOP_MENU).length

for(let i=0; i<topMenuCount; i++){
  if(topMenuObj[i].submenu !== undefined){
    function createTopMenuItemValueMore(){
      const TopMenuItemID = "header__menu_link-" + (i + 1);
      let submenuID = "submenu-" + (i + 1)

      const topMenuItemValueMore = document.createElement("a")
      topMenuItemValueMore.classList.add(TopMenuItemID)
      topMenuItemValueMore.setAttribute("id", TopMenuItemID)
      topMenuItemValueMore.innerHTML = topMenuTitle[i]
      document.querySelector(".header__menu_list").appendChild(topMenuItemValueMore)
  
      const topMenuItemMoreImg = document.createElement("img")
      topMenuItemMoreImg.classList.add(TopMenuItemID)
      topMenuItemMoreImg.src = "img/icon-more.svg"
      document.getElementById(TopMenuItemID).appendChild(topMenuItemMoreImg)


      function createSubmenuBox(){
        const submenuBox = document.createElement("div")
        submenuBox.classList.add("header__menu_submenu")
        submenuBox.setAttribute("id", submenuID)
        document.getElementById(TopMenuItemID).appendChild(submenuBox)
        


        let subtitleItems = subtitleArrays[i].map(item =>{return item.title});

        let submenuCount = subtitleItems.length

        for(let i = 0; i<submenuCount; i++){
          const submenuItem = document.createElement("div")
          submenuItem.classList.add("header__menu_submenu-item")
          submenuItem.innerHTML = subtitleItems[i]
          document.getElementById(submenuID).appendChild(submenuItem)
        }
      }
      createSubmenuBox()

      // closeMenu()
      // const bla = document.getElementById(TopMenuItemID)

      closeMenu()
      document.getElementById('nav').onmouseover = function(event) {
        for(let i=0; i<topMenuCount; i++){
          const TopMenuItemID = "header__menu_link-" + (i + 1);
          let target = event.target; 

          if (target.className === TopMenuItemID) {
            let s=target.getElementsByClassName('header__menu_submenu');
            closeMenu();
            s[0].style.opacity='1';
          }
        }
      }



        document.onmousemove=function(event) {
          let target = event.target;

          if ((target.className != "header__menu_link-1" && target.className != "header__menu_link-2" && target.className != "header__menu_link-6")  && (target.className !='header__menu_submenu-item' && target.className !='header__menu_list')) {
            closeMenu();
          }
          
        }
        

        function closeMenu(){
          let subm=document.getElementsByClassName('header__menu_submenu');
          for (let i=0; i<subm.length; i++) {
              subm[i].style.opacity="0";
          }
        }
      }
    createTopMenuItemValueMore()


  }
  else{
    function createTopMenuItemValue(){
      const topMenuItemValue = document.createElement("a")
      topMenuItemValue.classList.add("header__menu_link")
      topMenuItemValue.innerHTML = topMenuTitle[i]
      document.querySelector(".header__menu_list").appendChild(topMenuItemValue)
    }
  
    createTopMenuItemValue()
  }
}







