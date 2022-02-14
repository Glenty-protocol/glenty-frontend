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
            <h1 className='sectionText'>Gigapool — transforming the crypto-trading landscape <br /><br />
Liquidity pools on decentralized exchanges like Uniswap and Pancakeswap enable cryptos to be traded. In addition, you own the private key to your cryptos at all times. Nevertheless, only two cryptos may be exchanged in the liquidity pools, so you&apos;ll have to make a lot of transactions to obtain the token you desire. <br /><br />
Gigapool, which comprises the 100 largest cryptocurrencies, appears as a truly decentralized answer to this issue. This platform makes it possible to exchange any token for another in just one transaction.</h1>
          </div>
          <div><img src={gigaImg} style={{width:`${window.innerWidth>865?"70%":"100%"}`}} alt='gigapool' /></div> 
        </Cards>
        </div>

        <div style={{width:window.innerWidth>865?"300%":"auto",background:window.innerWidth>865?`url(${top100Back}) left center / cover no-repeat`: "transparent",marginLeft:window.innerWidth>865?"-80%":"0"}}>
        <Cards className='mobile-container' style={{marginLeft:`${window.innerWidth>865?"21.5%":"false"}`,width:`${window.innerWidth>865?"50%":"auto"}`}}>
        <div className='top100Reorder'><img src={top100Img} style={{width:`${window.innerWidth>865?"70%":"100%"}`}} alt='top100' /></div> 
          <div style={{marginLeft:`${window.innerWidth>865?"-30%":"false"}`}}>
            <h1 className="homeTitle" style={{textAlign:"right"}}>Top100</h1>
            <h1 className='sectionText' style={{textAlign:"right"}}>Overall, the TOP100 Token is indexed in real-time to the market capitalization of the top 100 cryptocurrencies. You are investing in the whole market by purchasing it, since your investment will be equally distributed among the Gigapool&apos;s cryptos.<br /><br />
By stacking the TOP100 token, passive income is generated via transaction fees. If a new cryptocurrency emerges, it will instantly supersede the smallest existing one. <br /><br />
Never miss out on a new coin and always get it at the greatest price. Investing in TOP100 implies a belief in the continued growth of cryptos and the potential of new tokens seizing dominance.</h1>
          </div>
        </Cards>
        </div>
        <div style={{width:window.innerWidth>865?"300%":"auto",background:window.innerWidth>865?`url(${glentyBack}) left center / cover no-repeat`: "transparent",marginLeft:window.innerWidth>865?"-80%":"0"}}>
        <Cards className='mobile-container' style={{marginLeft:`${window.innerWidth>865?"21.5%":"false"}`,width:`${window.innerWidth>865?"50%":"auto"}`}}>
          <div>
            <h1 className="homeTitle">GLENTY</h1>
            <h1 className='sectionText'>The Glenty coin serves as the foundation for the Glenty ecosystem. Not only will it serve as a governance token, but it will also enable you to vote on future initiatives, collaborations, and the trajectory we want to pursue. Furthermore, you may stack it and earn interest. <br /><br />
Glenty Tokens will be available in an initial supply of 100,000,000. Stack any cryptocurrency in the Gigapool and you&apos;ll get Glenty coins in return.</h1>
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
        <div style={{textAlign:"center"}}><CardImage src={solidity} alt="solidity" width={window.innerWidth>865?200:80} height={window.innerWidth>865?200:80} /><br className='removeonphone'  /><br className='removeonphone'  /><br className='removeonphone'  /><h1 style={{fontSize:`${window.innerWidth>865?"34pt":"18pt"}`, color:'#788cff'}}>SOLIDITY</h1><br className='removeonphone' /><br/><h1 style={{fontSize:`${window.innerWidth>865?"24pt":"12pt"}`, color:'rgb(208 210 217 / 50%)'}}>(Pending)</h1></div>
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
