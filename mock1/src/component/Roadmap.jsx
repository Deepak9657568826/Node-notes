import React from 'react'

import img1 from '../images/phase 1.png'
import img2 from '../images/phase 2.png'
import img3 from '../images/phase 3.png'
import img4 from '../images/phase 4.png'

function Roadmap() {
    return (
        <div className='main_div'>

            {/* roadmap container */}
            <div className='roadmap_main_div'>

                <div className='roadmap_containt'>
                    <h4 >Road Map</h4>
                </div>

                <div className='roadmap_cards_container'>

                    <div className='cards'>
                        <img src={img1} alt="cards" />
                    </div>
                    <div className='cards'>
                        <img src={img2} alt="cards" />
                    </div>
                    <div className='cards'>
                        <img src={img3} alt="cards" />
                    </div>
                    <div className='cards'>
                        <img src={img4} alt="cards" />
                    </div>
                </div>

            </div>


            

        </div>
    )
}

export default Roadmap
