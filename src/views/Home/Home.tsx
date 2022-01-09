import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import statsImg from "./stats_background.svg"
import gigaBack from "./giga_background.svg"
import top100Back from "./Top100_background.svg"
import glentyBack from "./glenty_background.svg"
import auditsBack from "./audits_background.svg"
import gigaImg from "./gigapool_img.svg"
import top100Img from "./top100_img.svg"
import glentyImg from "./glenty_img.svg"
import imunefi from "./imunefi.svg"
import solidity from "./solidity.svg"
import certik from "./certik.svg"
import face from "./facebook.svg"
import telegram from "./telegram.svg"
import insta from "./instagram.svg"
import twitter from "./twitter.svg"
import mail from "./mail.svg"
import tiktok from "./tiktok.svg"



const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    height: 165px;
    padding-top: 0;
  }
`
const Row = styled.div`
  align-items: center;
  display:${window.innerWidth>865?"flex":"block"};
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 5%;
`
const RowC = styled.div`
  align-items: center;
  display: ${window.innerWidth>865?"flex":"inline-block"};
  font-size: 14px;
  justify-content: ${window.innerWidth>865?"space-between":"center"};
  text-align:center;
  margin-bottom: 5%;
  width:${window.innerWidth>865?"50%":"100%"};
  margin:15px auto;
`
const CardImage = styled.img`
  margin-bottom: 10%;
  display:inline-block;
  margin:${window.innerWidth>865?"10px auto":"30px 5px"};
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  grid-gap: 24px;
  padding:54px 0px;
  width:${window.innerWidth>865?"80%":"140%"};
  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-gap: 60px;
    padding:180px 164px;

    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
    <Page className='homeCont' >
      <div style={{ color: 'white'}}>
        <div style={{width:window.innerWidth>865?"300%":"100%",background:window.innerWidth>865?`url(${statsImg}) right center / cover no-repeat`: "transparent",marginLeft:window.innerWidth>865?"-80%":"0"}}>
        <Cards className='mobile-container' style={{marginLeft:`${window.innerWidth>865?"23%":"false"}`,width:`${window.innerWidth>865?"40%":"auto"}`,padding:`${window.innerWidth>865?"180px 110px":"0"}`}}>
          <FarmStakingCard />
          <div><CakeStats /></div> 
        </Cards>
        </div>
        
        <div style={{width:window.innerWidth>865?"300%":"auto",background:window.innerWidth>865?`url(${gigaBack}) left center / cover no-repeat`: "transparent",marginLeft:window.innerWidth>865?"-80%":"0"}}>
        <Cards className='mobile-container' style={{marginLeft:`${window.innerWidth>865?"21.5%":"false"}`,width:`${window.innerWidth>865?"50%":"auto"}`}}>
          <div>
            <h1 className="homeTitle">GIGAPOOL</h1>
            <h1 className='sectionText'>Lorem ipsum dolor sit amet, consectetuer 
adipiscing elit, sed diam nonummy nibh 
euismod tincidunt ut laoreet dolore <br />
magna aliquam erat volutpat. Ut wisi 
enim ad minim veniam, quis nostrud <br />
exerci tation ullamcorper suscipit lobortis 
nisl ut aliquip ex ea commodo consequat. <br />
Duis autem vel eum iriure dolor in 
hendrerit in vulputate velit esse molestie <br />
consequat, vel illum dolore eu feugiat 
nulla facilisis at vero eros et accumsan et 
iusto odio dignis</h1>
          </div>
          <div><img src={gigaImg} style={{width:`${window.innerWidth>865?"70%":"100%"}`}} alt='gigapool' /></div> 
        </Cards>
        </div>

        <div style={{width:window.innerWidth>865?"300%":"auto",background:window.innerWidth>865?`url(${top100Back}) left center / cover no-repeat`: "transparent",marginLeft:window.innerWidth>865?"-80%":"0"}}>
        <Cards className='mobile-container' style={{marginLeft:`${window.innerWidth>865?"21.5%":"false"}`,width:`${window.innerWidth>865?"50%":"auto"}`}}>
        <div className='top100Reorder'><img src={top100Img} style={{width:`${window.innerWidth>865?"70%":"100%"}`}} alt='top100' /></div> 
          <div style={{marginLeft:`${window.innerWidth>865?"-30%":"false"}`}}>
            <h1 className="homeTitle" style={{textAlign:"right"}}>Top100</h1>
            <h1 className='sectionText' style={{textAlign:"right"}}>Lorem ipsum dolor sit amet, consectetuer 
adipiscing elit, sed diam nonummy nibh 
euismod tincidunt ut laoreet dolore <br />
magna aliquam erat volutpat. Ut wisi 
enim ad minim veniam, quis nostrud <br />
exerci tation ullamcorper suscipit lobortis 
nisl ut aliquip ex ea commodo consequat. <br />
Duis autem vel eum iriure dolor in 
hendrerit in vulputate velit esse molestie <br />
consequat, vel illum dolore eu feugiat 
nulla facilisis at vero eros et accumsan et 
iusto odio dignis</h1>
          </div>
        </Cards>
        </div>
        <div style={{width:window.innerWidth>865?"300%":"auto",background:window.innerWidth>865?`url(${glentyBack}) left center / cover no-repeat`: "transparent",marginLeft:window.innerWidth>865?"-80%":"0"}}>
        <Cards className='mobile-container' style={{marginLeft:`${window.innerWidth>865?"21.5%":"false"}`,width:`${window.innerWidth>865?"50%":"auto"}`}}>
          <div>
            <h1 className="homeTitle">GLENTY</h1>
            <h1 className='sectionText'>Lorem ipsum dolor sit amet, consectetuer 
