import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'
import Top100 from 'views/Home/components/Top100'
import Glenty from 'views/Home/components/Glenty'

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

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

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
    margin-bottom: 32px;
    grid-gap: 32px;

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
    <Page style={{margin: 'auto 15%'}}>
      <Hero>
        <Heading as="h1" scale="xl" mb="24px" color="secondary">
        <div style={{ fontSize : '38pt', color:'#DAA520' }}> {t('Glenty')}</div>
        </Heading>
        <Text><div style={{ color: '#DAA520', fontSize: '26px' }}>{t('The #1 index fund DEX and yield farm on Binance Smart Chain.')}</div></Text>
      </Hero>
      <div style={{ color: 'white' }}>
        <Cards>
          <FarmStakingCard />
          {/* <LotteryCard /> */}
          <div><CakeStats /><br /><br /><br /><TotalValueLockedCard /></div>
          <Top100 />
          <Glenty />
        </Cards>
        <Cards>
          <EarnAPRCard />
          <EarnAssetCard />

          {/* <WinCard /> */}
        </Cards>

      </div>
    </Page>
  )
}

export default Home
