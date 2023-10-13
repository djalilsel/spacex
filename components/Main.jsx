'use client'
import localFont from 'next/font/local';
import React, { useEffect, useState } from 'react';
import { motion, useAnimate } from 'framer-motion';
import { cubicBezier } from 'framer-motion';

const ddibBold = localFont({ src: '../assets/D-DIN-Bold.woff2'})
const ddib = localFont({ src: '../assets/D-DIN.woff2'})

const Main = ({ bgImage, title, missionTitle}) => {

  // const firstDivAnimation = {
  //   initial: {
  //     opacity: 0,
  //   },
  //   animate: {
  //     opacity: 1,
  //     transition: {
  //       ease: "linear",
  //       duration: 0.4,
  //     }
  //   }
  // }
  // const secondDivAnimation = {
  //   initial: {
  //     translateY: 0,
  //   },
  //   animate: {
  //     translateY: 10,
  //     transition: {
  //       ease: easing,
  //       duration: 0.8,
  //       delay: 0.4
  //     }
  //   }
  // }
  // const thirdDivAnimation = {
  //   initial: {
  //     opacity: 1,
  //   },
  //   animate: {
  //     opacity: 0,
  //     transition: {
  //       ease: "linear",
  //       duration: 0.6,
  //       delay: 1,
  //     }
  //   }
  // }


  // const [firstDiv, setFirstDiv] = useState(firstDivAnimation)
  // const suii = ['sui']
  // const [secondDiv, setSecondDiv] = useState(secondDivAnimation)
  // const [thirdDiv, setThirdDiv] = useState(thirdDivAnimation)
  // const [sui, setSui] = useState(false)
  // const [ARROW, setARROW] = useState()

  const [arrow, animate] = useAnimate()

  const sequence = () => {
    animate([
      [arrow.current, { 
          opacity: 1
        }, {
          duration: 0.6
        }],
      [arrow.current, { 
          translateY: 10,
        }, {
          duration: 1.8,
          ease: cubicBezier(0.40, 0.40, 0.60, 0.80)
        }],
      [arrow.current, { 
          opacity: 0
        }, {
          duration: 0.6
        }],
      [arrow.current, { 
          translateY: 0
        }, {
          duration: 0.4
        }],
    ])
  }

    useEffect (() => {
      setInterval(() => {
        sequence()
      }, 4000);
    })
 


    return (
      <div className={`${ddibBold.className} bg-no-repeat bg-center bg-cover h-screen relative`} style={{ backgroundImage: `url(/_next/static/media/${bgImage})` }}>
        <div className='absolute bottom-0 left-0 w-full h-fit flex justify-center xl:px-[300px] px-[50px] py-[140px]'>
          <div className='w-screen max-w-[1400px] flex justify-center'>
            <div className='w-fit max-w-[520px] h-fit flex flex-col leading-[36px] text-white'>
              <span className={`${ddib.className} text-[20px] `}>
                {title}
              </span>
              <span className='text-[48px] leading-[48px]'>
                {missionTitle}
              </span>
              <button className='inline-block w-fit min-w-[130px] py-0 px-[15px] border-[2px] mt-[30px] border-white'>
                <div className='text-[14px] h-[50px] w-[130px] flex justify-center items-center'>
                  LEARN MORE
                </div>
              </button>
            </div> 
            <div className='flex-1'></div>
          </div>
        </div>
        <div className='absolute bottom-16 left-1/2 opacity-0 cursor-pointer'
          ref={arrow}
          onClick={sequence}
        >
                    <svg width="30px" height="20px" aria-label="more content below">
                      <path fillOpacity="0" stroke="#ffffff" stroke-width="2px" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "></path>
                    </svg>
        </div>
      </div>
    );
};

export default Main;