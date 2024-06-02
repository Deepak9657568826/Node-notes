import React from 'react'
import "../style/navbar.css"
import logo from '../assets/headerLogo.png'

function Navbar() {
    return (
        <div className='main'>
            <div className='header_main_div'>
                <div className='header_navbar'>
                    <div className='header_first_div'>
                        <img src={logo} alt="" />
                        <h1>Saviour</h1>
                    </div>

                    <div className='header_second_div'>
                        <a href="#">Home</a>
                        <a href="#">IDO</a>
                        <a href="#">Takenomics</a>
                        <a href="#">Roadmap</a>
                        <a href="#">Coming Soon</a>
                        <a href="#"><span class="material-symbols-outlined">
stat_minus_1
</span></a>

                    </div>

                    <div className='header_third_div'>
                        <button>Connect Wallet</button>
                    </div>
                </div>

                <div className='header_navbar_second'>
                    <h1>Where Blockchain Heroes Thrive, Rescuing
                        <br /> Dreams, Elevating Fortunes.</h1>
                </div>


            </div>


        </div>
    )
}

export default Navbar
