window.onload = ()=>{
  document.querySelector('a').removeAttribute('href');
  document.querySelector('a').style.cursor='pointer';
  document.querySelector('a').addEventListener('click',function(){
    window.location.replace('https://glenty.com')
  })
  
  if(window.location.href.includes('/top100')){
    document.querySelector('#root').style.background= 'url("./images/TP100_mobile_background.svg")'
    document.querySelector('#root').style.backgroundRepeat= 'no-repeat'
    document.querySelector('.top100page').style.paddingTop='7%'
    document.querySelector('.top100img').style.paddingBottom='1.5%'
  }
  function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector('nav').style.background = "url('./images/Fichier 8.svg')";

    } else {
      document.querySelector('nav').style.background = "none";
    }
  }
  
 window.innerWidth > 900 ? 
  window.onscroll = function() {myFunction()} :false
  const home = document.createElement("div")
  const trade = document.createElement("div")
  const farms = document.createElement("div")
  const gigapool = document.createElement("div")
  const github = document.createElement("div")
  const docs = document.createElement("div")

  const homel = document.createElement("a")
  const tradel = document.createElement("a")
  const farmsl = document.createElement("a")
  const gigapooll = document.createElement("a")
  const githubl = document.createElement("a")
  const docsl = document.createElement("a")
 

   homel.innerHTML= 'Top100'
   tradel.innerHTML= 'Trade'
   farmsl.innerHTML= 'Farms'
   gigapooll.innerHTML= 'GigaPool'
   githubl.innerHTML= 'Github'
   docsl.innerHTML= 'Docs'


   homel.setAttribute("href", "/top100")
   tradel.setAttribute("href", "https://exchange.glenty.com/#/swap")
   farmsl.setAttribute("href", "https://glenty.com/farms")
   gigapooll.setAttribute("href", "https://giga.glenty.com")
   githubl.setAttribute("href", "https://github.com/glenty-protocol")
   docsl.setAttribute("href", "https://glenty.gitbook.io/glenty/")

   homel.setAttribute("class", "nav-links")
   tradel.setAttribute("class", "nav-links")
   farmsl.setAttribute("class", "nav-links")
   gigapooll.setAttribute("class", "nav-links")
   githubl.setAttribute("class", "nav-links")
   docsl.setAttribute("class", "nav-links")


   home.appendChild(homel)
   trade.appendChild(tradel)
   farms.appendChild(farmsl)
   gigapool.appendChild(gigapooll)
   github.appendChild(githubl)
   docs.appendChild(docsl)


   const heade = document.createElement('div')
   const nav = document.querySelector('nav')
   const panel = document.querySelector("a[href='https://twitter.com/glenty_com']").parentElement.parentElement.parentElement

   const lang = panel.querySelectorAll('div')[6]
   
 nav.childNodes[1].insertBefore(lang, nav.childNodes[1].querySelector('div'))
 lang.classList.add('langauge') 
 
   heade.appendChild(trade)
   heade.appendChild(farms)
   heade.appendChild(home)
   heade.appendChild(gigapool)
   heade.appendChild(github)
   heade.appendChild(docs)

   document.querySelector('nav').querySelector('img').src='./images/GLENTY_WHITE_LOGO.png';
   document.querySelector('nav').querySelector('img').parentElement.style.height = '155%';
   document.querySelector('nav').querySelector('img').parentElement.parentElement.style.width='9%';
   document.querySelector('nav').querySelector('img').parentElement.parentElement.style.height='90%';

   nav.insertBefore(heade, nav.childNodes[1])
   heade.classList.add('header-grid')
  document.querySelector('nav').style.borderBottom='none';
  document.querySelector('nav').style.top='0';
  document.querySelector('#root div').querySelectorAll('div')[17].parentElement.style.background='transparent';
  lang.querySelector('button').querySelector('svg').style.fill = 'white';
  lang.querySelector('button').querySelector('div').style.color = 'white';
  document.querySelector('nav').lastElementChild.lastElementChild.lastElementChild.style.backgroundColor='rgb(255, 204, 51)'
  window.location.href.includes('farms')?document.querySelector('h1').parentElement.offsetParent.setAttribute('id',"farmsCont"):false

  window.setInterval(function(){
    if(document.querySelector('.price')){
      document.querySelector('.price').parentElement.parentElement.style.display='flex'
    }
  }, 50);
  
  createFooter();
  createMenuFooter();
  getSocial();
}



