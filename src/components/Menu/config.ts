import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: 'https://exchange.glenty.com/#/swap',
      },
      {
        label: t('Liquidity'),
        href: 'https://exchange.glenty.com/#/pool',
      },
      // {
      //   label: t('LP Migration'),
      //   href: 'https://v1exchange.glenty.com/#/migrate',
      // },
      // {
      //   label: t('V1 Liquidity (Old)'),
      //   href: 'https://v1exchange.glenty.com/#/pool',
      // },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Gigapool'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: t('Prediction (BETA)'),
  //   icon: 'PredictionsIcon',
  //   href: '/prediction',
  // },
  // {
  //   label: t('Lottery'),
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: t('Collectibles'),
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: t('Team Battle'),
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  // },
  // {
  //   label: t('Teams & Profile'),
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: t('Leaderboard'),
  //       href: '/teams',
  //     },
  //     {
  //       label: t('Task Center'),
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: t('Your Profile'),
  //       href: '/profile',
  //     },
  //   ],
  // },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    items: [
      {
        label: t('Overview'),
        href: 'https://info.glenty.com',
      },
      {
        label: t('Tokens'),
        href: 'https://info.glenty.com/tokens',
      },
      {
        label: t('Pairs'),
        href: 'https://info.glenty.com/pairs',
      },
      {
        label: t('Accounts'),
        href: 'https://info.glenty.com/accounts',
      },
    ],
  },
  // {
  //   label: t('IFO'),
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.glenty.com/contact-us',
      },
      {
        label: t('Voting'),
        href: 'https://voting.glenty.com',
      },
      {
        label: t('Github'),
        href: 'https://github.com/glenty-protocol',
      },
      {
        label: t('Docs'),
        href: 'https://docs.glenty.com',
      },
      {
        label: t('Blog'),
        href: 'https://glenty.medium.com',
      },
      {
        label: t('Merch'),
        href: 'https://glenty.creator-spring.com/',
      },
    ],
  },
]

export default config
