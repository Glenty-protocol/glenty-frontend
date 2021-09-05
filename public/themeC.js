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
    if(window.innerWidth <= 1300){
      document.querySelector('#root').style.height= '1680vh'
    }else{
      document.querySelector('#root').style.height= '860vh';
    }
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
   gigapooll.setAttribute("href", "/gigapool")
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
  document.querySelector('#root div').querySelectorAll('div')[17].style.backgroundColor='transparent';
  nav.lastChild.querySelectorAll('button')[26].style.backgroundColor= 'white';
  nav.lastChild.querySelectorAll('button')[26].style.color= 'black';
  nav.lastChild.querySelectorAll('button')[26].style.fontWeight= 'normal';
  nav.lastChild.querySelectorAll('button')[26].style.letterSpacing= '0.11em';
  lang.querySelector('button').querySelector('svg').style.fill = 'white';
  lang.querySelector('button').querySelector('div').style.color = 'white';
  document.querySelector('nav').lastElementChild.lastElementChild.lastElementChild.style.backgroundColor='rgb(255, 204, 51)'
  window.location.href.includes('farms')?document.querySelector('h1').style.marginTop = '25%':false
  window.location.href.includes('farms')?document.querySelector('h1').parentElement.offsetParent.style.marginLeft='5%':false


  document.querySelector('button').remove();


  window.setInterval(function(){
    if(true){
      social.classList.add('socialL')
      document.querySelector('#root').appendChild(social);
    }
  }, 3000);
  
  
}

/*mobile*/

function mobileC(){
  window.onload = ()=>{
  
  document.querySelector('#root').style.background = 'url("./images/backgroundMobile.svg")';
  document.querySelector('#root').style.backgroundPositionX = 'center'
  document.querySelector('#root').style.backgroundSize='cover';
/*nav*/
  document.querySelector('nav').style.backgroundColor='transparent';
  document.querySelector('nav').style.border='none';
  document.querySelector('nav').lastChild.querySelector('button').style.backgroundColor= 'white';
  document.querySelector('nav').lastChild.querySelector('button').style.color= '#312783';
  document.querySelector('nav').lastChild.querySelector('button').style.fontWeight= 'normal';
  document.querySelector('nav').lastChild.querySelector('button').style.letterSpacing= '0.11em';
  document.querySelector('nav').lastChild.querySelector('button').innerText='Connect Wallet';
  const logoM = document.createElement('img');
  logoM.setAttribute("src", "./images/GLENTY_WHITE_LOGO.png");
  document.querySelector('nav').insertBefore(logoM, document.querySelector('nav').firstChild);
  logoM.style.height='100%';
  logoM.style.width='150px';
  logoM.style.marginTop='10px';
 logoM.addEventListener('click',function(){
    window.location.replace('/')
  })
  document.querySelector('nav button').click();
  setTimeout(document.querySelector('#root').appendChild(document.querySelector('.price')), 500);
  setTimeout(document.querySelector('nav button').click(), 1000);
  setTimeout(  document.querySelector('nav button').remove(), 1500);
  window.onscroll = function() {hideNav()};

  function hideNav() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector("nav").style.display = "none";
    } else {
      document.querySelector("nav").style.display = "flex";
    }
  }
  
  /*home*/
  window.location.pathname === '/'? homeMc():false
  window.location.href.includes('gigapool')?gigapoolPage():false
  window.location.href.includes('top100')?top100Page():false
  window.location.href.includes('farms')?farmPage():false


  /*footer */
  createFooter();
  createMenuFooter();
  document.querySelectorAll('.footerLinks')[3].addEventListener('click',function(){
    document.querySelector('.moreMenu').style.display === "grid"? 
    document.querySelector('.moreMenu').style.display='none':
    document.querySelector('.moreMenu').style.display='grid'
  })

  /*ipo page*/
  window.location.href.includes('ico')?icoPage():false
  }
}

