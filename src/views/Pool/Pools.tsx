import React from 'react'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import { Heading, Text} from '@pancakeswap/uikit'
import styled from 'styled-components'


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
const gigaList = 
[{name:'Bitcoin',title:'BTC',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/bitcoin-btc-logo.svg',contract:'0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'},
{name:'Ethereum',title:'ETH',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/ethereum-eth-logo.svg',contract:'0x2170ed0880ac9a755fd29b2688956bd959f933f8'},
{name:'Tether',title:'Tether',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/tether-usdt-logo.svg',contract:'#'},
{name:'Binance Coin',title:'BNB',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/binance-coin-bnb-logo.svg',contract:'#'},
{name:'cardano',title:'ADA',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/cardano-ada-logo.svg',contract:'0x81c15d3e956e55e77e1f3f257f0a65bd2725fc55'},
{name:'USD Coin',title:'USDC',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/usd-coin-usdc-logo.svg',contract:'0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'},
{name:'Venus XRP',title:'vXRP',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/xrp-xrp-logo.svg',contract:'0xb248a295732e0225acd3337607cc01068e3b9c10'},
{name:'Doge Coin',title:'Doge',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/dogecoin-doge-logo.svg',contract:'0xba2ae424d960c26247dd6c32edc70b295c744c43'},
{name:'Polkadot',title:'DOT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/polkadot-new-dot-logo.svg',contract:'0x7083609fce4d1d8dc0c979aab8c869ea2c873402'},
{name:'Binance USD',title:'BUSD',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/binance-usd-busd-logo.svg',contract:'#'},
{name:'Uniswap',title:'UNI',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/uniswap-uni-logo.svg',contract:'0xbf5140a22578168fd562dccf235e5d43a02ce9b1'},
{name:'Bitcoin Cash',title:'BCH',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/bitcoin-cash-bch-logo.svg',contract:'0x8ff795a6f4d97e7887c79bea79aba5cc76444adf'},
{name:'Litecoin',title:'LTC',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/litecoin-ltc-logo.svg',contract:'0x4338665cbb7b2485a8855a139b75d5e34ab0db94'},
{name:'Solana',title:'SOL',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/solana-sol-logo.svg',contract:'#'},
{name:'Chainlink',title:'LINK',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/chainlink-link-logo.svg',contract:'0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd'},
{name:'Wrapped Bitcoin',title:'WBTC',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/wrapped-bitcoin-wbtc-logo.svg',contract:'#'},
{name:'Venus DAI',title:'vDAI ',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/XVS.png',contract:'0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1'},
{name:'Ethereum Classic',title:'ETC',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/ethereum-classic-etc-logo.svg',contract:'0x3d6545b08693dae087e957cb1180ee38b9e3c25e'},
{name:'Stellar',title:'XLM',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/stellar-xlm-logo.svg',contract:'#'},
{name:'Polygon',title:'MATIC',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/polygon-matic-logo.svg',contract:'#'},
{name:'Internet Computer',title:'ICP',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/internet-computer-icp-logo.svg',contract:'#'},
{name:'THETA',title:'THETA',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/theta-theta-logo.svg',contract:'#'},
{name:'Filecoin',title:'FIL',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/filecoin-fil-logo.svg',contract:'#'},
{name:'VeChain',title:'VET',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/vechain-vet-logo.svg',contract:'#'},
{name:'Tron',title:'TRX',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/tron-trx-logo.svg',contract:'0x85eac5ac2f758618dfa09bdbe0cf174e7d574d5b'},
{name:'Monero',title:'XMR',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/monero-xmr-logo.svg',contract:'#'},
{name:'EOS',title:'EOS',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/eos-eos-logo.svg',contract:'0x56b6fb708fc5732dec1afc8d8556423a2edccbd6'},
{name:'Aave',title:'AAVE',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/aave-aave-logo.svg',contract:'#'},
{name:'UNUS SED LEO',title:'LEO',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/unus-sed-leo-leo-logo.svg',contract:'#'},
{name:'Crypto.com',title:'MCO',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/crypto-com-mco-logo.svg',contract:'#'},
{name:'Terra',title:'LUNA',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/terra-luna-luna-logo.svg',contract:'#'},
{name:'SHIBA INU',title:'SHIB',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/shiba-inu-shib-logo.svg',contract:'#'},
{name:'PancakeSwap',title:'CAKE',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/pancakeswap-cake-logo.svg',contract:'0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'},
{name:'Algorand',title:'ALGO',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/algorand-algo-logo.svg',contract:'#'},
{name:'FTX Token',title:'FTT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/ftx-token-ftt-logo.svg',contract:'#'},
{name:'Chainsquare',title:'CHS',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/chainsquare.png',contract:'0xadd8a06fd58761a5047426e160b2b88ad3b9d464'},
{name:'Klaytn',title:'KLAY',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/klaytn-klay-logo.svg',contract:'#'},
{name:'Bitcoin BEP2',title:'BTCB',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/bitcoin-btc-logo.svg',contract:'#'},
{name:'Bitcoin SV',title:'BSV',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/bitcoin-sv-bsv-logo.svg',contract:'#'},
{name:'Cosmos',title:'ATOM',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/cosmos-atom-logo.svg',contract:'0x0eb3a705fc54725037cc9e008bdede697f62f335'},
{name:'TerraUSD',title:'UST',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/UST2',contract:'0x56b6fb708fc5732dec1afc8d8556423a2edccbd6'},
{name:'NEO',title:'NEO',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/neo-neo-logo.svg',contract:'#'},
{name:'Tezos',title:'XTZ',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/tezos-xtz-logo.svg',contract:'0x16939ef78684453bfdfb47825f8a5f714f12623a'},
{name:'Compound',title:'COMP',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/compound-comp-logo.svg',contract:'0x52ce071bd9b1c4b00a0b92d298c512478cad67e8'},
{name:'IOTA',title:'MIOTA',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/iota-miota-logo.svg',contract:'0xd944f1d1e9d5f9bb90b62f9d45e447d989580782'},
{name:'Avalanche',title:'AVAX',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/avalanche-avax-logo.svg',contract:'0x1ce0c2827e2ef14d5c4f29a091d735a204794041'},
{name:'Amp',title:'AMP',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/amp-amp-logo.svg',contract:'#'},
{name:'Hedera Hashgraph',title:'HBAR',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/hedera-hashgraph-hbar-logo.svg',contract:'#'},
{name:'The Graph',title:'GRT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/the-graph-grt-logo.svg',contract:'#'},
{name:'Dash',title:'DASH',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/dash-dash-logo.svg',contract:'#'},
{name:'Theta Fuel',title:'TFUEL',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/theta-fuel-tfuel-logo.svg',contract:'#'},
{name:'Kusama',title:'KSM',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/kusama-ksm-logo.svg',contract:'#'},
{name:'BitTorrent',title:'BTT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/bittorrent-btt-logo.svg',contract:'0x8595f9da7b868b1822194faed312235e43007b49'},
{name:'Waves',title:'WAVES',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/waves-waves-logo.svg',contract:'#'},
{name:'Elrond',title:'EGLD',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/elrond-egld-egld-logo.svg',contract:'#'},
{name:'Huobi Token',title:'HT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/huobi-token-ht-logo.svg',contract:'#'},
{name:'Chiliz',title:'CHZ',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/Chiliz.png',contract:'#'},
{name:'Decred',title:'DCR',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/decred-dcr-logo.svg',contract:'#'},
{name:'TrueUSD',title:'TUSD',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/trueusd-tusd-logo.svg',contract:'#'},
{name:'Celsius',title:'CEL',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/celsius-cel-logo.svg',contract:'#'},
{name:'NEM',title:'XEM',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/nem-xem-logo.svgISSED',contract:'#'},
{name:'Zcash',title:'ZEC',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/zcash-zec-logo.svg',contract:'0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb'},
{name:'Tezos',title:'XTZ',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/stacks-stx-logo.svg',contract:'#'},
{name:'Stacks',title:'STX',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/compound-comp-logo.svg',contract:'0x715d400f88c167884bbcc41c5fea407ed4d2f8a0'},
{name:'Axie Infinity',title:'AXS',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/axie-sold.png',contract:'0x715d400f88c167884bbcc41c5fea407ed4d2f8a0'},
{name:'yearn.finance',title:'YFI',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/yearn-finance-yfi-logo.svg',contract:'0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e'},
{name:'Decentraland',title:'MANA',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/decentraland-mana-logo.svg',contract:'#'},
{name:'Synthetix',title:'SNX',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/synthetix-network-token-snx-logo.svg',contract:'0x9ac983826058b8a9c7aa1c9171441191232e8404'},
{name:'XinFin Network',title:'XDC',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/xdc-icon.svg',contract:'#'},
{name:'Helium',title:'HNT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/helium-hnt-logo.svg',contract:'#'},
{name:'Enjin Coin',title:'ENJ',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/enjin-coin-enj-logo.svg',contract:'#'},
{name:'Paxos Standard',title:'PAX',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/paxos-standard-pax-logo.svg',contract:'0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094'},
{name:'THORChain',title:'RUNE',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/thorchain-rune-logo.svg',contract:'#'},
{name:'SushiSwap',title:'SUSHI',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/sushiswap-sushi-logo.svg',contract:'#'},
{name:'Holo',title:'HOT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/holo-hot-logo.svg',contract:'#'},
{name:'Quant',title:'QNT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/quant-qnt-logo.svg',contract:'#'},
{name:'Mandala Exchange',title:'Mdex',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/mandala.png',contract:'#'},
{name:'KuCoin Token',title:'KCS',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/kucoin-token-kcs-logo.svg',contract:'#'},
{name:'Basic Attention Token',title:'BAT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/basic-attention-token-bat-logo.svg',contract:'0x101d82428437127bf1608f699cd651e6abf9766e'},
{name:'NEAR Protocol',title:'NEAR',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/near-protocol-near-logo.svg',contract:'0x1fa4a73a3f0133f0025378af00236f3abdee5d63'},
{name:'Flow',title:'FLOW',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/flow-flow-logo.svg',contract:'0xb86abcb37c3a4b64f74f59301aff131a1becc787'},
{name:'Zilliqa',title:'ZIL',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/zilliqa-zil-logo.svg',contract:'#'},
{name:'Bitcoin Gold',title:'BTG',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/bitcoin-gold-btg-logo.svg',contract:'#'},
{name:'Telcoin',title:'TEL',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/telcoin-tel-logo.svg',contract:'#'},
{name:'Bancor',title:'BNT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/bancor-bnt-logo.svg',contract:'#'},
{name:'Harmony',title:'ONE',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/harmony-one-logo.svg',contract:'#'},
{name:'OKB',title:'OKB',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/okb-okb-logo.svg',contract:'#'},
{name:'Revain',title:'REV',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/revain-rev-logo.svg',contract:'#'},
{name:'Celo',title:'CELO',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/celo-celo-logo.svg',contract:'#'},
{name:'HUSD',title:'HUSD',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/husd-husd-logo.svg',contract:'#'},
{name:'Ontology',title:'ONT',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/ontology-ont-logo.svg',contract:'0xfd7b3a77848f1c2d67e05e54d78d174a0c850335'},
{name:'DigiByte',title:'DGB',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/digibyte-dgb-logo.svg',contract:'#'},
{name:'Qtum',title:'QTUM',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/qtum-qtum-logo.svg',contract:'#'},
{name:'Horizon',title:'HZ',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/horizon.png',contract:'#'},
{name:'Siacoin',title:'SC',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/siacoin-sc-logo.svg',contract:'#'},
{name:'Curve DAO',title:'CRV',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/curve-dao-token-crv-logo.svg',contract:'#'},
{name:'SwissBorg',title:'CHSB',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/swissborg.svg',contract:'#'},
{name:'UMA',title:'UMA',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/uma-uma-logo.svg',contract:'#'},
{name:'0x',title:'ZRX',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/0x-zrx-logo.svg',contract:'#'},
{name:'Ravencoin',title:'RVN',ARP:'0%',earned:'0',stacked:'0',img:'./images/gigapoolIcons/ravencoin-rvn-logo.svg',contract:'#'},
]
const Gigapool: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Page className='PageCon' style={{margin:'25px 300px',textAlign:'center',alignItems:'center'}}>
       <Hero className='headergigapool'>
        <Heading as="h1" scale="xl" mb="24px" color="secondary">
        <div style={{ fontSize : '30pt', color:'#DAA520' }}> {t('Stake tokens to earn GLENTY')}</div>  
        </Heading>
        <Text><div style={{ color: '#DAA520', fontSize: '20px' ,fontWeight:'lighter'}}>{t('Deposit Fee will be used to buyback GLENTY')}</div></Text>
      </Hero> 
      {/* <div className='removed' style={{display:'grid',textAlign:'center',alignItems:'center',gridTemplateColumns:'20% 30% 50%',width:'50%',margin:'0 auto'}}>
      <label htmlFor='checkbox' className="switch">
      <input type="checkbox" />
      <span className="slider round" />
      </label>
      <h6 style={{textAlign:'left',color:'white',fontSize:'12pt',fontWeight:'lighter'}}>stacked only</h6>
  </div> */}
      <div className='GlentyContainer' style={{marginTop:'25px',background: 'url(./images/short_gradient.svg)',backgroundRepeat: 'no-repeat'}}>
      <Heading as="h1" scale="xl" mb="24px" color="secondary">
        <div style={{ fontSize : '56pt', color:'white' }}> {t('GLENTY')}</div>  
        </Heading>
        {/* glenty coins */}
        <div className='GlentyCont'>
            {/* coin container */}
        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack GLENTY earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'30%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 className='firsth1' style={{fontSize:'12pt',width:'30%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 5px'}}>1x</h1>
                    <h1 className='secondh1' style={{fontSize:'12pt',width:'80%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 1px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'30%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container finished */}
        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack Top100 earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'30%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 className='firsth1' style={{fontSize:'12pt',width:'30%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 5px'}}>1x</h1>
                    <h1 className='secondh1' style={{fontSize:'12pt',width:'80%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 1px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'30%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        </div> 
         
      </div>

      {/* GIGAPOOL */}
      <div className='gigapoolC' style={{marginTop:'17vh',background: 'url("./images/Fichier 11.svg")',backgroundRepeat: 'no-repeat'}}>
      <Heading as="h1" scale="xl" mb="24px" color="secondary">
        <div className='gigapoolheader'> {t('GIGAPOOL')}</div>  
        </Heading>
        <input type='text' style={{display:'none'}} className='search searchg' placeholder='search ...' />

        {/* glenty coins */}
        <div className='GigapoolCon'>
            {/* coin container */}
        {gigaList.map((coin)=>(
            <div key={gigaList.indexOf(coin)} className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img className='coinIcon' style={{height:'75px',width:'75px'}} src={coin.img} alt={coin.name} />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'20pt',fontWeight:'lighter'}}>{coin.title}</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter',width:'110%',marginLeft:'-10%'}}>Stack {coin.name} earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> {coin.ARP}</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />{coin.earned}</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />{coin.stacked}</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'30%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href={`https://bscscan.com/token/${coin.contract}`} style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        ))}

        </div> 
         
      </div>



      {/* OUTSIDER */}
      <div className='gigapoolC' style={{marginTop:'17vh',background: 'url("./images/Fichier 11.svg")',backgroundRepeat: 'no-repeat'}}>
      <Heading as="h1" scale="xl" mb="24px" color="secondary">
        <div className='gigapoolheader'> {t('OUTSIDERS')}</div>  
        </Heading>
        <input type='text' style={{display:'none'}} className='search searcho' placeholder='search ...' />
        {/* glenty coins */}
        <div className='outCon'>
            {/* coin container */}
        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack GLENTY earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'30%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin end */}

        {/* coin conatiner */}
        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack GLENTY earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'30%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}


        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack GLENTY earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'30%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}
        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack GLENTY earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}
        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack Top100 earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}
        {/* coin container */}
        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack GLENTY earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'30%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin end */}

        {/* coin conatiner */}
        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack GLENTY earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'30%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}


        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack GLENTY earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'30%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}
        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack GLENTY earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}
        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack Top100 earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}
        {/* coin container */}
        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack GLENTY earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'30%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin end */}

        {/* coin conatiner */}
        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack GLENTY earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'30%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}


        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack GLENTY earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'30%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}
        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack GLENTY earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}
        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack Top100 earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}
        {/* coin container */}
        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack GLENTY earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'30%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin end */}

        {/* coin conatiner */}
        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack GLENTY earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'30%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}


        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack GLENTY earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'30%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}
        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack GLENTY earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}
        <div className='coin'>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 className='coinTop' style={{color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
                    <h6 style={{marginTop:'3%',color:'white',fontSize:'8pt',fontWeight:'lighter'}}>Stack Top100 earn GLENTY</h6>
                </div>
            </div>
            <div style={{backgroundColor:'#280d5f'}}>
                <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'8pt',color:'white',marginTop:'25px'}}><span style={{textDecoration: 'underline'}}>APR:</span> 0.00%</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Glenty earned<br />0</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>ETH Stacked<br />0</h1>
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                    <h1 style={{fontSize:'12pt',width:'50%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 5px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' className='buttonUN' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
            </div>
            <div style={{backgroundColor:'#280d5f',padding:'30px 0',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
            <details>
  <summary style={{color:'white'}}>Details</summary>
  <div style={{display:'grid',gridTemplateColumns:'45% 25%',width:'100%',gridGap:'25%'}}>
                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                <div style={{fontWeight:'lighter',fontSize:'12pt',color:'white',marginTop:'25px'}}>Deposit</div>
                <br />
                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>Total Liquidity:</h1>
                </div>
                <div style={{marginTop:'25px',marginBottom:'20px'}}>
                    <a href="glenty" style={{fontWeight:'lighter',fontSize:'12pt',color:'white'}}>View on BscScan</a>
                </div>
                </div>
                <div style={{textAlign:'right',paddingTop:'25px'}}>
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 0%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        </div> 
         
      </div>
    </Page>
  )
}

export default Gigapool
