import React from 'react'
import '../App.css'
import faqimg from "../images/faqimg.png"


function Faq() {
  return (

    <div className='faqMain_container'>
      <div className='faq_containt'>FAQ</div>
      <div className='faq_inner_main_div'>
        {/* first */}
        <div className='faq_img'>
          <img src={faqimg} alt="" />
        </div>

        {/* second  div for input */}
        <div className='faq_input_main_div'>
          {/* first */}
          <div className='faqFirstmain'>
            <div className='faqnumber'>1</div>
            <div className='faqContaintfirst'>WHY CHOOSE "SAVIOR"?</div>
            <div className='faqicon1'>
              <span class="material-symbols-outlined">
                stat_minus_1
              </span>
            </div>
          </div>

          {/* second */}
          <div className='faqSecondmain'>
            <div className='faqnumber'>2</div>
            <div className='faqContaintsecond'>WHY IS THE IDO DURATION SO LONG?</div>
            <div className='faqicon2'>
              <span class="material-symbols-outlined">
                stat_minus_1
              </span>
            </div>
          </div>

          {/* third */}
          <div className='faqThirdmain'>
            <div className='faqnumber'>3</div>
            <div className='faqContaintthird'>WHEN WILL TRADING GO LIVE?</div>
            <div className='faqicon3'>
              <span class="material-symbols-outlined">
                stat_minus_1
              </span>
            </div>
          </div>

          {/* fourth */}
          <div className='faqFourmain'>
            {/* first */}
            <div className='faqfourmainfirst'>
              <div className='faqnumber'>4</div>
              <div className='faqContaintthird'>WHEN CAN WE CLAM THE TOKEN?</div>
              <div className='faqicon4'>
                <span class="material-symbols-outlined">
                  keyboard_control_key
                </span></div>
            </div>

            {/* secnd */}

            <div className='faqfourmainsecond'>
              <div className='faqfourmainsecondinner'> After the IDO concludes, you can claim the tokens on our official <br /> website.</div>

            </div>
          </div>
        </div>



      </div>

    </div>

  )
}

export default Faq