function farmPage(){
document.querySelector('#root div').querySelectorAll('div')[9].style.marginTop = '35%';
document.querySelector('h1').style.textAlign='center';
document.querySelector('h2').style.textAlign='center';
document.querySelector('table').style.borderSpacing='0px 15px';
document.querySelector('table').style.borderCollapse='separate';
document.querySelector('#root').style.backgroundPositionY='bottom';
document.querySelector('table').offsetParent.parentElement.style.background='transparent'
document.querySelectorAll('button')[2].remove()
for(let i = 0; i < document.querySelectorAll('td img').length; i++){
  document.querySelectorAll('td img')[i].style.top = '0'
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

function gigapoolPage(){
document.querySelector('.headergigapool').remove();
document.querySelector('.PageCon').style.margin='auto';
document.querySelector('.GigapoolCon').style.width='100%';
document.querySelector('.GigapoolCon').style.gridTemplateColumns='80%';
document.querySelector('.GigapoolCon').style.gridGap='5px';
document.querySelector('.GigapoolCon').style.margin='auto';
document.querySelector('.GlentyContainer').style.marginTop='200px';
document.querySelector('.GlentyContainer').style.background='none';
document.querySelector('.GlentyCont').style.gridTemplateColumns='80%';


document.querySelector('.outCon').style.width='100%';
document.querySelector('.outCon').style.gridTemplateColumns='80%';
document.querySelector('.outCon').style.gridGap='5px';
document.querySelector('.outCon').style.margin='0px';
document.querySelector('.outCon').style.marginBottom='160px';


for(let i=0;i < document.querySelectorAll('.firsth1').length;i++){
  document.querySelectorAll('.firsth1')[i].style.width='40%';
  document.querySelectorAll('.firsth1')[i].style.padding='5px 8px';
}

for(let i=0;i < document.querySelectorAll('.secondh1').length;i++){
  document.querySelectorAll('.secondh1')[i].style.width='90%';
  document.querySelectorAll('.secondh1')[i].style.padding='15px 10px';
}

let coins = Array.from(document.querySelectorAll('.coin'))
for(let i=2;i < coins.length;i++){
  coins[i].remove();
}
buildCoinsG();
buildCoinsO();
/*search*/
document.querySelector('.searcho').style.display='';
document.querySelector('.searcho').addEventListener('keyup',function(){
const searchbox = document.querySelector('input.searcho');
const Cnames = document.querySelectorAll('.coinO');
for(let i =0; i < Cnames.length; i++){
  Cnames[i].querySelector('div').innerText.includes(searchbox.value)?Cnames[i].style.display='':Cnames[i].style.display='none'
}
})
document.querySelector('.searchg').style.display='';
document.querySelector('.searchg').addEventListener('keyup',function(){
const searchbox = document.querySelector('input.searchg');
const Cnames = document.querySelectorAll('.coinG');
for(let i =0; i < Cnames.length; i++){
  Cnames[i].querySelector('div').innerText.includes(searchbox.value)?Cnames[i].style.display='':Cnames[i].style.display='none'
}
})

}

function buildCoinsG(){
/*list*/
const list =
[{name:'Bitcoin',title:'BTC',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/bitcoin-btc-logo.svg',contract:'0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'},
{name:'Ethereum',title:'ETH',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/ethereum-eth-logo.svg',contract:'0x2170ed0880ac9a755fd29b2688956bd959f933f8'},
{name:'Tether',title:'Tether',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/tether-usdt-logo.svg',contract:'#'},
{name:'Binance Coin',title:'BNB',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/binance-coin-bnb-logo.svg',contract:'#'},
{name:'cardano',title:'ADA',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/cardano-ada-logo.svg',contract:'0x81c15d3e956e55e77e1f3f257f0a65bd2725fc55'},
{name:'USD Coin',title:'USDC',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/usd-coin-usdc-logo.svg',contract:'0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'},
{name:'Venus XRP',title:'vXRP',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/xrp-xrp-logo.svg',contract:'0xb248a295732e0225acd3337607cc01068e3b9c10'},
{name:'Doge Coin',title:'Doge',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/dogecoin-doge-logo.svg',contract:'0xba2ae424d960c26247dd6c32edc70b295c744c43'},
{name:'Polkadot',title:'DOT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/polkadot-new-dot-logo.svg',contract:'0x7083609fce4d1d8dc0c979aab8c869ea2c873402'},
{name:'Binance USD',title:'BUSD',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/binance-usd-busd-logo.svg',contract:'#'},
{name:'Uniswap',title:'UNI',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/uniswap-uni-logo.svg',contract:'0xbf5140a22578168fd562dccf235e5d43a02ce9b1'},
{name:'Bitcoin Cash',title:'BCH',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/bitcoin-cash-bch-logo.svg',contract:'0x8ff795a6f4d97e7887c79bea79aba5cc76444adf'},
{name:'Litecoin',title:'LTC',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/litecoin-ltc-logo.svg',contract:'0x4338665cbb7b2485a8855a139b75d5e34ab0db94'},
{name:'Solana',title:'SOL',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/solana-sol-logo.svg',contract:'#'},
{name:'Chainlink',title:'LINK',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/chainlink-link-logo.svg',contract:'0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd'},
{name:'Wrapped Bitcoin',title:'WBTC',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/wrapped-bitcoin-wbtc-logo.svg',contract:'#'},
{name:'Venus DAI',title:'vDAI ',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/XVS.png',contract:'0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1'},
{name:'Ethereum Classic',title:'ETC',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/ethereum-classic-etc-logo.svg',contract:'0x3d6545b08693dae087e957cb1180ee38b9e3c25e'},
{name:'Stellar',title:'XLM',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/stellar-xlm-logo.svg',contract:'#'},
{name:'Polygon',title:'MATIC',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/polygon-matic-logo.svg',contract:'#'},
{name:'Internet Computer',title:'ICP',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/internet-computer-icp-logo.svg',contract:'#'},
{name:'THETA',title:'THETA',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/theta-theta-logo.svg',contract:'#'},
{name:'Filecoin',title:'FIL',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/filecoin-fil-logo.svg',contract:'#'},
{name:'VeChain',title:'VET',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/vechain-vet-logo.svg',contract:'#'},
{name:'Tron',title:'TRX',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/tron-trx-logo.svg',contract:'0x85eac5ac2f758618dfa09bdbe0cf174e7d574d5b'},
{name:'Monero',title:'XMR',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/monero-xmr-logo.svg',contract:'#'},
{name:'EOS',title:'EOS',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/eos-eos-logo.svg',contract:'0x56b6fb708fc5732dec1afc8d8556423a2edccbd6'},
{name:'Aave',title:'AAVE',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/aave-aave-logo.svg',contract:'#'},
{name:'UNUS SED LEO',title:'LEO',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/unus-sed-leo-leo-logo.svg',contract:'#'},
{name:'Crypto.com',title:'MCO',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/crypto-com-mco-logo.svg',contract:'#'},
{name:'Terra',title:'LUNA',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/terra-luna-luna-logo.svg',contract:'#'},
{name:'SHIBA INU',title:'SHIB',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/shiba-inu-shib-logo.svg',contract:'#'},
{name:'PancakeSwap',title:'CAKE',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/pancakeswap-cake-logo.svg',contract:'0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'},
{name:'Algorand',title:'ALGO',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/algorand-algo-logo.svg',contract:'#'},
{name:'FTX Token',title:'FTT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/ftx-token-ftt-logo.svg',contract:'#'},
{name:'Chainsquare',title:'CHS',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/chainsquare.png',contract:'0xadd8a06fd58761a5047426e160b2b88ad3b9d464'},
{name:'Klaytn',title:'KLAY',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/klaytn-klay-logo.svg',contract:'#'},
{name:'Bitcoin BEP2',title:'BTCB',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/bitcoin-btc-logo.svg',contract:'#'},
{name:'Bitcoin SV',title:'BSV',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/bitcoin-sv-bsv-logo.svg',contract:'#'},
{name:'Cosmos',title:'ATOM',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/cosmos-atom-logo.svg',contract:'0x0eb3a705fc54725037cc9e008bdede697f62f335'},
{name:'TerraUSD',title:'UST',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/UST2',contract:'0x56b6fb708fc5732dec1afc8d8556423a2edccbd6'},
{name:'NEO',title:'NEO',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/neo-neo-logo.svg',contract:'#'},
{name:'Tezos',title:'XTZ',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/tezos-xtz-logo.svg',contract:'0x16939ef78684453bfdfb47825f8a5f714f12623a'},
{name:'Compound',title:'COMP',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/compound-comp-logo.svg',contract:'0x52ce071bd9b1c4b00a0b92d298c512478cad67e8'},
{name:'IOTA',title:'MIOTA',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/iota-miota-logo.svg',contract:'0xd944f1d1e9d5f9bb90b62f9d45e447d989580782'},
{name:'Avalanche',title:'AVAX',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/avalanche-avax-logo.svg',contract:'0x1ce0c2827e2ef14d5c4f29a091d735a204794041'},
{name:'Amp',title:'AMP',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/amp-amp-logo.svg',contract:'#'},
{name:'Hedera Hashgraph',title:'HBAR',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/hedera-hashgraph-hbar-logo.svg',contract:'#'},
{name:'The Graph',title:'GRT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/the-graph-grt-logo.svg',contract:'#'},
{name:'Dash',title:'DASH',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/dash-dash-logo.svg',contract:'#'},
{name:'Theta Fuel',title:'TFUEL',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/theta-fuel-tfuel-logo.svg',contract:'#'},
{name:'Kusama',title:'KSM',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/kusama-ksm-logo.svg',contract:'#'},
{name:'BitTorrent',title:'BTT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/bittorrent-btt-logo.svg',contract:'0x8595f9da7b868b1822194faed312235e43007b49'},
{name:'Waves',title:'WAVES',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/waves-waves-logo.svg',contract:'#'},
{name:'Elrond',title:'EGLD',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/elrond-egld-egld-logo.svg',contract:'#'},
{name:'Huobi Token',title:'HT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/huobi-token-ht-logo.svg',contract:'#'},
{name:'Chiliz',title:'CHZ',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/Chiliz.png',contract:'#'},
{name:'Decred',title:'DCR',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/decred-dcr-logo.svg',contract:'#'},
{name:'TrueUSD',title:'TUSD',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/trueusd-tusd-logo.svg',contract:'#'},
{name:'Celsius',title:'CEL',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/celsius-cel-logo.svg',contract:'#'},
{name:'NEM',title:'XEM',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/nem-xem-logo.svg',contract:'#'},
{name:'Zcash',title:'ZEC',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/zcash-zec-logo.svg',contract:'0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb'},
{name:'Tezos',title:'XTZ',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/stacks-stx-logo.svg',contract:'#'},
{name:'Stacks',title:'STX',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/compound-comp-logo.svg',contract:'0x715d400f88c167884bbcc41c5fea407ed4d2f8a0'},
{name:'Axie Infinity',title:'AXS',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/axie-sold.png',contract:'0x715d400f88c167884bbcc41c5fea407ed4d2f8a0'},
{name:'yearn.finance',title:'YFI',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/yearn-finance-yfi-logo.svg',contract:'0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e'},
{name:'Decentraland',title:'MANA',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/decentraland-mana-logo.svg',contract:'#'},
{name:'Synthetix',title:'SNX',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/synthetix-network-token-snx-logo.svg',contract:'0x9ac983826058b8a9c7aa1c9171441191232e8404'},
{name:'XinFin Network',title:'XDC',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/xdc-icon.svg',contract:'#'},
{name:'Helium',title:'HNT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/helium-hnt-logo.svg',contract:'#'},
{name:'Enjin Coin',title:'ENJ',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/enjin-coin-enj-logo.svg',contract:'#'},
{name:'Paxos Standard',title:'PAX',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/paxos-standard-pax-logo.svg',contract:'0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094'},
{name:'THORChain',title:'RUNE',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/thorchain-rune-logo.svg',contract:'#'},
{name:'SushiSwap',title:'SUSHI',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/sushiswap-sushi-logo.svg',contract:'#'},
{name:'Holo',title:'HOT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/holo-hot-logo.svg',contract:'#'},
{name:'Quant',title:'QNT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/quant-qnt-logo.svg',contract:'#'},
{name:'Mandala Exchange',title:'Mdex',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/mandala.png',contract:'#'},
{name:'KuCoin Token',title:'KCS',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/kucoin-token-kcs-logo.svg',contract:'#'},
{name:'Basic Attention Token',title:'BAT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/basic-attention-token-bat-logo.svg',contract:'0x101d82428437127bf1608f699cd651e6abf9766e'},
{name:'NEAR Protocol',title:'NEAR',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/near-protocol-near-logo.svg',contract:'0x1fa4a73a3f0133f0025378af00236f3abdee5d63'},
{name:'Flow',title:'FLOW',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/flow-flow-logo.svg',contract:'0xb86abcb37c3a4b64f74f59301aff131a1becc787'},
{name:'Zilliqa',title:'ZIL',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/zilliqa-zil-logo.svg',contract:'#'},
{name:'Bitcoin Gold',title:'BTG',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/bitcoin-gold-btg-logo.svg',contract:'#'},
{name:'Telcoin',title:'TEL',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/telcoin-tel-logo.svg',contract:'#'},
{name:'Bancor',title:'BNT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/bancor-bnt-logo.svg',contract:'#'},
{name:'Harmony',title:'ONE',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/harmony-one-logo.svg',contract:'#'},
{name:'OKB',title:'OKB',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/okb-okb-logo.svg',contract:'#'},
{name:'Revain',title:'REV',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/revain-rev-logo.svg',contract:'#'},
{name:'Celo',title:'CELO',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/celo-celo-logo.svg',contract:'#'},
{name:'HUSD',title:'HUSD',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/husd-husd-logo.svg',contract:'#'},
{name:'Ontology',title:'ONT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/ontology-ont-logo.svg',contract:'0xfd7b3a77848f1c2d67e05e54d78d174a0c850335'},
{name:'DigiByte',title:'DGB',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/digibyte-dgb-logo.svg',contract:'#'},
{name:'Qtum',title:'QTUM',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/qtum-qtum-logo.svg',contract:'#'},
{name:'Horizon',title:'HZ',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/horizon.png',contract:'#'},
{name:'Siacoin',title:'SC',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/siacoin-sc-logo.svg',contract:'#'},
{name:'Curve DAO',title:'CRV',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/curve-dao-token-crv-logo.svg',contract:'#'},
{name:'SwissBorg',title:'CHSB',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/swissborg.svg',contract:'#'},
{name:'UMA',title:'UMA',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/uma-uma-logo.svg',contract:'#'},
{name:'0x',title:'ZRX',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/0x-zrx-logo.svg',contract:'#'},
{name:'Ravencoin',title:'RVN',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/ravencoin-rvn-logo.svg',contract:'#'},
];
for(let i=0;i < list.length;i++){
  const div = document.createElement('div');
  div.classList.add('coinG');
  div.addEventListener('click',function(){
    window.open(`https://bscscan.com/token/${list[i].contract}`)
  })

  const img=document.createElement('img');
  img.src=list[i].img;
  div.appendChild(img);

  const names = document.createElement('div');
  names.innerText=list[i].title;
  div.appendChild(names);

  const arp=document.createElement('div');
  arp.innerHTML='<span>ARP: </span><br><br>'+ list[i].ARP;
  div.appendChild(arp);

  const earned=document.createElement('div');
  earned.innerHTML='<span>Earned: </span><br><br>'+ list[i].earned;
  div.appendChild(earned);

  const stack=document.createElement('div');
  stack.innerHTML='<span>Stacked: </span><br><br>'+ list[i].stacked;
  div.appendChild(stack);

  document.querySelector('.GigapoolCon')
.appendChild(div);

}
}

function buildCoinsO(){
/*list*/
const list =[
  {name:'top100',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
  {name:'testname',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
  {name:'glenty',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
  {name:'glenty',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
  {name:'glenty',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
  {name:'glenty',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
  {name:'glenty',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
  {name:'glenty',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
  {name:'glenty',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
  {name:'glenty',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
  {name:'glenty',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
  {name:'glenty',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
  {name:'glenty',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
  {name:'glenty',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
  {name:'glenty',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
  {name:'glenty',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
  {name:'glenty',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
  {name:'glenty',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
  {name:'glenty',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
  {name:'glenty',img:'./images/top100.svg',ARP:'0%',earned:'0',stacked:'0'},
]



  for(let i=0;i < list.length;i++){
    const div = document.createElement('div');
    div.classList.add('coinO');

    const img=document.createElement('img');
    img.src=list[i].img;
    div.appendChild(img);

    const names = document.createElement('div');
    names.innerText=list[i].name;
    div.appendChild(names);

    const arp=document.createElement('div');
    arp.innerText='ARP: '+ list[i].ARP;
    div.appendChild(arp);

    const earned=document.createElement('div');
    earned.innerText='Earned: '+ list[i].earned;
    div.appendChild(earned);

    const stack=document.createElement('div');
    stack.innerText='Stacked: '+ list[i].stacked;
    div.appendChild(stack);

    document.querySelector('.outCon')
.appendChild(div);

}
}
function homeMc(){
      /*home main */
  document.querySelector('.cont2').childNodes[1].style.marginBottom = '150px';
  document.querySelector('.mobile-container').querySelector('br').remove();
  document.querySelector('.mobile-container').querySelector('br').remove();
  document.querySelector('.mobile-container').childNodes[1].childNodes[2].style.marginTop='10px';
  document.querySelector('h1').remove();
  document.querySelector('.mobile-container').style.gridTemplateColumns = '0%';
  document.querySelector("#secondText").innerText='The #1 AMM and Yield farm on Binance Smart Chain.';
}
function top100Page(){
document.querySelector('.TopPage').style.margin='0px';
document.querySelector('.TopPage').style.paddingTop='55%';
document.querySelector('.Topgrid').style.width='100%';
document.querySelector('.Topgrid').style.gridTemplateColumns='100%';
document.querySelectorAll('img')[4].style.marginBottom='10%'; 
document.querySelector('.coinTop100Container').style.marginTop='-13%';
document.querySelector('.tableH1').style.fontSize='14pt';
document.querySelector('.qunat').innerText='Quantity';
document.querySelector('.tableImg').style.width='100%';

for(let i=0;i < document.querySelectorAll('.coinTop100').length;i++){
  document.querySelectorAll('.coinTop100')[i].style.gridTemplateColumns='15% 10% 10% 20%';
  document.querySelectorAll('.coinTop100 img')[i].style.margin='15% 10% 10% 20%-30% 1px';
}
}

function createFooter(){
  /*footer*/
  const fixedFooter = document.createElement('div');
  fixedFooter.classList.add('fixedFooter'); 
  const TradeM = document.createElement('a');
  const gigapoolM = document.createElement('a');
  const Top100M = document.createElement('a');
  const MoreM = document.createElement('a');

  TradeM.classList.add('footerLinks');
  Top100M.classList.add('footerLinks');
  MoreM.classList.add('footerLinks');
  gigapoolM.classList.add('footerLinks');


  TradeM.setAttribute('href','/trade');
  Top100M.setAttribute('href','/top100');
  gigapoolM.setAttribute('href','/gigapool');


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
  document.querySelector('#root').appendChild(fixedFooter);
}

function createMenuFooter(){
  /*footer*/
  const fixedMenuFooter = document.createElement('div');
  fixedMenuFooter.classList.add('moreMenu'); 
  const docsM = document.createElement('a');
  const githubM = document.createElement('a');
  const FarmsM = document.createElement('a');
  const ipoM = document.createElement('a');



  docsM.classList.add('moreLinks');
  githubM.classList.add('moreLinks');
  FarmsM.classList.add('moreLinks');
  ipoM.classList.add('moreLinks');


  githubM.setAttribute('href','https://github.com/glenty-protocol');
  docsM.setAttribute('href','https://glenty.gitbook.io/glenty/');
  ipoM.setAttribute('href','/ico');
  FarmsM.setAttribute('href','/farms');


  const githubImg = document.createElement('img');
  const docsImg = document.createElement('img');
  const farmsImg = document.createElement('img');
  const ipoImg = document.createElement('img');


  docsImg.setAttribute('src','./images/DOCS.svg');
  ipoImg.setAttribute('src','./images/IPO.svg');
  farmsImg.setAttribute('src','./images/farms.svg');
  githubImg.setAttribute('src','./images/GITHUB.svg');

  docsImg.classList.add('footerImg');
  ipoImg.classList.add('footerImg');
  farmsImg.classList.add('footerImg');
  githubImg.classList.add('footerImg');

  const githubT = document.createElement('p');
  const ipoT = document.createElement('p');
  const docsT = document.createElement('p');
  const farmT = document.createElement('p');

  githubT.innerText='Github';
  docsT.innerText='Docs';
  farmT.innerText='Farms';
  ipoT.innerText='IPO';


  githubM.appendChild(githubImg);
  docsM.appendChild(docsImg);
  ipoM.appendChild(ipoImg);
  FarmsM.appendChild(farmsImg);


  githubM.appendChild(githubT);
  ipoM.appendChild(ipoT);
  docsM.appendChild(docsT);
  FarmsM.appendChild(farmT);

  /*style*/
  /*fixedMenuFooter.style.borderTop='3px solid #989fac';*/
  fixedMenuFooter.style.borderBottom='3px solid #989fac';
  docsM.style.borderBottom='none';

  fixedMenuFooter.appendChild(FarmsM);
  fixedMenuFooter.appendChild(ipoM);
  fixedMenuFooter.appendChild(githubM);
  fixedMenuFooter.appendChild(docsM);

  document.querySelector('#root').appendChild(fixedMenuFooter);

}

window.innerWidth < 900 ? mobileC() : false