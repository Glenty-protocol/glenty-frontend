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


  return (
    <div style={{ backgroundColor: 'rgba(49,39,131,0.9)', borderRadius: '24px' }}>
      <Heading scale="xl" mb="24px" style={{ display: 'flex', backgroundColor: 'rgba(120,140,255,0.9)', borderRadius: '24px 24px 0px 0px', padding: '24px', justifyContent: 'space-between' }}>
        <div style={{ color: 'white' }}>
          <b className='homeSmall'>Buy glenty with BNB</b>
        </div>
        <div className='homeSmallBig' role="presentation" onClick={() => {
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
        }} onKeyDown={() => console.log('amount of tokens:', count)} style={{ backgroundColor: '#FFCC33', borderRadius: '24px', color: 'white', cursor: 'pointer', fontSize: '18px', textAlign: 'center', margin: '20px 2px 20px auto', padding: '12px', width: '25%', height: '100%' }}>BUY GLENTY</div>
      </Heading>
      <div style={{ display: 'flex', padding: '24px', justifyContent: "space-around" }}>
        <img alt="glenty token" style={{ width: '50%' }} src={top100img} />
        <div>
          <div><b>glenty amount</b></div><br />
          <input onChange={evt => { setCount(Number(evt.target.value)) }} style={{ borderRadius: '24px', fontSize: '18px', padding: '12px', width: '100%' }} placeholder="0" type="number" />
          <br /><br />
          <div className='homeSmallBig'>1 GLENTY = 0.20 USD for early bird</div>
          <br />
          <div style={{ fontSize: '11px' }}>{`You must send ${count / 990} BNB for ${count} GLENTY`}</div>
        </div>
      </div>
    </div>
  )
}

export default Glenty
