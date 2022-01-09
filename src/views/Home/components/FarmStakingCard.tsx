import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pancakeswap/uikit'
import { harvest } from 'utils/callHelpers'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import { useMasterchef } from 'hooks/useContract'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  min-height: 376px;
  background: linear-gradient(82deg, rgba(49, 39, 131, 0.95),60%, rgba(49, 39, 131, 0.1));
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: white;
  font-size: 14pt;
  font-family: kanit !important;
  font-weight:200;
`

const Actions = styled.div`
  margin-top: 24px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const farmsWithBalance = useFarmsWithBalance()
  const masterChefContract = useMasterchef()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    // eslint-disable-next-line no-restricted-syntax
    for (const farmWithBalance of balancesWithValue) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await harvest(masterChefContract, farmWithBalance.pid, account)
      } catch (error) {
        // TODO: find a way to handle when the user rejects transaction or it fails
      }
    }
    setPendingTx(false)
  }, [account, balancesWithValue, masterChefContract])

  return (
    <StyledFarmStakingCard style={{ color: 'white' }}>
      <CardBody>
        <Heading scale="xl" mb="24px">
          <div style={{ color: 'white' }}>
            {t('Farms & Staking')}
          </div>

        </Heading>
        <CardImage src="/images/cake.svg" alt="cake logo" width={94} height={64} />
        <Block>
          <div style={{ color: 'white' }}>
            <Label>{t('GLENTY to Harvest')}:</Label>
            <CakeHarvestBalance />
          </div>
        </Block>
        <Block>
          <div style={{ color: 'white' }} className='secondBlock'>
            <Label>{t('GLENTY in Wallet')}:</Label>
            <CakeWalletBalance />
          </div>
        </Block>
        <Actions>
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              width="100%"
            >
              {pendingTx
                ? t('Collecting GLENTY')
                : t('Harvest all (%count%)', {
                  count: balancesWithValue.length,
                })}
            </Button>
          ) : (
            <UnlockButton width="100%" />
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
