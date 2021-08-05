import React from 'react'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'

import Top100 from 'views/Home/components/Top100'

const Top1: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Page style={{paddingTop: '20%',width:'100%',margin:'auto 15%'}}>
        <div style={{width: '60%', display:'grid',gridTemplateColumns:'100% 60%', gridGap:'5%',marginTop:'-30%'}}>
          <Top100 />
          <div>
            <div style={{backgroundColor:'rgba(120, 140, 255, 0.9)',padding:'10px 15px',borderTopRightRadius: '20px',borderTopLeftRadius: '20px'}}><h1 style={{textAlign:'center',color:'white',fontSize:'20pt'}}>CRYPTOS PARTS</h1></div>
            <div style={{backgroundColor:'rgba(49, 39, 131, 0.9)',borderBottomRightRadius: '20px',borderBottomLeftRadius: '20px'}}>
              <img style={{height:'250px',width:'350px',margin:'55px 15px'}} src='./images/Fichier 5.svg' alt='top5'/>
              </div>  
          </div>
          </div>
          <div style={{display:'grid',height:'1050px',marginTop:'30px'}}>
            <div style={{display:'grid',gridTemplateColumns:"40% 20% 20% 10% 10%",backgroundColor:'rgba(120, 140, 255, 0.9)',height:'50%',paddingTop:'4%',borderTopRightRadius: '20px',borderTopLeftRadius: '20px',marginBottom:'5%'}}>
              <h1 style={{paddingLeft:'10%',color:'white',fontSize:'30pt'}}>TOP100 LIST</h1>
              <h6 style={{color:'white',fontWeight:'lighter'}}>Market cap % </h6>
              <h6 style={{color:'white',fontWeight:'lighter'}}>In GigaPool quantity</h6>
              <h6 style={{color:'white',textAlign:'center',fontWeight:'lighter'}}>APY</h6>
              <h6 style={{color:'white',textAlign:'center',fontWeight:'lighter'}}>Price</h6>
              </div>

            <div style={{display:'grid',gridTemplateColumns:"40% 20% 20% 10% 10%",backgroundColor:'rgba(49, 39, 131, 0.9)',height:'100px',marginTop:'-10%'}}>
            <h1 style={{paddingLeft:'3%',color:'white',fontSize:'20pt',marginTop:'30px',fontWeight:'lighter'}}>1<span style={{marginLeft:'10%'}}>|</span><span style={{marginLeft:'10px',color:'rgb(218, 165, 32)'}}>BTC</span></h1>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>53.00% </h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>20</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
            </div>
            <div style={{display:'grid',gridTemplateColumns:"40% 20% 20% 10% 10%",backgroundColor:'rgba(49, 39, 131, 0.9)',height:'100px',marginTop:'-10%'}}>
            <h1 style={{paddingLeft:'3%',color:'white',fontSize:'20pt',marginTop:'30px',fontWeight:'lighter'}}>2<span style={{marginLeft:'10%'}}>|</span><span style={{marginLeft:'10px',color:'rgb(218, 165, 32)'}}>ETH</span></h1>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>90.00% </h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>20</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
            </div>
            <div style={{display:'grid',gridTemplateColumns:"40% 20% 20% 10% 10%",backgroundColor:'rgba(49, 39, 131, 0.9)',height:'100px',marginTop:'-10%'}}>
            <h1 style={{paddingLeft:'3%',color:'white',fontSize:'20pt',marginTop:'30px',fontWeight:'lighter'}}>3<span style={{marginLeft:'10%'}}>|</span><span style={{marginLeft:'10px',color:'rgb(218, 165, 32)'}}>BNB</span></h1>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>90.00% </h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>20</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
            </div>
            <div style={{display:'grid',gridTemplateColumns:"40% 20% 20% 10% 10%",backgroundColor:'rgba(49, 39, 131, 0.9)',height:'100px',marginTop:'-10%'}}>
            <h1 style={{paddingLeft:'3%',color:'white',fontSize:'20pt',marginTop:'30px',fontWeight:'lighter'}}>4<span style={{marginLeft:'10%'}}>|</span><span style={{marginLeft:'10px',color:'rgb(218, 165, 32)'}}>TETHER</span></h1>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>90.00% </h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>20</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
            </div>
            <div style={{display:'grid',gridTemplateColumns:"40% 20% 20% 10% 10%",backgroundColor:'rgba(49, 39, 131, 0.9)',height:'100px',marginTop:'-10%'}}>
            <h1 style={{paddingLeft:'3%',color:'white',fontSize:'20pt',marginTop:'30px',fontWeight:'lighter'}}>5<span style={{marginLeft:'10%'}}>|</span><span style={{marginLeft:'10px',color:'rgb(218, 165, 32)'}}>BNB</span></h1>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>90.00% </h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>20</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
            </div>
            <div style={{display:'grid',gridTemplateColumns:"40% 20% 20% 10% 10%",backgroundColor:'rgba(49, 39, 131, 0.9)',height:'100px',marginTop:'-10%'}}>
            <h1 style={{paddingLeft:'3%',color:'white',fontSize:'20pt',marginTop:'30px',fontWeight:'lighter'}}>6<span style={{marginLeft:'10%'}}>|</span><span style={{marginLeft:'10px',color:'rgb(218, 165, 32)'}}>BNB</span></h1>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>90.00% </h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>20</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
            </div>
            <div style={{display:'grid',gridTemplateColumns:"40% 20% 20% 10% 10%",backgroundColor:'rgba(49, 39, 131, 0.9)',height:'100px',marginTop:'-10%'}}>
            <h1 style={{paddingLeft:'3%',color:'white',fontSize:'20pt',marginTop:'30px',fontWeight:'lighter'}}>7<span style={{marginLeft:'10%'}}>|</span><span style={{marginLeft:'10px',color:'rgb(218, 165, 32)'}}>BNB</span></h1>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>90.00% </h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>20</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
            </div>
            <div style={{display:'grid',gridTemplateColumns:"40% 20% 20% 10% 10%",backgroundColor:'rgba(49, 39, 131, 0.9)',height:'100px',marginTop:'-10%'}}>
            <h1 style={{paddingLeft:'3%',color:'white',fontSize:'20pt',marginTop:'30px',fontWeight:'lighter'}}>8<span style={{marginLeft:'10%'}}>|</span><span style={{marginLeft:'10px',color:'rgb(218, 165, 32)'}}>BNB</span></h1>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>90.00% </h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>20</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
            </div>
            <div style={{display:'grid',gridTemplateColumns:"40% 20% 20% 10% 10%",backgroundColor:'rgba(49, 39, 131, 0.9)',height:'100px',marginTop:'-10%'}}>
            <h1 style={{paddingLeft:'3%',color:'white',fontSize:'20pt',marginTop:'30px',fontWeight:'lighter'}}>9<span style={{marginLeft:'10%'}}>|</span><span style={{marginLeft:'10px',color:'rgb(218, 165, 32)'}}>BNB</span></h1>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>90.00% </h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>20</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
            </div>
            <div style={{display:'grid',gridTemplateColumns:"40% 20% 20% 10% 10%",backgroundColor:'rgba(49, 39, 131, 0.9)',height:'100px',marginTop:'-10%',borderBottomRightRadius: '20px',borderBottomLeftRadius: '20px'}}>
            <h1 style={{paddingLeft:'3%',color:'white',fontSize:'20pt',marginTop:'30px',fontWeight:'lighter'}}>10<span style={{marginLeft:'8%'}}>|</span><span style={{marginLeft:'10px',color:'rgb(218, 165, 32)'}}>BNB</span></h1>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>90.00% </h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',fontWeight:'lighter'}}>20</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
              <h6 style={{color:'white',marginTop:'30px',fontSize:'20pt',textAlign:'center',fontWeight:'lighter'}}>10</h6>
            </div>
            
          </div>
    </Page>
  )
}

export default Top1
