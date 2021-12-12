import React from 'react'
import styled from 'styled-components'
import { useFarmUser } from 'state/hooks'
import { useTranslation } from 'contexts/Localization'
import { Text, Image } from '@pancakeswap/uikit'
import { getBalanceNumber } from 'utils/formatBalance'

export interface FarmProps {
  label: string
  pid: number
  image: string
}

const IconImage = styled(Image)`
  width: 60px;
  height: 60px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 60px;
    height: 60px;
  }
`

const Container = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 32px;
  }
`

const Farm: React.FunctionComponent<FarmProps> = ({ image, label, pid }) => {
  const { stakedBalance } = useFarmUser(pid)
  const { t } = useTranslation()
  const rawStakedBalance = getBalanceNumber(stakedBalance)

  const handleRenderFarming = (): JSX.Element => {
    if (rawStakedBalance) {
      return (
        <Text color="secondary" fontSize="12px" bold textTransform="uppercase">
          {t('Farming')}
        </Text>
      )
    }

    return null
  }

  return (
    <Container>
      <IconImage src={`./images/farms/${image}.png`} alt="iconFarm" width={64} height={64} mr="8px" />
      <div>
        {handleRenderFarming()}
        <Text color='white' bold className='farmname'>{label}</Text>
      </div>
    </Container>
  )
}

export default Farm
