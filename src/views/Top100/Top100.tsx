import React,{ useEffect, useState } from 'react'
import Page from 'components/layout/Page'
import Top100 from 'views/Home/components/Top100'


const Top1: React.FC = () => {
  const [dataCoin,setDataCoin] = useState([]);
  const [marketcaptotal,setMarketCap] = useState(0);
  useEffect(()=>{
  const fetchTop100 = async ()=>{
    await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')          
    .then(res=>res.json())
    .then(data=>{
      setDataCoin(data);
  }
)
await fetch('https://cap.glenty.com/marketcap')          
.then(res=>res.json())
.then(dataapi=>{
  setMarketCap(dataapi.market_cap);
  }
)}
fetchTop100();
},[dataCoin,marketcaptotal])
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
              <span id='price'>${coin.current_price.toLocaleString().replace(',','’')}</span>
              </span>
              </div>
              <h6 className='info'>{(coin.market_cap/marketcaptotal*100).toFixed(2)} %</h6>
              <h6 className='infoCenter'>{Math.floor(coin.market_cap/1000000).toLocaleString().replace(',','’')} M</h6>
            </div>
            ))} 
          </div>
    </Page>
  )
}

export default Top1
