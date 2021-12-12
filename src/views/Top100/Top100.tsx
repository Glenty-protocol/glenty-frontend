import React from 'react'
import Page from 'components/layout/Page'
import Top100 from 'views/Home/components/Top100'

let dataCoin = [];
let marketcaptotal = 2391233413354;
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')          
.then(res=>res.json())
.then(data=>{
  dataCoin = data
  }
)
fetch('https://cap.glenty.com/marketcap')          
.then(res=>res.json())
.then(dataapi=>{
  marketcaptotal = dataapi.market_cap
  }
)
console.log(dataCoin)
const Top1: React.FC = () => {
  return (
    <Page className='TopPage' style={{paddingBottom:'8%'}}>
        <div className='Topgrid'>
          <Top100 />
          </div>
          <div className='table'>
            <div className='tableChild'>
              <h1 className='tableH1' style={{paddingLeft:'10%',color:'white',fontSize:'30pt'}}>TOP100 LIST</h1>
              <h6 className='tableH6Header' style={{color:'white',fontWeight:'lighter'}}>Market cap % </h6>
              <h6 className='tableH6Header qunat' style={{color:'white',fontWeight:'lighter',textAlign:'center'}}>Market Cap</h6>
              </div>
            {dataCoin.map((coin)=>(
              <div className='coinTop100Container' key={coin.id}>
            <div className='coinTop100'>
              <span>{dataCoin.indexOf(coin) + 1}</span>
              <img className='tableImg' src={coin.image} alt={coin.name} />
              <span className='coinNameTable' style={{marginLeft:'10px',color:'rgb(218, 165, 32)'}}>
                {coin.symbol.toUpperCase()}
                <br />
              <span id='price'>${coin.current_price}</span>
              </span>
              </div>
              <h6 className='info'>{(coin.market_cap/marketcaptotal*100).toFixed(2)} %</h6>
              <h6 className='infoCenter'>{Math.floor(coin.market_cap/1000000).toLocaleString()} M</h6>
            </div>
            ))} 
          </div>
    </Page>
  )
}

export default Top1
