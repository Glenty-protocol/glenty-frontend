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
  {
    label: "Github",
    href: "https://github.com/glenty-protocol",
    icon: 'AuditIcon'
  },
  {
    label: "Docs",
    href: "https://glenty.gitbook.io/glenty/",
    icon: 'TicketIcon'
  }
]

export default config
