import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  height:100%;
  background: rgba(49, 39, 131, 0.9);
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 5%;
`
const CardImage = styled.img`
  margin-bottom: 10%;
`

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading scale="xl" mb="24px">
        <div style={{ color: 'white' }}>
          {t('Glenty Stats')}
          </div>
        </Heading>
        <CardImage src="/images/cake.svg" alt="cake logo" width={94} height={64} />
        <Row>
          <Text fontSize="14px"><div style={{ color: 'white' }}>{t('Total GLENTY Supply')}</div></Text>
          {cakeSupply &&<CardValue fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px"><div style={{ color: 'white' }}>{t('Total GLENTY Burned')}</div></Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px"><div style={{ color: 'white' }}>{t('New GLENTY/block')}</div></Text>
          <CardValue fontSize="14px" decimals={0} value={20} />
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
