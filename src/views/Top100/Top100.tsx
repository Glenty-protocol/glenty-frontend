import React from 'react'
import Page from 'components/layout/Page'
import Top100 from 'views/Home/components/Top100'
import top100Config from './config'

const Top1: React.FC = () => {
  return (
    <Page className='TopPage'>
        <div className='Topgrid'>
          <Top100 />
          </div>
          <div className='table'>
            <div className='tableChild'>
              <h1 className='tableH1' style={{paddingLeft:'10%',color:'white',fontSize:'30pt'}}>TOP100 LIST</h1>
              <h6 className='tableH6Header' style={{color:'white',fontWeight:'lighter'}}>Market cap % </h6>
              <h6 className='tableH6Header qunat' style={{color:'white',fontWeight:'lighter'}}>In GigaPool quantity</h6>
              <h6 className='tableH6Header' style={{color:'white',textAlign:'center',fontWeight:'lighter'}}>APY</h6>
              </div>

            {top100Config.map((coin)=>(
              <div className='coinTop100Container' key={top100Config.indexOf(coin)}>
            <div className='coinTop100'>
              <span>{top100Config.indexOf(coin) + 1}</span>
              <span style={{marginLeft:'10%'}}>|</span>
              <img className='tableImg' src={coin.img} alt={coin.lpSymbol} />
              <span className='coinNameTable' style={{marginLeft:'10px',color:'rgb(218, 165, 32)'}}>
                {coin.tokenSymbol}
                <br />
              <span id='price'>{coin.price}</span>
              </span>
              </div>
              <h6 className='info'>0</h6>
              <h6 className='info'>0</h6>
              <h6 className='infoCenter'>0</h6>
            </div>
            ))} 
          </div>
    </Page>
  )
}

export default Top1
