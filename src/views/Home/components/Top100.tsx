/* eslint-disable */
import { useState, useEffect } from 'react'
import { Heading, ArrowDownIcon, IconButton } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useWeb3 from 'hooks/useWeb3'
import { useWeb3React } from '@web3-react/core'
import { AbiItem } from 'web3-utils'
import useToast from 'hooks/useToast'
import Abi from './abi.json'
import top100img from './top100.svg'

const config = {
  buyContractAddressTop100: "0x7475E30e90ff55d627cAdfcb4e869d7d203B1b98"
}


const Top100 = () => {
  const { t } = useTranslation()
  const { toastError, toastSuccess } = useToast()
  const [count, setCount] = useState(0);
  const [top100api, setTop] = useState(0);
  const [bnbprice, setBnb] = useState(0);
  const { account } = useWeb3React();
  const web3 = useWeb3();

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'coinpaprika1.p.rapidapi.com',
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_MARKETCAP}`
      }
    };

  
    function fetchData(){
      fetch('https://coinpaprika1.p.rapidapi.com/global', options)          
      .then(res=>res.json())
      .then(dataapi=>setTop(dataapi.market_cap_usd))

      fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd')          
      .then(res=>res.json())
      .then(binprice=>setBnb(binprice.binancecoin.usd))
    }

fetchData()

  },[])

  return (
    <>
    <div style={{ backgroundColor: 'rgba(49,39,131,0.9)', borderRadius: '24px' }} className='mobileTop100'>
      <Heading scale="xl" mb="24px" style={{ textAlign: 'center', backgroundColor: '#030e33', borderRadius: '24px 24px 0px 0px', padding: '24px', justifyContent: 'space-between' }}>
        <div style={{ color: 'white' }}>
          <b className='homeSmall' style={{lineHeight: '2'}}>Buy Top100</b>
        </div>
      </Heading>
      <div style={{padding: '24px', justifyContent: "space-around"}}>
        <div className='top100module'>
        <div className='buytitle' style={{color:'white'}}>Buy Price: <br />{(top100api/1000000000000).toFixed(3).toLocaleString().replace(',','’')} USD </div>
        <img className='top100img' alt="top100 token" src={top100img} style={{width:'150px'}} />
        </div>
        <div className='top100page'>
          <div><b style={{color: 'white',fontSize: '16pt'}}>BNB amount</b></div><br />
          <div style={{borderRadius: '24px',display:'flex',flexFlow:'row nowrap',background:'rgb(28 25 81)',height:'100px'}}>
          <div style={{color: "white", marginLeft: "24px", fontSize: "14px", marginTop: "20px" , zIndex: 9}}>From</div>
          <input onChange={evt => { setCount(Number(evt.target.value)) }} style={{ borderRadius: '24px',position:'relative',height:"30px", fontSize: '18px', marginLeft: '-30px', width: '100%',background:'rgb(28 25 81)',color:'rgb(239 186 47)',marginTop:'50px'}} placeholder="0" type="number" min="0" inputMode="numeric" pattern="[0-9]*" />
          <img className='top100img' alt="top100 token" src='./images/gigapoolIcons/binance-coin-bnb-logo.svg' style={{width:'35px',marginTop:'30px'}} />
          <div style={{color:'rgb(243, 186, 47)',fontSize:'16px',margin:'60px 24px 0 10px'}}>BNB</div>
          <br /><br />
          </div>
          <br />
          <IconButton
                      variant="tertiary"
                      style={{ borderRadius: '50%',display:'block',margin:'auto',background:"transparent" }}
                      size="sm"
                    >
                      <ArrowDownIcon color="gray" width="24px" />
                    </IconButton>
                    <br />
          <div><b style={{color: 'white',fontSize: '16pt'}}>Top100 amount</b></div><br />
          <div style={{borderRadius: '24px',display:'flex',flexFlow:'row nowrap',background:'rgb(28 25 81)',height:'100px'}}>
          <div style={{color: "white", marginLeft: "24px", fontSize: "14px", marginTop: "20px" , zIndex: 9}}>To</div>
          <input onChange={evt => { setCount(Number(evt.target.value)) }} style={{ borderRadius: '24px',position:'relative',height:"30px", fontSize: '18px', marginLeft: '-15px', width: '100%',background:'rgb(28 25 81)',color:'rgb(239 186 47)',marginTop:'50px'}} placeholder="0" type="number" disabled value={(count /bnbprice)} />
          <img className='top100img' alt="top100 token" src={top100img} style={{width:'35px',marginTop:'40px'}} />
          <div style={{color:'rgb(243, 186, 47)',fontSize:'16px',margin:'60px 24px 0 10px'}}>TOP100</div>
          <br /><br />
          </div>          <br /><br />
          <div onClick={() => {
          if (account && count > 0) {
            console.log("conf", Abi as AbiItem[], config.buyContractAddressTop100);
            const buyContract = new web3.eth.Contract(
              Abi as AbiItem[],
              config.buyContractAddressTop100
            );

            buyContract.methods
              .buyTokens(account)
              .send({
                from: account,
                value: web3.utils.toWei((count).toString(), "ether"),
                gas: "220000",
              })
              .on("receipt", function (data, error) {
                console.log(data);
              });
            toastSuccess(t('Purchase confirmation in wallet'), t('Purchased tokens will arrive to you after you confirm transaction in your wallet'))
          }
          else {
            toastError(
              t('Could not be bough'),
              t('Either connect your wallet first or make sure you buy more than 0,0000000001 tokens.'),
            )
          }
        }} onKeyDown={() => console.log('amount of tokens:', count)} className='homeSmallBig' style={{ backgroundColor: '#FFCC33', borderRadius: '24px', color: 'rgba(49, 39, 131, 0.9)', cursor: 'pointer', fontSize: '16px', textAlign: 'center', margin: '20px 2px 20px auto', padding: '12px'}}>BUY TOP100</div>
        </div>
      </div>
    </div>

    <div style={{ backgroundColor: 'rgba(49,39,131,0.9)', borderRadius: '24px' }} className='deskTop100'>
      <Heading scale="xl" mb="24px" style={{ textAlign: 'center', backgroundColor: '#030e33', borderRadius: '24px 24px 0px 0px', padding: '24px', justifyContent: 'space-between' }}>
        <div style={{ color: 'white' }}>
          <b className='homeSmall' style={{lineHeight: '2'}}>Buy Top100</b>
        </div>
      </Heading>
      <div style={{padding: '10px 24px', justifyContent: "space-around"}}>
        <div className='top100module'>
        <img className='top100img' alt="top100 token" src={top100img} style={{width:'200px'}} />
        <div className='buytitle' style={{color:'white'}}><span id='buypricelite'>Buy Price:</span> <br />{(top100api/1000000000000).toFixed(3).toLocaleString().replace(',','’')} USD </div>
        <div onClick={() => {
          if (account && count > 0) {
            console.log("conf", Abi as AbiItem[], config.buyContractAddressTop100);
            const buyContract = new web3.eth.Contract(
              Abi as AbiItem[],
              config.buyContractAddressTop100
            );

            buyContract.methods
              .buyTokens(account)
              .send({
                from: account,
                value: web3.utils.toWei((count).toString(), "ether"),
                gas: "220000",
              })
              .on("receipt", function (data, error) {
                console.log(data);
              });
            toastSuccess(t('Purchase confirmation in wallet'), t('Purchased tokens will arrive to you after you confirm transaction in your wallet'))
          }
          else {
            toastError(
              t('Could not be bough'),
              t('Either connect your wallet first or make sure you buy more than 0,0000000001 tokens.'),
            )
          }
        }} onKeyDown={() => console.log('amount of tokens:', count)} className='homeSmallBig' style={{ backgroundColor: '#FFCC33', borderRadius: '24px', color: 'rgba(49, 39, 131, 0.9)', cursor: 'pointer', fontSize: '20px', textAlign: 'center', margin: '20px 2px 20px auto', padding: '19px',height:'35%',width:'120%'}}>BUY TOP100</div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'45% 45%', gridGap:'10%',width:'100%'}}>
        <div className='top100page'>
          <div><b style={{color: 'white',fontSize: '16pt',paddingLeft:'7px'}}>BNB amount</b></div><br />
          <div style={{borderRadius: '24px',display:'flex',flexFlow:'row nowrap',background:'rgb(28 25 81)',height:'100px'}}>
          <div style={{color: "white", marginLeft: "24px", fontSize: "14px", marginTop: "20px" , zIndex: 9}}>From</div>
          <input onChange={evt => { setCount(Number(evt.target.value)) }} style={{ borderRadius: '24px',position:'relative',height:"30px", fontSize: '18px', marginLeft: '-30px', width: '100%',background:'rgb(28 25 81)',color:'rgb(239 186 47)',marginTop:'50px'}} placeholder="0" type="number" min="0" inputMode="numeric" pattern="[0-9]*" />
          <img className='top100img' alt="top100 token" src='./images/gigapoolIcons/binance-coin-bnb-logo.svg' style={{width:'35px',marginTop:'30px'}} />
          <div style={{color:'rgb(243, 186, 47)',fontSize:'16px',margin:'60px 24px 0 10px'}}>BNB</div>
          <br /><br />
          </div>
          <br /><br />
          </div>
          <div className='top100page'>
          <div><b style={{color: 'white',fontSize: '16pt',paddingLeft:'7px'}}>Top100 amount</b></div><br />
          <div style={{borderRadius: '24px',display:'flex',flexFlow:'row nowrap',background:'rgb(28 25 81)',height:'100px'}}>
          <div style={{color: "white", marginLeft: "24px", fontSize: "14px", marginTop: "20px" , zIndex: 9}}>To</div>
          <input onChange={evt => { setCount(Number(evt.target.value)) }} style={{ borderRadius: '24px',position:'relative',height:"30px", fontSize: '18px', marginLeft: '-15px', width: '100%',background:'rgb(28 25 81)',color:'rgb(239 186 47)',marginTop:'50px'}} placeholder="0" type="number" disabled value={(count /bnbprice)} />
          <img className='top100img' alt="top100 token" src={top100img} style={{width:'35px',marginTop:'40px'}} />
          <div style={{color:'rgb(243, 186, 47)',fontSize:'16px',margin:'60px 24px 0 10px'}}>TOP100</div>
          <br /><br />
          </div>
          <br /><br />
          </div>          
        </div>
      </div>
    </div>
    </>
  )
}

export default Top100
