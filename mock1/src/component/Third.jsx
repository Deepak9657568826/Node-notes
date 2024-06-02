import React from 'react'
import "../style/third.css"

function Third() {

    return (
        <div className='third_main'>
            <h1 className='third_heading'>Participate in our IDO Event!</h1>
            <div className='third_main_inner_div'>

                <div className='third_main_first'>
                    <p className='firstpTagThird'> During our IDO event, you will gain early access to our revolutionary ecosystem, designed to empower everyone to share wealth and achieve success.</p>
                    <button className='btn_third'>Token Info</button>
                    <div className='fourDiv_inner_first'>
                        <div className='foursame'>
                            <p className='ptag_first'>Total Token Supply</p>
                            <p className='pTag'>20%</p>
                        </div>
                        <div className='foursame'>
                            <p className='ptag_first'>Soft Cap</p>
                            <p className='pTag'>200 BNB</p>
                        </div>
                        <div className='foursame'>
                            <p className='ptag_first'>Initial exchange
                                rate</p>
                            <p className='pTag'> 1 BNB</p>
                        </div>

                        <h3 className='middle_H1'>Recommended Referral Commission</h3>

                        <div className='foursame'>
                            <p className='ptag_first'>1st Generation</p>
                            <p className='pTag'>5%</p>
                        </div>

                        <div className='foursame'>
                            <p className='ptag_first'>2nd Generation</p>
                            <p className='pTag'>2%</p>
                        </div>
                    </div>

                    <button className='third_main_btn'> Connect Wallet</button>

                    <h1 className='third_main_h1' >Become an affiliate & Earn <br /> 7% as Commission!</h1>

                    <div className='third_last_div'>
                        <p>Generate a unique referral link</p>
                        <button>Generate</button>

                    </div>


                </div>

                <div className='third_main_second'>
                    <h1 >PRESALE 1</h1>
                    <h4>1 Saviour = 0.657 USDT</h4>
                    <p className='firstThrid_ptag'>Next Stage Price = 0.723 USDT</p>
                    <p className='second_Thrid_ptag'>Sold - $34,56,56,764/$50,00,00,000</p >
                    <p className='third_Thrid_ptag'>Raised - $34,56,56,764/$40,00,00,000</p>
                    <form action="">
                        <input id='firstInput' type="text" placeholder='Enter the amount (BNB)' />

                        <input id='secondInput' type="text" placeholder='Minimum Quantity to Buy' />

                        <input id='thirdInput' type="text" placeholder='Maximum Quantity of Tokens' />
                    </form>
                    <div className='thir_lastButton_Div'>
                        <button className='third_Div_second_last_btn'>Buy</button>
                        <button className='third_Div_last_btn'>Claim Demo</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Third