function mobileC(){
  window.onload = ()=>{ 
  document.querySelector('nav').style.border='none';
 
  const logoM = document.createElement('img');
  logoM.setAttribute("src", "./images/GLENTY_WHITE_LOGO.png");
  document.querySelector('nav').insertBefore(logoM, document.querySelector('nav').firstChild);
  logoM.classList.add('logo-phone')
  logoM.style.height='70%';
  logoM.style.width='110px';
  logoM.style.marginTop='10px';
  setTimeout(document.querySelector('nav button').click(), 3000);
  setTimeout(  document.querySelector('nav button').remove(), 3500);
  window.onscroll = function() {hideNav()};
  document.querySelector('.logo-phone').style.cursor='pointer';
  document.querySelector('.logo-phone').addEventListener('click',function(){
    window.location.replace('https://glenty.com')
  })
  function hideNav() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector("nav").style.display = "none";
    } else {
      document.querySelector("nav").style.display = "flex";
    }
  }
  document.querySelector('nav div').classList.add('phonePrice');
  setTimeout(function(){
    document.querySelector('.price')?document.querySelector('nav div').innerText=document.querySelector('.price').innerText:document.querySelector('nav div').style.display='none';
  },3000)
  

  window.location.pathname === '/'? homeMc():false
  window.location.href.includes('top100')?top100Page():false
  window.location.href.includes('farms')?farmPage():false


  
  createFooter();
  createMenuFooter();
  document.querySelectorAll('.footerLinks')[3].addEventListener('click',function(){
    document.querySelector('.moreMenu').style.display === "grid"? 
    document.querySelector('.moreMenu').style.display='none':
    document.querySelector('.moreMenu').style.display='grid'
  })
 
  }
  
}

function farmPage(){
document.querySelector('h1').style.textAlign='center';
document.querySelector('h2').style.textAlign='center';
document.querySelector('table').style.borderSpacing='0px 15px';
document.querySelector('table').style.borderCollapse='separate';
document.querySelector('#root').style.backgroundPositionY='bottom';
document.querySelector('table').offsetParent.parentElement.style.background='transparent'
document.querySelectorAll('button')[2].remove()
for(let i = 0; i < document.querySelectorAll('td img').length; i++){
  document.querySelectorAll('td img')[i].parentElement.style.height = '40px'
  document.querySelectorAll('td img')[i].parentElement.style.width = '40px'

}
const coinsFarm = document.querySelectorAll('tr');
for(let i=0; i < coinsFarm.length; i++){
  document.querySelectorAll('tr')[i].querySelectorAll('td')[0].querySelector('div div div div').querySelectorAll('div')[5].style.fontSize='10px';
  document.querySelectorAll('tr')[i].querySelectorAll('td')[0].querySelector('div div div div').querySelectorAll('div')[5].style.textAlign='center';
  document.querySelectorAll('tr')[i].querySelectorAll('td')[2].querySelector('div div div div').querySelectorAll('div')[4].style.fontSize='10px';
}

}


function icoPage(){
document.querySelector('.containerIco').style.gridTemplateColumns='100%';
document.querySelector('h1').parentElement.style.textAlign='center'
document.querySelector('h1').parentElement.style.marginTop='20%';
document.querySelector('.ipoHalf').style.marginTop='-60px'
document.querySelector('.blockIco').style.height='';
document.querySelector('.buttonone').style.height='20%';
document.querySelector('.buttonone').style.marginTop='5%';
document.querySelector('.buttontwo').style.height='20%';
document.querySelector('.buttontwo').style.width='250px';
document.querySelector('.buttontwo').style.marginBottom='5%';
document.querySelector('.blockIco div').style.gridTemplateColumns='40% 40%';
document.querySelector('.blockIco div').style.gridGap='20%';
document.querySelector('.blockIco div').style.paddingRight='5px';
document.querySelectorAll('span')[2].style.paddingLeft='';
document.querySelectorAll('span')[3].style.paddingLeft='';
document.querySelector('.IcoPage').style.height='180vh';
document.querySelector('.icons').style.width='100%';
document.querySelector('.icons').style.float='';

}


function homeMc(){
  document.querySelector('.cont2').childNodes[1].style.marginBottom = '150px';
  document.querySelector('.mobile-container').querySelector('br').remove();
  document.querySelector('.mobile-container').querySelector('br').remove();
  document.querySelector('.mobile-container').childNodes[1].childNodes[2].style.marginTop='10px';
}
function top100Page(){
document.querySelector('#root').style.background= 'url("./images/TP100_mobile_background.svg")'
document.querySelector('.TopPage').style.margin='0px';
document.querySelector('.Topgrid').style.width='100%';
document.querySelector('.Topgrid').style.gridTemplateColumns='100%';
//document.querySelectorAll('img')[4].style.marginBottom='10%'; 
document.querySelector('.tableH1').style.fontSize='14pt';
document.querySelector('.qunat').innerText='Quantity';
//document.querySelector('.tableImg').style.width='100%';
//document.querySelectorAll('.tableImg')[1].style.width='40px'
for(let i=0;i < document.querySelectorAll('.coinTop100').length;i++){
  document.querySelectorAll('.coinTop100')[i].style.gridTemplateColumns='15% 10% 10% 20%';
  document.querySelectorAll('.coinTop100 img')[i].style.margin='15% 10% 10% 20%-30% 1px';
}
}

