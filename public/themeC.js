window.onload = ()=>{
    document.querySelector('nav').style.backgroundColor='transparent';
    document.querySelector('#root').style.background = 'url("./images/GLENTY_background.png")'
    document.querySelector('#root').style.backgroundPositionX = 'center'
    document.querySelector('#root').style.backgroundSize='cover';

    if(window.location.href.includes('/top100') || window.location.href.includes('/ico')){
      document.querySelector('#root').style.background = 'url("./images/TOP100_background_Plan de travail 1 copie 5.svg")'
      document.querySelector('#root').style.backgroundRepeat= 'no-repeat'
      document.querySelector('#root').style.backgroundSize= 'cover'
      document.querySelector('#root').style.backgroundPosition= 'center'
    }
    if(window.location.href.includes('/gigapool')){
      document.querySelector('#root').style.background = 'url("./images/GLENTYPOOL_background_Plan de travail 1 copie 8.svg")';
      document.querySelector('#root').style.height= '860vh';

      window.onscroll = function() {myFunction()};

    function myFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('nav').style.background = "url('./images/Fichier 8.svg')";
        document.querySelector('nav').style.height='200px';
        document.querySelector('nav a').style.height='100%';
        document.querySelector(".price").style.top='200px';

      } else {
        document.querySelector('nav').style.background = "none";
        document.querySelector('nav').style.height='100px';
        document.querySelector('nav a').style.height='155%';
        document.querySelector(".price").style.top='150px';
      }
    }
    }
    const home = document.createElement("div")
    const trade = document.createElement("div")
    const farms = document.createElement("div")
    const gigapool = document.createElement("div")
    const github = document.createElement("div")
    const docs = document.createElement("div")
    const drop = document.createElement('div')

    const homel = document.createElement("a")
    const tradel = document.createElement("button")
    const farmsl = document.createElement("a")
    const gigapooll = document.createElement("a")
    const githubl = document.createElement("a")
    const docsl = document.createElement("a")
    const linkl1 = document.createElement("a")
    const linkl2 = document.createElement("a")


     homel.innerHTML= 'Home'
     tradel.innerHTML= 'Trade'
     farmsl.innerHTML= 'Farms'
     gigapooll.innerHTML= 'Giga Pool'
     githubl.innerHTML= 'Github'
     docsl.innerHTML= 'Docs'
     linkl1.innerHTML= 'Exchange'
     linkl2.innerHTML= 'Liquidity'


     homel.setAttribute("href", "/")
     linkl1.setAttribute("href", "https://exchange.glenty.com/#/swap")
     linkl2.setAttribute("href", "https://exchange.glenty.com/#/pool")
     farmsl.setAttribute("href", "/farms")
     gigapooll.setAttribute("href", "https://glenty.com/gigapool")
     githubl.setAttribute("href", "https://github.com/glenty-protocol")
     docsl.setAttribute("href", "https://glenty.gitbook.io/glenty/")

     homel.setAttribute("class", "nav-links")
     tradel.setAttribute("class", "nav-links")
     trade.setAttribute("class", "dropiv")
     tradel.setAttribute("class", "dropbtn")
     farmsl.setAttribute("class", "nav-links")
     gigapooll.setAttribute("class", "nav-links")
     githubl.setAttribute("class", "nav-links")
     docsl.setAttribute("class", "nav-links")
     drop.setAttribute("class", "dropdown-content")


     home.appendChild(homel)
     trade.appendChild(tradel)
     trade.appendChild(drop)
     farms.appendChild(farmsl)
     gigapool.appendChild(gigapooll)
     github.appendChild(githubl)
     docs.appendChild(docsl)
     drop.appendChild(linkl1)
     drop.appendChild(linkl2)


     const heade = document.createElement('div')
     const nav = document.querySelector('nav')
     const panel = document.querySelector("a[href='https://twitter.com/glenty_com']").parentElement.parentElement.parentElement
     const social = panel.querySelector('div').querySelectorAll('div')[1]

     const lang = panel.querySelectorAll('div')[6]
     
     nav.childNodes[1].insertBefore(lang, nav.childNodes[1].querySelector('div'))
    panel.style.backgroundColor = 'transparent';
     heade.appendChild(home)
     heade.appendChild(trade)
     heade.appendChild(farms)
     heade.appendChild(gigapool)
     heade.appendChild(github)
     heade.appendChild(docs)

     document.querySelector('nav').querySelector('img').src='./images/GLENTY_WHITE_LOGO.png';
     document.querySelector('nav').querySelector('img').parentElement.style.height = '155%';
     document.querySelector('nav').querySelector('img').parentElement.parentElement.style.width='9%';
     document.querySelector('nav').querySelector('img').parentElement.parentElement.style.height='90%';

     nav.insertBefore(heade, nav.childNodes[1])
     heade.classList.add('header-grid')
     const price = panel.querySelector('div').querySelector('a')

    document.querySelector('nav').style.borderBottom='none';
    document.querySelector('nav').style.top='0';
    document.querySelector('.sc-bsatvv').style.backgroundColor='transparent';
    nav.lastChild.querySelectorAll('button')[26].style.backgroundColor= 'white';
    nav.lastChild.querySelectorAll('button')[26].style.color= 'black';
    nav.lastChild.querySelectorAll('button')[26].style.fontWeight= 'normal';
    nav.lastChild.querySelectorAll('button')[26].style.letterSpacing= '0.11em';
    lang.querySelector('button').querySelector('svg').style.fill = 'white';
    lang.querySelector('button').querySelector('div').style.color = 'white';
    document.querySelector('nav').lastElementChild.lastElementChild.lastElementChild.style.backgroundColor='rgb(255, 204, 51)'

    document.querySelector('button').remove();


    window.setInterval(function(){
      if(true){
        social.classList.add('socialL')
        document.querySelector('#root').appendChild(social)
      }
    }, 3000);
    
    
  }