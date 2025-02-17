import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Glenty',
  description:
    'The most popular AMM on BSC by user count! Earn GLENTY through yield farming or win it in the Lottery, then stake it in Gigapool to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Glenty), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Glenty')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Glenty')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Glenty')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Glenty')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Glenty')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Glenty')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Glenty')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Glenty')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Glenty')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Glenty')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Glenty')}`,
      }
    default:
      return null
  }
}
