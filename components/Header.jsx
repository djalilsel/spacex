"use client"
import localFont from 'next/font/local'
import Link from 'next/link';
import { motion } from 'framer-motion'

const ddib = localFont({ src: '../assets/D-DIN-Bold.woff2'})

const Header = () => {
    return (
        <div className={`${ddib.className} absolute justify-center text-[14px] px-12 flex h-[900vh] text-white w-full z-30`}>
            <div className='relative w-full flex justify-center'>

                <div className='top-0 left-0 h-[100px] sticky max-w-[1400px] flex items-center gap-9 flex-1 px-10'>
                    <Link href="/">
                        <svg className='relative top-[-6px] cursor-pointer' width="200" x="0px" y="0px" viewBox="0 0 400 50">
                                <g class="letter_s">
                                <path class="fill-white" d="M37.5,30.5H10.9v-6.6h34.3c-0.9-2.8-3.8-5.4-8.9-5.4H11.4c-5.7,0-9,2.1-9,6.7v4.9c0,4,3.4,6.3,8.4,6.3h26.9v7H1.5
                                c0.9,3.8,3.8,5.8,9,5.8h27.1c5.7,0,8.5-2.2,8.5-6.9v-4.9C46.1,33.1,42.8,30.8,37.5,30.5z"></path>
                                </g>
                                <g class="letter_p">
                                <path class="fill-white" d="M91.8,18.6H59v30.7h9.3V37.5h24.2c6.7,0,10.4-2.3,10.4-7.7v-3.4C102.8,21.4,98.6,18.6,91.8,18.6z M94.8,28.4
                                c0,2.2-0.4,3.4-4,3.4H68.3l0.1-8h22c4,0,4.5,1.2,4.5,3.3V28.4z"></path>
                                </g>
                                <g class="letter_a">
                                <polygon class="fill-white" points="129.9,17.3 124.3,24.2 133.8,37.3 114,37.3 109.1,42.5 137.7,42.5 142.6,49.3 153.6,49.3 	"></polygon>
                                </g>
                                <g class="letter_c">
                                <path class="fill-white" d="M171.4,23.9h34.8c-0.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5,0-8.8,1.8-8.8,6.7v17.2c0,4.9,4.3,6.7,8.8,6.7h26.3
                                c6,0,8.1-1.7,9.1-5.8h-34.8V23.9z"></path>
                                </g>
                                <g class="letter_e">
                                <polygon class="fill-white" points="228.3,43.5 228.3,34.1 247,34.1 247,28.9 218.9,28.9 218.9,49.3 260.4,49.3 260.4,43.5 	"></polygon>
                                <rect class="fill-white" x="219.9" y="18.6" width="41.9" height="5.4"></rect>
                                </g>
                                <g class="letter_x">
                                <path class="fill-white" d="M287.6,18.6H273l17.2,12.6c2.5-1.7,5.4-3.5,8-5L287.6,18.6z"></path>
                                <path class="fill-white" d="M308.8,34.3c-2.5,1.7-5,3.6-7.4,5.4l13,9.5h14.7L308.8,34.3z"></path>
                                </g>
                                <g class="letter_swoosh">
                                <path class="fill-white" d="M399,0.7c-80,4.6-117,38.8-125.3,46.9l-1.7,1.6h14.8C326.8,9.1,384.3,2,399,0.7L399,0.7z"></path>
                                </g>
                        </svg>
                    </Link>
                    <div className='flex justify-center items-end gap-8 flex-1'>
                            <div className='whitespace-nowrap cursor-pointer ul-animation'>FALCON 9</div>
                            <div className='whitespace-nowrap cursor-pointer ul-animation'>FALCON HEAVY</div>
                            <div className='whitespace-nowrap cursor-pointer ul-animation'>DRAGON</div>
                            <div className='whitespace-nowrap cursor-pointer ul-animation'>STARSHIP</div>
                            <div className='whitespace-nowrap cursor-pointer ul-animation'>HUMAN SPACEFLIGHT</div>
                            <div className='whitespace-nowrap cursor-pointer ul-animation'>RIDESHARE</div>
                            <div className='whitespace-nowrap cursor-pointer ul-animation'>STARSHEILD</div>
                            <div className='whitespace-nowrap cursor-pointer ul-animation'>STARLINK</div>
                    </div>
                    <div className='flex-1'></div>
                </div>
                <div className='absolute gap-8 w-fit top-0 right-0 h-[100px] flex justify-center items-center '>
                    <div className=' cursor-pointer'>
                        SHOP
                    </div>
                    <button id="hamburger" className='flex flex-col gap-[2px] justify-center h-[14px] w-[16px] cursor-pointer'>
                            <div id="bar1" className="bar"></div>
                            <div id="bar2" className="bar"></div>
                            <div id="bar3" className="bar"></div>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Header;