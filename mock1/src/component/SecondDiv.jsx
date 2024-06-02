import React from 'react'
import "../style/secondDiv.css"
import img from "../assets/secondDIvImage.png"

function SecondDiv() {

    return (
        <div className='second_div_main'>

            <div  className='second_div_main_after'>
                <div className='second_div_sunfirst'>
                    <h1>Introduction</h1>
                    <p>We've all been in the mud once, and now we've decided to fight it out.
                        Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future! <br />
                        Our mission is to empower everyone to share wealth and succeed. <br />
                        read more...
                    </p>
                    <button id='secondfirst_div_main_btn'> Documents <span class="material-symbols-outlined">
stat_minus_1
</span></button>

                </div>

                <div className='second_div_second'>
                    <img src={img} alt="" />
                </div>
            </div>

        </div>
    )
}

export default SecondDiv
