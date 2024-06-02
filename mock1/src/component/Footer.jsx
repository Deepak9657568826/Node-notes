import React from 'react'
import footerimg from "../images/footerimg.png"
import footertwitter from "../images/footertwitter.png"
import footertelegram from "../images/footertelegram.png"
import footermail from "../images/footermail.png"

function Footer() {
    return (
        <div className='footer_main_div'>
            {/* first */}
            <div className='footer_img'>
                <img src={footerimg} alt="footerimg" />

                {/* second */}
                <div className='footer_img_content'>SITEMAP</div>
            </div>



            {/* third */}
            <div className='footer_element'>
                <a href="">Home</a>
                <a href="">IDO</a>
                <a href="">Tokenomics</a>
                <a href="">Road Map</a>
                <a href="">Whitepaper</a>
                <a href="">Pledge</a>
                <a href="">NFT</a>
                <a href="">Games</a>
            </div>

            {/* four */}
            <div className='footer_icon'>

                <div className='footericonfirst'>
                    <img src={footertwitter} alt="" />
                </div>

                <div className='footericonfirst'>
                    <img src={footertelegram} alt="" />
                </div>

                <div className='footericonthird'>
                    <img src={footermail} alt="" />
                </div>

            </div>


        </div>
    )
}

export default Footer
