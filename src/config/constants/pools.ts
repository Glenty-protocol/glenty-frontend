import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens['100'],
    earningToken: tokens['100'],
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 163,
    stakingToken: tokens.btcb,
    earningToken: tokens.btcb,
    contractAddress: {
      97: '',
      56: '0xb77f1425ec3a7c78b1a1e892f72332c8b5e8ffcb',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '40.5092',
  },
  {
    sousId: 162,
    stakingToken: tokens.eth,
    earningToken: tokens.eth,
    contractAddress: {
      97: '',
      56: '0xb9ff4da0954b300542e722097671ead8cf337c17',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0868',
  },
  {
    sousId: 161,
    stakingToken: tokens.usdt,
    earningToken: tokens.usdt,
    contractAddress: {
      97: '',
      56: '0xb19395702460261e51edf7a7b130109c64f13af9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.01736',
  },
  {
    sousId: 160,
    stakingToken: tokens.bnb,
    earningToken: tokens.bnb,
    contractAddress: {
      97: '',
      56: '0x6e113ecb9ff2d271140f124c2cc5b5e4b5700c9f',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    isFinished: true,
    tokenPerBlock: '0.00868',
  },
  {
    sousId: 159,
    stakingToken: tokens.ada,
    earningToken: tokens.ada,
    contractAddress: {
      97: '',
      56: '0x7baf1763ce5d0da8c9d85927f08a8be9c481ce50',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.19097',
  },
  {
    sousId: 158,
    stakingToken: tokens.doge,
    earningToken: tokens.doge,
    contractAddress: {
      97: '',
      56: '0x2b8d6c9c62bfc1bed84724165d3000e61d332cab',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.023148',
  },
  {
    sousId: 157,
    stakingToken: tokens.xrp,
    earningToken: tokens.xrp,
    contractAddress: {
      97: '',
      56: '0x8a06ff2748edcba3fb4e44a6bfda4e46769e557b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.2025',
    sortOrder: 999,
  },
  {
    sousId: 156,
    stakingToken: tokens.usdc,
    earningToken: tokens.usdc,
    contractAddress: {
      97: '',
      56: '0x3eba95f5493349bbe0cad33eaae05dc6a7e26b90',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1.6087',
    sortOrder: 999,
  },
  {
    sousId: 155,
    stakingToken: tokens.dot,
    earningToken: tokens.dot,
    contractAddress: {
      97: '',
      56: '0x593edbd14a5b7eec828336accca9c16cc12f04be',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1.655',
    sortOrder: 999,
  }
]

export default pools
