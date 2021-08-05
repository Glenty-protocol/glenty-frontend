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

const Gigapool: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Page style={{margin:'25px 300px',textAlign:'center',alignItems:'center'}}>
       <Hero>
        <Heading as="h1" scale="xl" mb="24px" color="secondary">
        <div style={{ fontSize : '30pt', color:'#DAA520' }}> {t('Stake tokens to earn GLENTY')}</div>  
        </Heading>
        <Text><div style={{ color: '#DAA520', fontSize: '20px' ,fontWeight:'lighter'}}>{t('Deposit Fee will be used to buyback GLENTY')}</div></Text>
      </Hero> 
      <div style={{display:'grid',textAlign:'center',alignItems:'center',gridTemplateColumns:'20% 30% 50%',width:'50%',margin:'0 auto'}}>
      <label htmlFor='checkbox' className="switch">
      <input type="checkbox" />
      <span className="slider round" />
      </label>
      <h6 style={{textAlign:'left',color:'white',fontSize:'12pt',fontWeight:'lighter'}}>stacked only</h6>
      </div>
      <div style={{marginTop:'25px',background: 'url(./images/short_gradient.svg)',backgroundRepeat: 'no-repeat'}}>
      <Heading as="h1" scale="xl" mb="24px" color="secondary">
        <div style={{ fontSize : '56pt', color:'white' }}> {t('GLENTY')}</div>  
        </Heading>
        {/* glenty coins */}
        <div style={{display:'grid',textAlign:'center',alignItems:'center',gridTemplateColumns:'45% 45%',width:'100%',margin:'0 auto',gridGap:'10%'}}>
            {/* coin container */}
        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'30%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'80%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container finished */}
        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'30%',backgroundColor:'white',margin:'25px 50%',borderRadius:'20px',textAlign:"center",padding:'5px 15px'}}>1x</h1>
                    <h1 style={{fontSize:'12pt',width:'80%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        </div> 
         
      </div>

      {/* GIGAPOOL */}
      <div style={{marginTop:'25vh',background: 'url("./images/Fichier 11.svg")',backgroundRepeat: 'no-repeat'}}>
      <Heading as="h1" scale="xl" mb="24px" color="secondary">
        <div style={{ fontSize : '56pt', color:'white' }}> {t('GIGAPOOL')}</div>  
        </Heading>
        {/* glenty coins */}
        <div style={{display:'grid',textAlign:'center',alignItems:'center',gridTemplateColumns:'20% 20% 20% 20% 20%',width:'160%',margin:'0 auto',gridGap:'3%',marginLeft:'-35%',gridRowGap:'50px'}}>
            {/* coin container */}
        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container end */}
        {/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

{/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container end */}
        {/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

{/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container end */}
        {/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

{/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container end */}
        {/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

{/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container end */}
        {/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

{/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container end */}
        {/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

{/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container end */}
        {/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

{/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container end */}
        {/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

{/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container end */}
        {/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

{/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container end */}
        {/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

{/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container end */}
        {/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

{/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container end */}
        {/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

{/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container end */}
        {/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

{/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container end */}
        {/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

{/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container end */}
        {/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

{/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container end */}
        {/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

{/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container end */}
        {/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

{/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>
        {/* coin container end */}
        {/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

{/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}
{/* coin container */}

        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        {/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        {/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        {/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        {/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        {/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        {/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        {/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        {/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        {/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}


        {/* coin container */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin container end */}

        </div> 
         
      </div>



      {/* OUTSIDER */}
      <div style={{marginTop:'25vh',background: 'url("./images/Fichier 11.svg")',backgroundRepeat: 'no-repeat'}}>
      <Heading as="h1" scale="xl" mb="24px" color="secondary">
        <div style={{ fontSize : '56pt', color:'white' }}> {t('OUTSIDERS')}</div>  
        </Heading>
        {/* glenty coins */}
        <div style={{display:'grid',textAlign:'center',alignItems:'center',gridRowGap:'50px',gridTemplateColumns:'20% 20% 20% 20% 20%',width:'160%',margin:'0 auto',gridGap:'3%',marginLeft:'-35%'}}>
            {/* coin container */}
        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin end */}

        {/* coin conatiner */}
        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}
        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}
        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}
        {/* coin container */}
        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin end */}

        {/* coin conatiner */}
        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}
        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}
        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}
        {/* coin container */}
        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin end */}

        {/* coin conatiner */}
        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}
        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}
        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}
        {/* coin container */}
        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        {/* coin end */}

        {/* coin conatiner */}
        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}


        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}
        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Glenty</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
                    <h1 style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>0$</h1>
                </div>
            </div>
</details>

                </div>
        </div>

        
        {/* coin end */}

        {/* coin conatiner */}
        <div>
            <div style={{display:'grid',gridTemplateColumns:'45% 45%',width:'100%',gridGap:'10%',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',backgroundColor:'rgba(49,39,131,0.9)'}}>
                <img style={{height:'100px',width:'100px', paddingLeft:'10px'}} src='./images/top100.svg' alt='top100' />
                <div>
                    <h1 style={{marginTop:'10%',color:'white',fontSize:'28pt',fontWeight:'lighter'}}>Top100</h1>
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
                    <h1 style={{fontSize:'12pt',width:'100%',backgroundColor:'rgba(120, 140, 255, 0.9)',marginTop:'25px',borderRadius:'20px',textAlign:"center",padding:'15px 25px',color:'white'}}>Harvest</h1>
                </div>
            </div>
            <button value='unlock' type="button" style={{backgroundColor:'#DAA520',width:'80%',margin:'25px auto',height:'50px',color:'white',borderRadius:'30PX'}}>unlock wallet</button>
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
                    <a href="glenty" style={{fontSize:'12pt',width:'30%',margin:'25px 30%',borderRadius:'20px',textAlign:"center",padding:'5px 15px',color:'white'}}>Glenty</a>
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
