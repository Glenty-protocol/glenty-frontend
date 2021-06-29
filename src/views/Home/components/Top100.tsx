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
import top100img from './top100.svg'

const config = {
  buyContractAddressTop100: "0x7475E30e90ff55d627cAdfcb4e869d7d203B1b98"
}

const Top100 = () => {
  const { t } = useTranslation()
  const { toastError, toastSuccess } = useToast()
  const [count, setCount] = useState(0);
  const { account } = useWeb3React();
  const web3 = useWeb3();


  return (
    <div style={{ backgroundColor: 'rgba(49,39,131,0.9)', borderRadius: '24px' }}>
      <Heading scale="xl" mb="24px" style={{ display: 'flex', backgroundColor: 'rgba(120,140,255,0.9)', borderRadius: '24px 24px 0px 0px', padding: '24px', justifyContent: 'space-between' }}>
        <div style={{ color: 'white' }}>
          <b>Buy top100 with BNB</b>
        </div>
        <div role="presentation" onClick={() => {
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
                value: web3.utils.toWei((count * 0.1).toString(), "ether"),
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
        }} onKeyDown={() => console.log('amount of tokens:', count)} style={{ backgroundColor: '#FFCC33', borderRadius: '24px', color: 'white', cursor: 'pointer', fontSize: '18px', textAlign: 'center', margin: '20px', padding: '12px', width: '100%', height: '100%' }}>BUY TOP100</div>
      </Heading>
      <div style={{ display: 'flex', padding: '24px', justifyContent: "space-around" }}>
        <img alt="top100 token" style={{ width: '50%' }} src={top100img} />
        <div>
          <div><b>top100 amount</b></div><br />
          <input onChange={evt => { setCount(Number(evt.target.value)) }} style={{ borderRadius: '24px', fontSize: '18px', padding: '12px', width: '100%' }} placeholder="0" type="number" />
          <br /><br />
          <div>Buy Price: 0.1 BNB</div>
          <br />
          <div style={{ fontSize: '11px' }}>{`You must send ${count * 0.1} BNB for ${count} TOP100`}</div>
        </div>
      </div>
    </div>
  )
}

export default Top100