function createFooter(){
  const fixedFooter = document.createElement('div');
  fixedFooter.classList.add('fixedFooter'); 
  const TradeM = document.createElement('a');
  const gigapoolM = document.createElement('a');
  const Top100M = document.createElement('a');
  const MoreM = document.createElement('a');

  TradeM.classList.add('footerLinks');
  Top100M.classList.add('footerLinks');
  MoreM.classList.add('footerLinks');
  MoreM.classList.add('footermore');
  gigapoolM.classList.add('footerLinks');


  TradeM.setAttribute('href','https://exchange.glenty.com/#/swap');
  Top100M.setAttribute('href','https://glenty.com/top100');
  gigapoolM.setAttribute('href','https://giga.glenty.com');


  const tradeImg = document.createElement('img');
  const top100Img = document.createElement('img');
  const moreImg = document.createElement('img');
  const gigapoolImg = document.createElement('img');


  tradeImg.setAttribute('src','./images/trade.svg');
  top100Img.setAttribute('src','./images/TOP100-Icon.svg');
  moreImg.setAttribute('src','./images/more.svg');
  gigapoolImg.setAttribute('src','./images/gigapool.svg');


  tradeImg.classList.add('footerImg');
  top100Img.classList.add('footerImg');
  moreImg.classList.add('footerImg');
  gigapoolImg.classList.add('footerImg');


  const tradeT = document.createElement('p');
  const top100T = document.createElement('p');
  const moreT = document.createElement('p');
  const gigapoolT = document.createElement('p');


  tradeT.innerText='Trade';
  top100T.innerText='Top100';
  moreT.innerText='More';
  gigapoolT.innerText='Gigapool';



  TradeM.appendChild(tradeImg);
  Top100M.appendChild(top100Img);
  MoreM.appendChild(moreImg);
  gigapoolM.appendChild(gigapoolImg);


  TradeM.appendChild(tradeT);
  Top100M.appendChild(top100T);
  MoreM.appendChild(moreT);
  gigapoolM.appendChild(gigapoolT);



  fixedFooter.appendChild(TradeM);
  fixedFooter.appendChild(gigapoolM);
  fixedFooter.appendChild(Top100M);
  fixedFooter.appendChild(MoreM);
  document.querySelector('body').appendChild(fixedFooter);
  document.querySelector('#root').addEventListener('click',function(){
  document.querySelector('.moreMenu').style.display='none'
  })
}

function createMenuFooter(){
  const fixedMenuFooter = document.createElement('div');
  fixedMenuFooter.classList.add('moreMenu'); 
  const docsM = document.createElement('a');
  const githubM = document.createElement('a');
  const FarmsM = document.createElement('a');



  docsM.classList.add('moreLinks');
  githubM.classList.add('moreLinks');
  FarmsM.classList.add('moreLinks');


  githubM.setAttribute('href','https://github.com/glenty-protocol');
  docsM.setAttribute('href','https://glenty.gitbook.io/glenty/');
  FarmsM.setAttribute('href','https://glenty.com/farms');


  const githubImg = document.createElement('img');
  const docsImg = document.createElement('img');
  const farmsImg = document.createElement('img');


  docsImg.setAttribute('src','./images/DOCS.svg');
  farmsImg.setAttribute('src','./images/farms.svg');
  githubImg.setAttribute('src','./images/GITHUB.svg');

  docsImg.classList.add('footerImg');
  farmsImg.classList.add('footerImg');
  githubImg.classList.add('footerImg');

  const githubT = document.createElement('p');
  const docsT = document.createElement('p');
  const farmT = document.createElement('p');

  githubT.innerText='Github';
  docsT.innerText='White paper';
  farmT.innerText='Farms';


  githubM.appendChild(githubImg);
  docsM.appendChild(docsImg);
  FarmsM.appendChild(farmsImg);


  githubM.appendChild(githubT);
  docsM.appendChild(docsT);
  FarmsM.appendChild(farmT);

 
  fixedMenuFooter.style.borderBottom='3px solid #989fac';
  docsM.style.borderBottom='none';

  fixedMenuFooter.appendChild(FarmsM);
  fixedMenuFooter.appendChild(githubM);
  fixedMenuFooter.appendChild(docsM);

  document.querySelector('#root').appendChild(fixedMenuFooter);
}
  const windowWidth = window.innerWidth

  window.onresize = ()=>{
    window.innerWidth !== windowWidth ? location.reload():false
  }
  window.innerWidth < 900 ? mobileC() : false

  function getSocial(){
    const social = document.querySelector('.socialL');
    document.querySelector('#root').appendChild(social.parentElement);
  }
  