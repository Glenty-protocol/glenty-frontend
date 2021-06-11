import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const tvl = data ? data.tvl.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading scale="lg" mb="24px">
          <div style={{ color: 'white' }}>
            {t('Total Value Locked (TVL)')}
          </div>
        </Heading>
        {data ? (
          <>
            <Heading scale="xl"><div style={{ color: 'white' }}>{`$${tvl}`}</div></Heading>
            <Text color="textSubtle">
              <div style={{ color: 'white' }}>{t('Across all LPs and Gigapool')}</div></Text>
          </>
        ) : (
          <Skeleton height={66} />
        )}
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
