/* eslint-disable */
import React, { useState } from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useWeb3 from 'hooks/useWeb3'
import { useWeb3React } from '@web3-react/core'
import { AbiItem } from 'web3-utils'
import useToast from 'hooks/useToast'
import Abi from './abi.json'
import top100img from './glenty.svg'

const config = {
  buyContractAddressGlenty: "0x6dBEa0369b3FF7C0472Ce7A3fEE629a924b7494a"
}

const Glenty = () => {
  const { t } = useTranslation()
  const { toastError, toastSuccess } = useToast()
  const [count, setCount] = useState(0);
  const { account } = useWeb3React();
  const web3 = useWeb3();
  function BuyToken() {

    // const buyContract = new web3.eth.Contract(
    //   config.buyContractABI,
    //   config.buyContractAddress
    // );

    // await buyContract.methods
    //   .buyTokens(account.address)
    //   .send({
    //     from: account.address,
    //     value: web3.utils.toWei(amount.toString(), "ether"),
    //     gas: "90000",
    //   })
    //   .on("receipt", function (data, error) {
    //     console.log(data);
    //   });
  }
  let bnbpriceg = 578.47
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd')          
  .then(res=>res.json())
  .then(binprice=>{
    bnbpriceg = binprice.binancecoin.usd,
    console.log(bnbpriceg)
  })

  return (
    <div style={{ backgroundColor: 'rgba(49,39,131,0.9)', borderRadius: '24px' }}>
      <Heading scale="xl" mb="24px" className='buyGlenty' style={{ textAlign: 'center', backgroundColor: '#030e33', borderRadius: '24px 24px 0px 0px', justifyContent: 'space-between' }}>
        <div style={{ color: 'white' }}>
          <b className='homeSmall'>Buy Glenty</b>
        </div>
      </Heading>
      <div style={{padding: '24px', justifyContent: "space-around" }}>
        
      <div className='top100moduleHome'>
        <div className='buytitle' style={{color:'white',textAlign:'left'}}>Buy Price: <br />0.20 USD <br /><br /><span style={{fontSize:'12pt'}}> {(0.2 / bnbpriceg).toFixed(4)} BNB </span></div>
        <img className='top100img' alt="top100 token" src='./images/gigapoolIcons/Fichier 1.svg' style={{width:'150px'}} />
        </div>

        <div className='top100page'>
          <div><b style={{color: 'white',fontSize: '16pt'}}>Glenty amount</b></div><br />

          <div style={{borderRadius: '24px',display:'flex',flexFlow:'row nowrap',background:'rgb(28 25 81)',height:'100px'}}>
          <div style={{color: "white", marginLeft: "24px", fontSize: "14px", marginTop: "20px" , zIndex: 9}}>From</div>
          <input onChange={evt => { setCount(Number(evt.target.value)) }} style={{ borderRadius: '24px',position:'relative',height:"30px", fontSize: '18px', marginLeft: '-30px', width: '100%',background:'rgb(28 25 81)',color:'rgb(239 186 47)',marginTop:'50px'}} placeholder="0" type="number" />
          <img className='top100img' alt="top100 token" src='./images/gigapoolIcons/Fichier 1.svg' style={{width:'35px',marginTop:'40px'}} />
          <div style={{color:'rgb(243, 186, 47)',fontSize:'16px',margin:'60px 24px 0 10px'}}>Glenty</div>
          <br /><br />
          </div>
          <br /><br />

          <div><b style={{color: 'white',fontSize: '16pt'}}>BNB amount</b></div><br />
          <div style={{borderRadius: '24px',display:'flex',flexFlow:'row nowrap',background:'rgb(28 25 81)',height:'100px'}}>
          <div style={{color: "white", marginLeft: "24px", fontSize: "14px", marginTop: "20px" , zIndex: 9}}>To</div>
          <input onChange={evt => { setCount(Number(evt.target.value)) }} style={{ borderRadius: '24px',position:'relative',height:"30px", fontSize: '18px', marginLeft: '-15px', width: '100%',background:'rgb(28 25 81)',color:'rgb(239 186 47)',marginTop:'50px'}} placeholder="0" type="number" disabled value={count * (0.2 / bnbpriceg)} />
          <img className='top100img' alt="top100 token" src='./images/gigapoolIcons/binance-coin-bnb-logo.svg' style={{width:'35px',marginTop:'30px'}} />
          <div style={{color:'rgb(243, 186, 47)',fontSize:'16px',margin:'60px 24px 0 10px'}}>BNB</div>
          <br /><br />
          </div>
<br /><br /><br />
          <div className='homeSmallBig' onClick={() => {
          if(account && count > 0) {
          console.log("conf", Abi as AbiItem[], config.buyContractAddressGlenty);
          const buyContract = new web3.eth.Contract(
            Abi as AbiItem[],
            config.buyContractAddressGlenty
          );
          
          buyContract.methods
            .buyTokens(account)
            .send({
              from: account,
              value: web3.utils.toWei((count/990).toString(), "ether"),
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
        }} onKeyDown={() => console.log('amount of tokens:', count)} style={{ backgroundColor: '#FFCC33', borderRadius: '28px', color: 'white', cursor: 'pointer', fontSize: '16px', textAlign: 'center', margin: '20px 2px 20px auto', padding: '20px'}}>BUY GLENTY</div>
        </div>
      </div>
    </div>
  )
}

export default Glenty
