function createNewsArticleFirst(){
  const articleTitleFirst = document.createElement("a")
  articleTitleFirst.classList.add("news__wrapper_article-text_link")
  articleTitleFirst.href = "#"
  articleTitleFirst.innerHTML = NEWS[0].title
  document.getElementById("article-first_text").appendChild(articleTitleFirst)
      
  const articleDescrFirst = document.createElement("span")
  articleDescrFirst.classList.add("news__wrapper_article-descr")
  articleDescrFirst.innerHTML = NEWS[0].description
  document.getElementById("article-first_text").appendChild(articleDescrFirst)
  
  const articleImgFirst = document.createElement("img")
  articleImgFirst.classList.add("article-IMG")
  articleImgFirst.src = "https://homy.ru/upload/products/GRP_b2b_large.jpg"
  articleImgFirst.alt = "news-photo"
  document.getElementById("article-photo_first").appendChild(articleImgFirst)
}

function createNewsArticleSecond(){
  const articleTitleSecond = document.createElement("a")
  articleTitleSecond.classList.add("news__wrapper_article-text_link")
  articleTitleSecond.href = "#"
  articleTitleSecond.innerHTML = NEWS[1].title
  document.getElementById("article-second_text").appendChild(articleTitleSecond)
    
  const articleDescrSecond = document.createElement("span")
  articleDescrSecond.classList.add("news__wrapper_article-descr")
  articleDescrSecond.innerHTML = NEWS[1].description
  document.getElementById("article-second_text").appendChild(articleDescrSecond)
  
  const articleImgSecond = document.createElement("img")
  articleImgSecond.classList.add("article-IMG")
  articleImgSecond.src = "https://homy.ru/upload/articles/untitled.png"
  articleImgSecond.alt = "news-photo"
  document.getElementById("article-photo_second").appendChild(articleImgSecond)
}

function createNewsArticleThird(){
  const articleTitleThird = document.createElement("a")
  articleTitleThird.classList.add("news__wrapper_article-text_link")
  articleTitleThird.href = "#"
  articleTitleThird.innerHTML = NEWS[2].title
  document.getElementById("article-third_text").appendChild(articleTitleThird)
    
  const articleDescrThird = document.createElement("span")
  articleDescrThird.classList.add("news__wrapper_article-descr")
  articleDescrThird.innerHTML = NEWS[2].description
  document.getElementById("article-third_text").appendChild(articleDescrThird)
  
  const articleImgThird = document.createElement("img")
  articleImgThird.classList.add("article-IMG")
  articleImgThird.src = "https://homy.ru/upload/articles/sankt-petersburg-3012671_960_720.jpg"
  articleImgThird.alt = "news-photo"
  document.getElementById("article-photo_third").appendChild(articleImgThird)
}

function createNewsArticleFourth(){
  const articleTitleFourth = document.createElement("a")
  articleTitleFourth.classList.add("news__wrapper_article-text_link")
  articleTitleFourth.href = "#"
  articleTitleFourth.innerHTML = NEWS[3].title
  document.getElementById("article-fourth_text").appendChild(articleTitleFourth)
    
  const articleDescrFourth = document.createElement("span")
  articleDescrFourth.classList.add("news__wrapper_article-descr")
  articleDescrFourth.innerHTML = NEWS[3].description
  document.getElementById("article-fourth_text").appendChild(articleDescrFourth)
  
  const articleImgFourth = document.createElement("img")
  articleImgFourth.classList.add("article-IMG")
  articleImgFourth.src = "https://homy.ru/upload/articles/sankt-petersburg-3012671_960_720.jpg"
  articleImgFourth.alt = "news-photo"
  document.getElementById("article-photo_fourth").appendChild(articleImgFourth)
}

function createNewsArticleFifth(){
  const articleTitleFifth = document.createElement("a")
  articleTitleFifth.classList.add("news__wrapper_article-text_link")
  articleTitleFifth.href = "#"
  articleTitleFifth.innerHTML = NEWS[4].title
  document.getElementById("article-fifth_text").appendChild(articleTitleFifth)
    
  const articleDescrFifth = document.createElement("span")
  articleDescrFifth.classList.add("news__wrapper_article-descr")
  articleDescrFifth.innerHTML = NEWS[4].description
  document.getElementById("article-fifth_text").appendChild(articleDescrFifth)
  
  const articleImgFifth = document.createElement("img")
  articleImgFifth.classList.add("article-IMG")
  articleImgFifth.src = "https://homy.ru/upload/articles/sankt-petersburg-3012671_960_720.jpg"
  articleImgFifth.alt = "news-photo"
  document.getElementById("article-photo_fifth").appendChild(articleImgFifth)
}

createNewsArticleFirst()
createNewsArticleSecond()
createNewsArticleThird()
createNewsArticleFourth()
createNewsArticleFifth()

function severalRandom(min, max, num) {
  let i, arr = [], res = [];
  for (i = min; i <= max; i++ ) arr.push(i);
  for (i = 0; i < num; i++) res.push(arr.splice(Math.floor(Math.random() * (arr.length)), 1)[0])
  return res;
}
let randomArr = severalRandom(1, 5, 3)

let randomIdFirst = "article-" + randomArr[0]
let randomIdSecond = "article-" + randomArr[1]
let randomIdThird = "article-" + randomArr[2]
let randomIdFourth = "article-" + randomArr[3]
let randomIdFifth = "article-" + randomArr[4]

const articleFirst = document.getElementById(randomIdFirst)
articleFirst.style.display = "flex"

const articleSecond = document.getElementById(randomIdSecond)
articleSecond.style.display = "flex"

const articleThird = document.getElementById(randomIdThird)
articleThird.style.display = "flex"

const articleFourth = document.getElementById(randomIdFourth)
articleThird.style.display = "flex"

const articleFifth = document.getElementById(randomIdFifth)
articleThird.style.display = "flex"














