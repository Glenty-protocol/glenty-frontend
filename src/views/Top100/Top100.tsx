import React from 'react'
import Page from 'components/layout/Page'

import Top100 from 'views/Home/components/Top100'

const Top1: React.FC = () => {
  const top100List=
[{name:'Bitcoin',title:'BTC',apy:10,quantity:20,price:20,img:'./images/gigapoolIcons/bitcoin-btc-logo.svg',cap:20},
{name:'Ethereum',title:'ETH',apy:10,quantity:20,price:20,img:'./images/gigapoolIcons/ethereum-eth-logo.svg',cap:20},
{name:'Tether',title:'Tether',apy:10,quantity:20,price:20,img:'./images/gigapoolIcons/tether-usdt-logo.svg',cap:20},
{name:'Binance Coin',title:'BNB',apy:10,quantity:20,price:20,img:'./images/gigapoolIcons/binance-coin-bnb-logo.svg',cap:20},
{name:'cardano',title:'ADA',apy:10,quantity:20,price:20,img:'./images/gigapoolIcons/cardano-ada-logo.svg',cap:20},
{name:'USD Coin',title:'USDC',apy:10,quantity:20,price:20,img:'./images/gigapoolIcons/usd-coin-usdc-logo.svg',cap:20},
{name:'Venus XRP',title:'vXRP',apy:10,quantity:20,price:20,img:'./images/gigapoolIcons/xrp-xrp-logo.svg',cap:20},
{name:'Doge Coin',title:'Doge',apy:10,quantity:20,price:20,img:'./images/gigapoolIcons/dogecoin-doge-logo.svg',cap:20},
{name:'Polkadot',title:'DOT',apy:10,quantity:20,price:20,img:'./images/gigapoolIcons/polkadot-new-dot-logo.svg',cap:20},
{name:'Binance USD',title:'BUSD',apy:10,quantity:20,price:20,img:'./images/gigapoolIcons/binance-usd-busd-logo.svg',cap:20},
]

  return (
    <Page className='TopPage' style={{paddingTop: '20%',width:'100%',margin:'auto 15%',marginTop:'5%'}}>
        <div className='Topgrid' style={{width: '60%', display:'grid',gridTemplateColumns:'100% 60%', gridGap:'5%',marginTop:'-30%'}}>
          <Top100 />
          </div>
          <div className='table' style={{display:'grid',height:'1050px',marginTop:'30px'}}>
            <div style={{display:'grid',gridTemplateColumns:"40% 20% 20% 10% 10%",backgroundColor:'rgba(120, 140, 255, 0.9)',height:'50%',paddingTop:'4%',borderTopRightRadius: '20px',borderTopLeftRadius: '20px',marginBottom:'5%'}}>
              <h1 className='tableH1' style={{paddingLeft:'10%',color:'white',fontSize:'30pt'}}>TOP100 LIST</h1>
              <h6 className='tableH6Header' style={{color:'white',fontWeight:'lighter'}}>Market cap % </h6>
              <h6 className='tableH6Header qunat' style={{color:'white',fontWeight:'lighter'}}>In GigaPool quantity</h6>
              <h6 className='tableH6Header' style={{color:'white',textAlign:'center',fontWeight:'lighter'}}>APY</h6>
              <h6 className='tableH6Header' style={{color:'white',textAlign:'center',fontWeight:'lighter'}}>Price</h6>
              </div>

            {top100List.map((coin)=>(
              <div className='coinTop100Container' key={coin.title}>
            <div className='coinTop100'>
              <span>{top100List.indexOf(coin) + 1}</span>
              <span style={{marginLeft:'10%'}}>|</span>
              <img className='tableImg' src={coin.img} alt={coin.name} />
              <span className='coinNameTable' style={{marginLeft:'10px',color:'rgb(218, 165, 32)'}}>
                {coin.title}
              </span>
              </div>
              <h6 className='info'>{`${coin.cap} %`} </h6>
              <h6 className='info'>{coin.quantity}</h6>
              <h6 className='infoCenter'>{coin.apy}</h6>
              <h6 className='infoCenter'>{coin.price}</h6>
            </div>
            ))} 
          </div>
    </Page>
  )
}

export default Top1
