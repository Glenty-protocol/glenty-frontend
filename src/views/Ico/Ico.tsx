import React from 'react'
import Page from 'components/layout/Page'

import Top100 from 'views/Home/components/Top100'
import { Grid } from 'react-feather'

const Top1: React.FC = () => {

  return (
    <Page className='IcoPage' style={{paddingTop: '20%'}}>
        <div className='containerIco' style={{display:'grid',gridTemplateColumns:'35% 55%',gridGap:'10%'}}>
            <div>
              <h1 style={{color:'white',fontSize:'54pt',fontFamily:'montserrat'}}>Join the largest Defi ICO in 2021</h1>
              <button className='buttonone' style={{backgroundColor:'rgba(49, 39, 131, 0.9)',marginTop:'10px',textAlign:'center',width:'250px',padding:'1px',borderRadius:'10px',color:'white',fontSize:'16pt',border:'none',cursor:'pointer',height:'12%'}} type='button'>Join the Glenty ICO</button>
              <br />
              <button className='buttontwo' style={{backgroundColor:'rgb(255, 204, 51)',textAlign:'center',width:'150px',padding:'1px',borderRadius:'10px',color:'white',fontSize:'16pt',border:'none',marginTop:'10px',cursor:'pointer',height:'10%'}} type='button'>Buy Tokens</button>
            </div>
            <div className='blockIco' style={{display:'grid', gridTemplateRows:'35% 25% 50% 20%',height:'110%'}}>
                <div style={{backgroundColor:'rgba(113 98 236 / 90%)',display:'grid',gridTemplateColumns:'40% 30%',gridGap:'30%', height:'100px',borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}}>
                    <img className='logoICO' src='./images/GLENTY_WHITE_LOGO.png' style={{ height:'75px' , margin:'10px'}} alt='glenty'/>
                    <div className='phase' style={{backgroundColor:'rgba(49, 39, 131, 0.9)',textAlign:'center',width:'180px',paddingTop:'10%',margin:'20px auto',borderRadius:'65px',color:'white',fontSize:'10pt',height:'50%'}}>currently on phase 1</div>
                </div>
                <div className='ipoHalf' style={{paddingTop:'30px',paddingLeft:'10px',backgroundColor:'rgba(49, 39, 131, 0.9)',paddingBottom:'50px',marginTop:'-70px'}}>
                  <h1 style={{color:'white',fontSize:'30px'}}>Launchpad Phase 1/30 is live </h1>
                  <p style={{color:'white',marginTop:'10px',fontSize:'15px'}}>Price of <span style={{color:'rgb(218, 165, 32)'}}>20 cts</span> per <span style={{color:'rgb(218, 165, 32)'}}>1Glenty</span></p>
                </div>
                <div style={{paddingTop:'30px',backgroundColor:'rgba(49, 39, 131, 0.9)',paddingBottom:'50px'}}>
                  <div style={{background:'url(./images/under_cubes_gradient.svg)',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
                    <span className='whieCubes' style={{color:'white',paddingLeft:'60px',paddingRight:'5px'}}>$0</span> <img src='./images/white_CUBES.svg' style={{width:'60%',height:'20%'}} alt='level'/> <span style={{color:'white',paddingRight:'5px'}}>$2.400k USD</span></div>
                </div>
                <div style={{paddingTop:'30px',paddingLeft:'10px',backgroundColor:'rgba(49, 39, 131, 0.9)',marginTop:'-40px',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
                <h1 style={{color:'white',fontSize:'30px'}}>$1,559,978 USD raised </h1>
                <p className='smallP' style={{color:'white',marginTop:'10px',fontSize:'15px'}}><span style={{color:'rgb(218, 165, 32)'}}>$60,481,856 USD</span> raised in total</p>
                <p className='smallP' style={{color:'white',float:'right',marginRight:'10px',fontSize:'15px'}}>Price per glenty in phase 30<br /> will be $0.60cts</p>
                </div>
            </div>
          </div>
          <div className='icons' style={{color:'white',float:'right',marginTop:'250px',marginRight:'230px',width:'400px',backgroundColor:'rgba(113 98 236 / 90%)',padding:'15px',borderRadius:'25px'}}>
          <p style={{color:'white',paddingLeft:'10px',paddingBottom:'10px'}}>Invest in the Glenty Token</p>
          <div>
            <img className='iconCoinICO' src='./images/icons_IPO-01.svg' style={{ height:'52px',width:'52px',paddingLeft:'5px'}} alt='icon'/>
            <img className='iconCoinICO' src='./images/icons_IPO-02.svg' style={{ height:'52px',width:'52px',paddingLeft:'5px'}}  alt='icon'/>
            <img className='iconCoinICO' src='./images/icons_IPO-03.svg' style={{ height:'52px',width:'52px',paddingLeft:'5px'}}  alt='icon'/>
            <img className='iconCoinICO' src='./images/icons_IPO-04.svg' style={{ height:'52px',width:'52px',paddingLeft:'5px'}}  alt='icon'/>
            <img className='iconCoinICO' src='./images/icons_IPO-05.svg' style={{ height:'52px',width:'52px',paddingLeft:'5px'}}  alt='icon'/>
            <img className='iconCoinICO' src='./images/icons_IPO-06.svg' style={{ height:'52px',width:'52px',paddingLeft:'5px'}}  alt='icon'/>
            <img className='iconCoinICO' src='./images/icons_IPO-07.svg' style={{ height:'52px',width:'52px',paddingLeft:'5px'}}  alt='icon'/>

          </div>
          </div>
    </Page>
  )
}

export default Top1