import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  // {
  //   pid: 0,
  //   lpSymbol: 'GLENTY',
  //   lpAddresses: {
  //     97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
  //     56: '0x2B82fd7408D54fA3A5F0CEAAC06b6D8AE775357a',
  //   },
  //   token: tokens.syrup,
  //   quoteToken: tokens.wbnb,
  // },
  {
    pid: 1,
    lpSymbol: 'GLENTY-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x01511e08b861053d7db7b438c8c1a585575d3cbd',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x746c3c8c107e7a9f2930f46d860e9001cabf9706',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'GLENTY-BUSD LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  },

  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */

  // {
  //   pid: 380,
  //   lpSymbol: 'TDOGE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x2030845Ce7d4224523fd2F03Ca20Afe4aAD1D890',
  //   },
  //   token: tokens.τdoge,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 376,
  //   lpSymbol: 'DOGE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xac109c8025f272414fd9e2faa805a583708a017f',
  //   },
  //   token: tokens.doge,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 310,
  //   lpSymbol: 'bMXX-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc20A92a1424b29b78DFaF92FD35D4cf8A06419B4',
  //   },
  //   token: tokens.bmxx,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 370,
  //   lpSymbol: 'mCOIN-UST LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbcf01a42f6bc42f3cfe81b05519565044d65d22a',
  //   },
  //   token: tokens.mcoin,
  //   quoteToken: tokens.ust,
  // },
  // {
  //   pid: 366,
  //   lpSymbol: 'PNT-pBTC LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xdaa89d335926628367b47852989bb22ee62ca5de',
  //   },
  //   token: tokens.pnt,
  //   quoteToken: tokens.pbtc,
  // },

  // {
  //   pid: 365,
  //   lpSymbol: 'BTCB-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xf45cd219aef8618a92baa7ad848364a158a24f33',
  //   },
  //   token: tokens.btcb,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 361,
  //   lpSymbol: 'TBTC-BTCB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x8046fa66753928F35f7Db23ae0188ee6743C2FBA',
  //   },
  //   token: tokens.τbtc,
  //   quoteToken: tokens.btcb,
  // },
  // {
  //   pid: 304,
  //   lpSymbol: 'SWINGBY-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4Fd6D315bEf387fAD2322fbc64368fC443F0886D',
  //   },
  //   token: tokens.swingby,
  //   quoteToken: tokens.wbnb,
  // },

  // {
  //   pid: 358,
  //   lpSymbol: 'CGG-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0604471c532F9fEBAD3E37190B667f44BD0894b3',
  //   },
  //   token: tokens.cgg,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 352,
  //   lpSymbol: 'TLM-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xE6b421a4408c82381b226Ab5B6F8C4b639044359',
  //   },
  //   token: tokens.tlm,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 341,
  //   lpSymbol: 'NRV-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xE482249Cd295C0d1e9D2baAEE71e66de21024C68',
  //   },
  //   token: tokens.nrv,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 338,
  //   lpSymbol: 'pBTC-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0362ba706DFE8ED12Ec1470aB171d8Dcb1C72B8D',
  //   },
  //   token: tokens.pbtc,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 332,
  //   lpSymbol: 'bBADGER-BTCB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x5A58609dA96469E9dEf3fE344bC39B00d18eb9A5',
  //   },
  //   token: tokens.bbadger,
  //   quoteToken: tokens.btcb,
  // },
  // {
  //   pid: 329,
  //   lpSymbol: 'MIR-UST LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x89666d026696660e93Bf6edf57B71A68615768B7',
  //   },
  //   token: tokens.mir,
  //   quoteToken: tokens.ust,
  // },
  // {
  //   pid: 326,
  //   lpSymbol: 'BIFI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3f1A9f3D9aaD8bD339eD4853F345d2eF89fbfE0c',
  //   },
  //   token: tokens.bifi,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 323,
  //   lpSymbol: 'BUNNY-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x5aFEf8567414F29f0f927A0F2787b188624c10E2',
  //   },
  //   token: tokens.bunny,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 322,
  //   lpSymbol: 'ALICE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xcAD7019D6d84a3294b0494aEF02e73BD0f2572Eb',
  //   },
  //   token: tokens.alice,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 316,
  //   lpSymbol: 'BFI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x153Ad7d25B0b810497483d0cEE8AF42Fc533FeC8',
  //   },
  //   token: tokens.bfi,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 306,
  //   lpSymbol: 'SUSHI-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x16aFc4F2Ad82986bbE2a4525601F8199AB9c832D',
  //   },
  //   token: tokens.sushi,
  //   quoteToken: tokens.eth,
  // },
  // {
  //   pid: 305,
  //   lpSymbol: 'DODO-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xA9986Fcbdb23c2E8B11AB40102990a08f8E58f06',
  //   },
  //   token: tokens.dodo,
  //   quoteToken: tokens.wbnb,
  // },

  // {
  //   pid: 301,
  //   lpSymbol: 'SWINGBY-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x856f9AD94cA8680B899214Bb1EB3d235a3C33Afe',
  //   },
  //   token: tokens.swgb,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 300,
  //   lpSymbol: 'COMP-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x37908620dEf1491Dd591b5a2d16022A33cDDA415',
  //   },
  //   token: tokens.comp,
  //   quoteToken: tokens.eth,
  // },
  // {
  //   pid: 299,
  //   lpSymbol: 'SFP-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x942b294e59a8c47a0F7F20DF105B082710F7C305',
  //   },
  //   token: tokens.sfp,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 293,
  //   lpSymbol: 'UST-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x05faf555522Fa3F93959F86B41A3808666093210',
  //   },
  //   token: tokens.ust,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 286,
  //   lpSymbol: 'Helmet-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xC869A9943b702B03770B6A92d2b2d25cf3a3f571',
  //   },
  //   token: tokens.helmet,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 285,
  //   lpSymbol: 'BTCST-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xB2678C414ebC63c9CC6d1a0fC45f43E249B50fdE',
  //   },
  //   token: tokens.btcst,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 284,
  //   lpSymbol: 'LTC-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x71b01eBdDD797c8E9E0b003ea2f4FD207fBF46cC',
  //   },
  //   token: tokens.ltc,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 282,
  //   lpSymbol: 'DAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489',
  //   },
  //   token: tokens.dai,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 278,
  //   lpSymbol: 'REEF-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd63b5CecB1f40d626307B92706Df357709D05827',
  //   },
  //   token: tokens.reef,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 277,
  //   lpSymbol: 'Ditto-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x8645148dE4E339964bA480AE3478653b5bc6E211',
  //   },
  //   token: tokens.ditto,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 276,
  //   lpSymbol: 'VAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x133ee93FE93320e1182923E1a640912eDE17C90C',
  //   },
  //   token: tokens.vai,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 271,
  //   lpSymbol: 'SXP-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xD8E2F8b6Db204c405543953Ef6359912FE3A88d6',
  //   },
  //   token: tokens.sxp,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 268,
  //   lpSymbol: 'UNI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x014608E87AF97a054C9a49f81E1473076D51d9a3',
  //   },
  //   token: tokens.uni,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 265,
  //   lpSymbol: 'XRP-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x03F18135c44C64ebFdCBad8297fe5bDafdBbdd86',
  //   },
  //   token: tokens.xrp,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 262,
  //   lpSymbol: 'BTCB-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
  //   },
  //   token: tokens.btcb,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 261,
  //   lpSymbol: 'ETH-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
  //   },
  //   token: tokens.eth,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 260,
  //   lpSymbol: 'XVS-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7EB5D86FD78f3852a3e0e064f2842d45a3dB6EA2',
  //   },
  //   token: tokens.xvs,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 259,
  //   lpSymbol: 'TWT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3DcB1787a95D2ea0Eb7d00887704EeBF0D79bb13',
  //   },
  //   token: tokens.twt,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 258,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
  //   },
  //   token: tokens.usdt,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 257,
  //   lpSymbol: 'LINK-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x824eb9faDFb377394430d2744fa7C42916DE3eCe',
  //   },
  //   token: tokens.link,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 256,
  //   lpSymbol: 'EOS-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xB6e34b5C65Eda51bb1BD4ea5F79d385Fb94b9504',
  //   },
  //   token: tokens.eos,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 255,
  //   lpSymbol: 'DOT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF',
  //   },
  //   token: tokens.dot,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 254,
  //   lpSymbol: 'BAND-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x168B273278F3A8d302De5E879aA30690B7E6c28f',
  //   },
  //   token: tokens.band,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 253,
  //   lpSymbol: 'ADA-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x28415ff2C35b65B9E5c7de82126b4015ab9d031F',
  //   },
  //   token: tokens.ada,
  //   quoteToken: tokens.wbnb,
  // },
  // /**
  //  * V2 farms, set to be removed once unstaked
  //  */
  // {
  //   pid: 139,
  //   lpSymbol: 'GLENTY-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xFB7E9FE9D13561AdA7131Fa746942a14F7dd4Cf6',
  //   },
  //   token: tokens.cake,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 250,
  //   lpSymbol: 'TBTC-BTCB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xFD09CDbd6A7dCAd8AC47df4F139443a729264763',
  //   },
  //   token: tokens.τbtc,
  //   quoteToken: tokens.btcb,
  // },
  // {
  //   pid: 193,
  //   lpSymbol: 'SWINGBY-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xA0e3F72BAFcc5d52F0052a39165FD40D3d4d34Fc',
  //   },
  //   token: tokens.swingby,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 247,
  //   lpSymbol: 'CGG-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xB9aA8B0d67DE546aaa82091065a64B7F1C4B1a1F',
  //   },
  //   token: tokens.cgg,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 246,
  //   lpSymbol: 'SUTER-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6f41c9226fa89a552009c3AC087BA74b83772C52',
  //   },
  //   token: tokens.suter,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 245,
  //   lpSymbol: 'bROOBEE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x5Ac5184eA06dE24ce8ED2133f58b4Aa2CEd2dC3b',
  //   },
  //   token: tokens.broobee,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 244,
  //   lpSymbol: 'HZN-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xF7fcD7e7B3853bf59bCA9183476F218ED07eD3B0',
  //   },
  //   token: tokens.hzn,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 243,
  //   lpSymbol: 'ALPA-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xBB41898A3051A6b6D4A36a1c43e906b05799B744',
  //   },
  //   token: tokens.alpa,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 242,
  //   lpSymbol: 'PERL-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xB1C2e08A992a619DA570425E78828A8508654f4F',
  //   },
  //   token: tokens.perl,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 241,
  //   lpSymbol: 'TLM-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x25f15Cb3D3B3753702E1d5c4E5f6F0720b197843',
  //   },
  //   token: tokens.tlm,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 240,
  //   lpSymbol: 'JGN-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x8fD5ca41B2B44e4713590584f97c85f9FF59F00D',
  //   },
  //   token: tokens.jgn,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 239,
  //   lpSymbol: 'EPS-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x43bc6C256240e657Ad84aFb86825E21B48FEDe78',
  //   },
  //   token: tokens.eps,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 238,
  //   lpSymbol: 'ARPA-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xD55e5A7b886aE9657b95641c6A7dc5A662EcAbF3',
  //   },
  //   token: tokens.arpa,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 237,
  //   lpSymbol: 'ITAM-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3e78b0eD211a49e263fF9b3F0B410932a021E368',
  //   },
  //   token: tokens.itam,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 236,
  //   lpSymbol: 'BONDLY-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x2205a6424ec4D74a7588450fB71ffd0C4A3Ead65',
  //   },
  //   token: tokens.bondly,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 235,
  //   lpSymbol: 'TKO-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc43EdF4a7e89160135C2553E9868446fef9C18DD',
  //   },
  //   token: tokens.tko,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 234,
  //   lpSymbol: 'APYS-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7A5523f50a80790cAD011167E20bD21056A2f04A',
  //   },
  //   token: tokens.apys,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 233,
  //   lpSymbol: 'HOO-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc12dAD966505443b5aad7b0C55716c13d285B520',
  //   },
  //   token: tokens.hoo,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 232,
  //   lpSymbol: 'ODDZ-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3B0a7d1030bcDFf45ABB7B03C04110FcCc8095BC',
  //   },
  //   token: tokens.oddz,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 231,
  //   lpSymbol: 'EASY-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4b0ec41404a7FF59BaE33C8Dc420804c58B7bF24',
  //   },
  //   token: tokens.easy,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 230,
  //   lpSymbol: 'NRV-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x25dea33a42c7775F6945fae22A8fFBfAC9fB22CD',
  //   },
  //   token: tokens.nrv,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 227,
  //   lpSymbol: 'pBTC-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xaccd6673FFc24cD56B080D71384327f78fD92496',
  //   },
  //   token: tokens.pbtc,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 221,
  //   lpSymbol: 'bBADGER-BTCB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x87Ae7b5c43D4e160cDB9427a78BA87B9503ee37b',
  //   },
  //   token: tokens.bbadger,
  //   quoteToken: tokens.btcb,
  // },
  // {
  //   pid: 218,
  //   lpSymbol: 'MIR-UST LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x905186a70ba3Eb50090d1d0f6914F5460B4DdB40',
  //   },
  //   token: tokens.mir,
  //   quoteToken: tokens.ust,
  // },
  // {
  //   pid: 215,
  //   lpSymbol: 'BIFI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x01956F08A55e4FF9775bc01aF6ACb09144564837',
  //   },
  //   token: tokens.bifi,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 212,
  //   lpSymbol: 'BUNNY-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x283FA8d459Da6e3165B2faF7FA0DD0137503DECf',
  //   },
  //   token: tokens.bunny,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 211,
  //   lpSymbol: 'ALICE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x9e1BB5033d47BF8F16FC017CEC0959De7FF00833',
  //   },
  //   token: tokens.alice,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 207,
  //   lpSymbol: 'BELT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x446ff2C0F5350bF2dadD0e0F1AaAA573b362CA6B',
  //   },
  //   token: tokens.belt,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 205,
  //   lpSymbol: 'BFI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xFFA2357f1E6f48d74b1c18c363c3Fe58A032405a',
  //   },
  //   token: tokens.bfi,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 199,
  //   lpSymbol: 'bMXX-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x037d38c7DfF5732DAA5f8C05478Eb75cdf24f42B',
  //   },
  //   token: tokens.bmxx,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 195,
  //   lpSymbol: 'SUSHI-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3BECbb09F622187B544C0892EeDeB58C004117e1',
  //   },
  //   token: tokens.sushi,
  //   quoteToken: tokens.eth,
  // },
  // {
  //   pid: 194,
  //   lpSymbol: 'DODO-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x220e34306a93002fB7947C9Fc633d6f538bd5032',
  //   },
  //   token: tokens.dodo,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 190,
  //   lpSymbol: 'SWGb-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd2A5008d555371e97F30B6dD71597b4F1eDB0f20',
  //   },
  //   token: tokens.swgb,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 189,
  //   lpSymbol: 'COMP-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6A55a9176f11c1118f01CBaf6c4033a5c1B22a81',
  //   },
  //   token: tokens.comp,
  //   quoteToken: tokens.eth,
  // },
  // {
  //   pid: 188,
  //   lpSymbol: 'SFP-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x01744B868fe98dB669EBf4e9CA557462BAA6097c',
  //   },
  //   token: tokens.sfp,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 185,
  //   lpSymbol: 'HGET-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x239aD1874114B2235485e34b14c48dB73CCA3ffb',
  //   },
  //   token: tokens.hget,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 182,
  //   lpSymbol: 'UST-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1719606031F1E0B3CCaCa11A2CF550Ef8feBEB0F',
  //   },
  //   token: tokens.ust,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 175,
  //   lpSymbol: 'Helmet-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xD09648792d7e77523ae311Fa5A8F38E4684A5f15',
  //   },
  //   token: tokens.helmet,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 174,
  //   lpSymbol: 'BTCST-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xf967845A6D30C44b555C49C50530076dF5D7fd75',
  //   },
  //   token: tokens.btcst,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 173,
  //   lpSymbol: 'LTC-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x286E8d71722c585c9A82876B1B2FB4dEe9fc536E',
  //   },
  //   token: tokens.ltc,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 171,
  //   lpSymbol: 'DAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xdaFE10aA3AB6758596aDAC70f6873C49F5a9bf86',
  //   },
  //   token: tokens.dai,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 170,
  //   lpSymbol: 'BSCX-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x5fE5394BBc394345737b8e6e48be2804E89eC0eB',
  //   },
  //   token: tokens.bscx,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 169,
  //   lpSymbol: 'TEN-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x003C4d60de42eAD30739dD204BD153fE69E20Fb2',
  //   },
  //   token: tokens.ten,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 167,
  //   lpSymbol: 'REEF-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x074ed2De503580887073A0F788E035C0fbe13F48',
  //   },
  //   token: tokens.reef,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 166,
  //   lpSymbol: 'Ditto-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb33D432eACe45DF62F0145228B550b214DCaA6D4',
  //   },
  //   token: tokens.ditto,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 165,
  //   lpSymbol: 'VAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x9d95063661fa34B67E0Be0cc71Cf92fc6126aF37',
  //   },
  //   token: tokens.vai,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 164,
  //   lpSymbol: 'BLK-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xdA5a79fFe24739876a52AEF0d419aBB3b2517922',
  //   },
  //   token: tokens.blink,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 160,
  //   lpSymbol: 'SXP-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6294D8518b7321dc22E32AA907A89B1DAfc1aDbB',
  //   },
  //   token: tokens.sxp,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 159,
  //   lpSymbol: 'INJ-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0444712EE8DFF8913B2b44CB1D2a0273b4CDaBe9',
  //   },
  //   token: tokens.inj,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 158,
  //   lpSymbol: 'FIL-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xD027c0B352578b1Cf57f472107591CaE5fa27Eb1',
  //   },
  //   token: tokens.fil,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 157,
  //   lpSymbol: 'UNI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x2937202a53C82E36bC8beCFBe79795bedF284804',
  //   },
  //   token: tokens.uni,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 153,
  //   lpSymbol: 'XRP-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0F640E3ec77415Fd810D18B3ac000cD8a172E22f',
  //   },
  //   token: tokens.xrp,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 150,
  //   lpSymbol: 'BTCB-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x356b7d0d3c54F22C82B7a670C6Ba9E2381b0624c',
  //   },
  //   token: tokens.btcb,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 149,
  //   lpSymbol: 'ETH-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4D7078a6B348766E7a16cD6e6fCb3064721bc6a6',
  //   },
  //   token: tokens.eth,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 148,
  //   lpSymbol: 'XVS-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x77B5dB64fD4Cf5B699855420fF2608B2EA6708B3',
  //   },
  //   token: tokens.xvs,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 147,
  //   lpSymbol: 'TWT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x34910518Faf5bfd3a4D15ccFE104B63f06ee3d85',
  //   },
  //   token: tokens.twt,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 146,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x28b81C6b155fd9152AE4A09c4eeB7E7F1C114FaC',
  //   },
  //   token: tokens.usdt,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 145,
  //   lpSymbol: 'LINK-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x380941fFd7b7cbf4AEbBfa8A26aa80c2f6570909',
  //   },
  //   token: tokens.link,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 144,
  //   lpSymbol: 'EOS-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x082A80b3a55BD3B320a16678784186a979882b21',
  //   },
  //   token: tokens.eos,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 143,
  //   lpSymbol: 'DOT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3aFfc4dd05286ed6B7206Fc85219d222130e35a9',
  //   },
  //   token: tokens.dot,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 142,
  //   lpSymbol: 'BAND-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x473390697036E7611a670575eA9141583471fF47',
  //   },
  //   token: tokens.band,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 141,
  //   lpSymbol: 'ADA-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xec0C5719cC100DfB6c6F371bb48d3D079ab6A6D2',
  //   },
  //   token: tokens.ada,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 140,
  //   lpSymbol: 'BUSD-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x9bdEdb0c876fC0Da79D945DF28942b898Af89Fc7',
  //   },
  //   token: tokens.busd,
  //   quoteToken: tokens.wbnb,
  // },
  // /**
  //  * All farms below here are from v1 and are to be set to 0x
  //  */
  // {
  //   pid: 1,
  //   lpSymbol: 'GLENTY-BNB LP',
  //   lpAddresses: {
  //     97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
  //     56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
  //   },
  //   token: tokens.cake,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 136,
  //   lpSymbol: 'TBTC-BTCB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x2d4e52c48fd18ee06d3959e82ab0f773c41b9277',
  //   },
  //   token: tokens.τbtc,
  //   quoteToken: tokens.btcb,
  // },
  // {
  //   pid: 76,
  //   lpSymbol: 'SWINGBY-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4576C456AF93a37a096235e5d83f812AC9aeD027',
  //   },
  //   token: tokens.swingby,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 133,
  //   lpSymbol: 'CGG-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x484c60f6202c8043DCA0236bB3101ada7ec50AD4',
  //   },
  //   token: tokens.cgg,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 127,
  //   lpSymbol: 'TLM-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x34e821e785A93261B697eBD2797988B3AA78ca33',
  //   },
  //   token: tokens.tlm,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 115,
  //   lpSymbol: 'NRV-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x5a805994a2e30ac710e7376ccc0211285bd4dd92',
  //   },
  //   token: tokens.nrv,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 112,
  //   lpSymbol: 'pBTC-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb5f6f7dad23132d40d778085d795bd0fd4b859cd',
  //   },
  //   token: tokens.pbtc,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 106,
  //   lpSymbol: 'bBADGER-BTCB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x10F461CEAC7A17F59e249954Db0784d42EfF5DB5',
  //   },
  //   token: tokens.bbadger,
  //   quoteToken: tokens.btcb,
  // },
  // {
  //   pid: 102,
  //   lpSymbol: 'MIR-UST LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xf64a269F0A06dA07D23F43c1Deb217101ee6Bee7',
  //   },
  //   token: tokens.mir,
  //   quoteToken: tokens.ust,
  // },
  // {
  //   pid: 99,
  //   lpSymbol: 'BIFI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd132D2C24F29EE8ABb64a66559d1b7aa627Bd7fD',
  //   },
  //   token: tokens.bifi,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 96,
  //   lpSymbol: 'BUNNY-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7Bb89460599Dbf32ee3Aa50798BBcEae2A5F7f6a',
  //   },
  //   token: tokens.bunny,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 95,
  //   lpSymbol: 'ALICE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xe022baa3E5E87658f789c9132B10d7425Fd3a389',
  //   },
  //   token: tokens.alice,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 90,
  //   lpSymbol: 'BELT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x83B92D283cd279fF2e057BD86a95BdEfffED6faa',
  //   },
  //   token: tokens.belt,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 88,
  //   lpSymbol: 'BFI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x45a9e8d48bc560416008d122c9437927fed50e7d',
  //   },
  //   token: tokens.bfi,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 82,
  //   lpSymbol: 'bMXX-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4D5aA94Ce6BbB1BC4eb73207a5a5d4D052cFcD67',
  //   },
  //   token: tokens.bmxx,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 78,
  //   lpSymbol: 'SUSHI-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x17580340f3daedae871a8c21d15911742ec79e0f',
  //   },
  //   token: tokens.sushi,
  //   quoteToken: tokens.eth,
  // },
  // {
  //   pid: 77,
  //   lpSymbol: 'DODO-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x9e642d174b14faea31d842dc83037c42b53236e6',
  //   },
  //   token: tokens.dodo,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 73,
  //   lpSymbol: 'SWINGBY-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc1800c29cf91954357cd0bf3f0accaada3d0109c',
  //   },
  //   token: tokens.swgb,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 72,
  //   lpSymbol: 'COMP-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0392957571f28037607c14832d16f8b653edd472',
  //   },
  //   token: tokens.comp,
  //   quoteToken: tokens.eth,
  // },
  // {
  //   pid: 71,
  //   lpSymbol: 'SFP-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xcbe2cf3bd012e9c1ade2ee4d41db3dac763e78f3',
  //   },
  //   token: tokens.sfp,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 63,
  //   lpSymbol: 'UST-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xD1F12370b2ba1C79838337648F820a87eDF5e1e6',
  //   },
  //   token: tokens.ust,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 56,
  //   lpSymbol: 'Helmet-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6411310c07d8c48730172146fd6f31fa84034a8b',
  //   },
  //   token: tokens.helmet,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 55,
  //   lpSymbol: 'BTCST-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x91589786D36fEe5B27A5539CfE638a5fc9834665',
  //   },
  //   token: tokens.btcst,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 54,
  //   lpSymbol: 'LTC-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbc765fd113c5bdb2ebc25f711191b56bb8690aec',
  //   },
  //   token: tokens.ltc,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 52,
  //   lpSymbol: 'DAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3aB77e40340AB084c3e23Be8e5A6f7afed9D41DC',
  //   },
  //   token: tokens.dai,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 45,
  //   lpSymbol: 'REEF-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x58B58cab6C5cF158f63A2390b817710826d116D0',
  //   },
  //   token: tokens.reef,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 44,
  //   lpSymbol: 'Ditto-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x470bc451810b312bbb1256f96b0895d95ea659b1',
  //   },
  //   token: tokens.ditto,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 41,
  //   lpSymbol: 'VAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xff17ff314925dff772b71abdff2782bc913b3575',
  //   },
  //   token: tokens.vai,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 2,
  //   lpSymbol: 'BUSD-BNB LP',
  //   lpAddresses: {
  //     97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
  //     56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
  //   },
  //   token: tokens.busd,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 3,
  //   lpSymbol: 'ADA-BNB LP',
  //   lpAddresses: {
  //     97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
  //     56: '0xba51d1ab95756ca4eab8737ecd450cd8f05384cf',
  //   },
  //   token: tokens.ada,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'BAND-BNB LP',
  //   lpAddresses: {
  //     97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
  //     56: '0xc639187ef82271d8f517de6feae4faf5b517533c',
  //   },
  //   token: tokens.band,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 5,
  //   lpSymbol: 'DOT-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
  //   },
  //   token: tokens.dot,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 6,
  //   lpSymbol: 'EOS-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x981d2ba1b298888408d342c39c2ab92e8991691e',
  //   },
  //   token: tokens.eos,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 7,
  //   lpSymbol: 'LINK-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xaebe45e3a03b734c68e5557ae04bfc76917b4686',
  //   },
  //   token: tokens.link,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 11,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
  //   },
  //   token: tokens.usdt,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 12,
  //   lpSymbol: 'TWT-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x610e7a287c27dfFcaC0F0a94f547Cc1B770cF483',
  //   },
  //   token: tokens.twt,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 13,
  //   lpSymbol: 'XVS-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x41182c32F854dd97bA0e0B1816022e0aCB2fc0bb',
  //   },
  //   token: tokens.xvs,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 14,
  //   lpSymbol: 'ETH-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
  //   },
  //   token: tokens.eth,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 15,
  //   lpSymbol: 'BTCB-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
  //   },
  //   token: tokens.btcb,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 18,
  //   lpSymbol: 'XRP-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xc7b4b32a3be2cb6572a1c9959401f832ce47a6d2',
  //   },
  //   token: tokens.xrp,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 25,
  //   lpSymbol: 'UNI-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x4269e7F43A63CEA1aD7707Be565a94a9189967E9',
  //   },
  //   token: tokens.uni,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 29,
  //   lpSymbol: 'USDC-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x30479874f9320a62bce3bc0e315c920e1d73e278',
  //   },
  //   token: tokens.usdc,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 30,
  //   lpSymbol: 'SXP-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x752E713fB70E3FA1Ac08bCF34485F14A986956c4',
  //   },
  //   token: tokens.sxp,
  //   quoteToken: tokens.wbnb,
  // }
]

export default farms