adipiscing elit, sed diam nonummy nibh 
euismod tincidunt ut laoreet dolore <br />
magna aliquam erat volutpat. Ut wisi 
enim ad minim veniam, quis nostrud <br />
exerci tation ullamcorper suscipit lobortis 
nisl ut aliquip ex ea commodo consequat. <br />
Duis autem vel eum iriure dolor in 
hendrerit in vulputate velit esse molestie <br />
consequat, vel illum dolore eu feugiat 
nulla facilisis at vero eros et accumsan et 
iusto odio dignis</h1>
          </div>
          <div><img src={glentyImg} style={{width:`${window.innerWidth>865?"70%":"100%"}`}} alt='gigapool' /></div> 
        </Cards>
        </div>

        <div className='audits' style={{width:window.innerWidth>865?"300%":"auto",background:window.innerWidth>865?`url(${auditsBack}) left center / cover no-repeat`: "transparent",marginLeft:window.innerWidth>865?"-80%":"0"}}>
        <div style={{marginLeft:`${window.innerWidth>865?"20.5%":"false"}`,width:`${window.innerWidth>865?"45%":"auto"}`,padding:`${window.innerWidth>865?"180px 164px":"0"}`}}>
        <h1 className="homeTitle" style={{textAlign:"center"}}>OUR AUDITS</h1>
        <br /><br />
        <Row>
        <div style={{textAlign:"center"}}><CardImage src={imunefi} alt="imunefi" width={window.innerWidth>865?200:80} height={window.innerWidth>865?200:80} /> <br className='removeonphone'  /><br className='removeonphone'  /><br className='removeonphone'  /><h1 style={{fontSize:`${window.innerWidth>865?"34pt":"18pt"}`, color:'#788cff'}}>IMUNEFI</h1><br className='removeonphone'/><br/><h1 style={{fontSize:`${window.innerWidth>865?"24pt":"12pt"}`, color:'rgb(208 210 217 / 50%)'}}>(Pending)</h1></div>
        <div style={{textAlign:"center"}}><CardImage src={solidity} alt="solidity" width={window.innerWidth>865?200:80} height={window.innerWidth>865?200:80} /><br className='removeonphone'  /><br className='removeonphone'  /><br className='removeonphone'  /><h1 style={{fontSize:`${window.innerWidth>865?"34pt":"18pt"}`, color:'#788cff'}}>SOLIDITY</h1><br className='removeonphone' /><br/><h1 style={{fontSize:`${window.innerWidth>865?"24pt":"12pt"}`, color:'rgb(208 210 217 / 50%)'}}>(Approved)</h1></div>
        <div style={{textAlign:"center"}}><CardImage src={certik} alt="certik" width={window.innerWidth>865?200:80} height={window.innerWidth>865?200:80} /><br className='removeonphone'  /><br className='removeonphone'  /><br className='removeonphone'  /><h1 style={{fontSize:`${window.innerWidth>865?"34pt":"18pt"}`, color:'#788cff'}}>CERTIK</h1><br className='removeonphone' /><br/><h1 style={{fontSize:`${window.innerWidth>865?"24pt":"12pt"}`, color:'rgb(208 210 217 / 50%)'}}>(Pending)</h1></div>
        </Row>
        </div>
        </div>

        <div style={{width:window.innerWidth>865?"300%":"auto", marginLeft:window.innerWidth>865?"-80%":"0"}}>
          <div style={{marginLeft:`${window.innerWidth>865?"20.5%":"false"}`,width:`${window.innerWidth>865?"45%":"auto"}`,padding:`${window.innerWidth>865?"180px 164px":"50px 0px"}`}}>
          <h1 className="homeTitle" style={{textAlign:"center",color:"#788cff",marginBottom:'25px'}}>CONTACT</h1>
          <RowC>
        <div style={{display:"inline-block"}}><CardImage src={face} alt="facebook" width={window.innerWidth>865?80:30} height={window.innerWidth>865?80:30} /></div>
        <div style={{display:"inline-block"}}><a href="https://t.me/glenty_com" target="_blank" rel="noreferrer"><CardImage src={telegram} alt="telegram" width={window.innerWidth>865?80:30} height={window.innerWidth>865?80:30} /></a></div>
        <div style={{display:"inline-block"}}><a href="https://www.instagram.com/glenty_com/" target="_blank" rel="noreferrer"><CardImage src={insta} alt="instagram" width={window.innerWidth>865?80:30} height={window.innerWidth>865?80:30} /></a></div>
        <div style={{display:"inline-block"}}><a href="https://twitter.com/Glenty_com" target="_blank" rel="noreferrer"><CardImage src={twitter} alt="twitter" width={window.innerWidth>865?80:30} height={window.innerWidth>865?80:30} /></a></div>
        <div style={{display:"inline-block"}}><a href="https://www.tiktok.com/@glenty_com" target="_blank" rel="noreferrer"><CardImage src={tiktok} alt="tiktok" width={window.innerWidth>865?80:30} height={window.innerWidth>865?80:30} /></a></div>
        <div style={{display:"inline-block"}}><a href="mailto:Glenty.com@gmail.com" target="_blank" rel="noreferrer"><CardImage src={mail} alt="mail" width={window.innerWidth>865?80:30} height={window.innerWidth>865?80:30} /></a></div>
        </RowC>
        </div>
        </div>
      </div>
    </Page>
    </>
  )
}

export default Home
