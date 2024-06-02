import React from 'react'
import "../style/four.css"
import img from "../assets/fourDivimg.png"

function Four() {
    return (
        <div className='fourDiv_main'>
            <h1>Tokenomics</h1>
            <button>Token Details</button>
            <div className='fourDiv_main_inner' >
                <div className='fourDiv_inner_first'>
                    <div className='foursame'>
                        <p className='ptag_first'>Name</p>
                        <p className='pTag'>Saviour</p>
                    </div>
                    <div className='foursame'>
                        <p className='ptag_first'>Symbol</p>
                        <p className='pTag'>SVR</p>
                    </div>
                    <div className='foursame'>
                        <p className='ptag_first'>Total Supply</p>
                        <p className='pTag'> 1000 Trillion</p>
                    </div>
                    <div className='foursame'>
                        <p className='ptag_first'>Detimais</p>
                        <p className='pTag'>18</p>
                    </div>


                </div>
                <div className='fourDiv_inner_second'>
                    <img src={img} alt="" />
                </div>
            </div>





        </div>
    )
}

export default Four
