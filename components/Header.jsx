"use client"
import localFont from 'next/font/local'
import Link from 'next/link';
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { cubicBezier } from 'framer-motion';

const ddib = localFont({ src: '../assets/D-DIN-Bold.woff2'})
const ddibRegular = localFont({ src: '../assets/D-DIN.woff2'})


const Header = () => {

    const [menu, setMenu] = useState(false)
    const [menubutton1, setMenubutton1] = useState({})
    const [menubutton2, setMenubutton2] = useState({})
    const [menubutton3, setMenubutton3] = useState({})
    const [menubg, setMenubg] = useState({})
    const [closemenu, setCloseMenu] = useState({})
    const [toggleMenuElements, setToggleMenuElements] = useState({})
    const [toggleMenuScroll, setToggleMenuScroll] = useState({})

    const hamburger = {
        animation1: {
            y: 3,
            rotate: 45,
            transition: {
                ease: "linear",
                duration: 0.2
            }
        },
        animation2: {
            x: 8,
            width: 0,
            transition: {
                ease: "linear",
                duration: 0.2
            }
        },
        animation3: {
            y: -5,
            rotate: -45,
            transition: {
                ease: "linear",
                duration: 0.2
            }
        }
    }
    const closeHamburger = {
        animation1: {
            y: 0,
            rotate: 0,
            transition: {
                ease: "linear",
                duration: 0.2
            }
        },
        animation2: {
            width: 16,
            x: 0,
            transition: {
                ease: "linear",
                duration: 0.2
            }
        },
        animation3: {
            y: 0,
            rotate: 0,
            transition: {
                ease: "linear",
                duration: 0.2
            }
        }
    }

    const hideClosemenu = {
        initail: {
            opacity: 1
        },
        animate: {
            opacity: 0
        }
    }
    const showClosemenu = {
        initail: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    }

    const showbg = {
        width: 350,
    }
    const hidebg = {
        width: 0
    }
    const easing = cubicBezier(0.24, 0.97, 0.25, 0.89)
    const showMenuElements = {
        initail: {
            opacity: 0,
            w: 0,
            y: 30
        },
        animate: {
            opacity: 1,
            y: 0,
            w: 350,
            transition: {
                ease: easing,
                duration: 0.3,
                delay: 0.2
            }
        }
    }
    const hideMenuElements = {
        initail: {
            opacity: 1,
            w: 350,
            y: 0
        },
        animate: {
            opacity: 0,
            w: 0,
            y: 30,
            transition: {
                ease: easing
            }
        },
        
    }



    const [matches, setMatches] = useState(false);
    const [oldScroll, setOldScroll] = useState(0)

    const scrollDown = () => {
        let hideMenuScroll
        // if(window.scrollY >= window.innerHeight){
        //     hideMenuScroll = {
        //         initail: {
        //             opacity: 1,
        //             height: 100,
        //             backgroundColor: "transparent"
        //         },
        //         animate: {
        //             opacity: 0,
        //             height: 0,
        //             backgroundColor: "#000"
        //         }
        //     }
        // } else {
            hideMenuScroll = {
                initail: {
                    opacity: 1,
                    height: 100
                },
                animate: {
                    opacity: 0,
                    height: 0
                }
            }
        // }
        setToggleMenuScroll(hideMenuScroll)
    }
    const scrollUp = () => {
        let showMenuScroll
        if(window.scrollY < window.innerHeight){
            showMenuScroll = {
                initail: {
                    backgroundColor: "#000"
                },
                animate: {
                    backgroundColor: "transparent"
                }
            }
        } else {
            showMenuScroll = {
                initail: {
                    opacity: 0,
                    height: 0,
                    backgroundColor: "transparent"
                },
                animate: {
                    opacity: 1,
                    height: 100,
                    backgroundColor: "#000"
                }
            }
        }
        setToggleMenuScroll(showMenuScroll)
    }


    const controleScroll = () => {
        if(window.scrollY > (window.innerHeight / 8) && window.scrollY > oldScroll){
            scrollDown()
        } else {
            scrollUp()
        }
        setOldScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", controleScroll)
        window.addEventListener("scroll", () => {
            if(menu){
                toggleMenu()
            }
        })

        return () => {
            window.removeEventListener("scroll", () => {
                if(menu){
                    toggleMenu()
                }
            })
            window.removeEventListener("scroll", controleScroll)
        }
    })

    useEffect(() => {
        const query = `(min-width: 1280px)`;
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [matches]);


    const toggleMenu = () => {
        const closebg = document.querySelector("#closebg")
        setMenubutton1(menu ? closeHamburger : hamburger)
        setMenubutton2(menu ? closeHamburger : hamburger)
        setMenubutton3(menu ? closeHamburger : hamburger)
        setMenubg(menu ? hidebg : showbg)
        setCloseMenu(menu ? hideClosemenu : showClosemenu)

        const menuItems = matches ? 5 : 13
        for(let i = 0; i < menuItems; i++){
            const menuItem = document.querySelector(`#menu-item-${i+1}`)
            menu ? (menuItem.classList.add("hidden"),
            menuItem.classList.remove("flex")) : (menuItem.classList.remove("hidden"), menuItem.classList.add("flex"))
        }
        menu ? (setTimeout(() => {
                closebg.classList.add("hidden")
            }, 500)) : (closebg.classList.remove("hidden")  )
        
        !menu ? setToggleMenuElements(showMenuElements) : setToggleMenuElements(hideMenuElements)
        setMenu(!menu)
    } 
    return (
        <div id='header' className={`${ddib.className} fixed top-0 z-20 w-full text-white text-[14px]`}>
            <div className=' justify-center flex w-full h-full '>
                <motion.div className='pl-36  top-0 w-full flex justify-end '
                    variants={toggleMenuScroll}
                    initial="initail"
                    animate="animate"
                >
                    <div className=' left-0 h-[100px] w-screen max-w-[1400px] flex justify-center items-center gap-9 flex-1 px-10 mx-auto'>
                        <Link href="/">
                            <svg className='relative top-[-6px] cursor-pointer' width="200" x="0px" y="0px" viewBox="0 0 400 50">
                                    <g >
                                    <path className="fill-white" d="M37.5,30.5H10.9v-6.6h34.3c-0.9-2.8-3.8-5.4-8.9-5.4H11.4c-5.7,0-9,2.1-9,6.7v4.9c0,4,3.4,6.3,8.4,6.3h26.9v7H1.5
                                    c0.9,3.8,3.8,5.8,9,5.8h27.1c5.7,0,8.5-2.2,8.5-6.9v-4.9C46.1,33.1,42.8,30.8,37.5,30.5z"></path>
                                    </g>
                                    <g >
                                    <path className="fill-white" d="M91.8,18.6H59v30.7h9.3V37.5h24.2c6.7,0,10.4-2.3,10.4-7.7v-3.4C102.8,21.4,98.6,18.6,91.8,18.6z M94.8,28.4
                                    c0,2.2-0.4,3.4-4,3.4H68.3l0.1-8h22c4,0,4.5,1.2,4.5,3.3V28.4z"></path>
                                    </g>
                                    <g >
                                    <polygon className="fill-white" points="129.9,17.3 124.3,24.2 133.8,37.3 114,37.3 109.1,42.5 137.7,42.5 142.6,49.3 153.6,49.3 	"></polygon>
                                    </g>
                                    <g >
                                    <path className="fill-white" d="M171.4,23.9h34.8c-0.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5,0-8.8,1.8-8.8,6.7v17.2c0,4.9,4.3,6.7,8.8,6.7h26.3
                                    c6,0,8.1-1.7,9.1-5.8h-34.8V23.9z"></path>
                                    </g>
                                    <g >
                                    <polygon className="fill-white" points="228.3,43.5 228.3,34.1 247,34.1 247,28.9 218.9,28.9 218.9,49.3 260.4,49.3 260.4,43.5 	"></polygon>
                                    <rect className="fill-white" x="219.9" y="18.6" width="41.9" height="5.4"></rect>
                                    </g>
                                    <g >
                                    <path className="fill-white" d="M287.6,18.6H273l17.2,12.6c2.5-1.7,5.4-3.5,8-5L287.6,18.6z"></path>
                                    <path className="fill-white" d="M308.8,34.3c-2.5,1.7-5,3.6-7.4,5.4l13,9.5h14.7L308.8,34.3z"></path>
                                    </g>
                                    <g >
                                    <path className="fill-white" d="M399,0.7c-80,4.6-117,38.8-125.3,46.9l-1.7,1.6h14.8C326.8,9.1,384.3,2,399,0.7L399,0.7z"></path>
                                    </g>
                            </svg>
                        </Link>
                        <div className='hidden xl:flex justify-center items-end gap-8 flex-1 w-fill'>
                                <div className='whitespace-nowrap cursor-pointer ul-animation'>FALCON 9</div>
                                <div className='whitespace-nowrap cursor-pointer ul-animation'>FALCON HEAVY</div>
                                <div className='whitespace-nowrap cursor-pointer ul-animation'>DRAGON</div>
                                <div className='whitespace-nowrap cursor-pointer ul-animation'>STARSHIP</div>
                                <div className='whitespace-nowrap cursor-pointer ul-animation'>HUMAN SPACEFLIGHT</div>
                                <div className='whitespace-nowrap cursor-pointer ul-animation'>RIDESHARE</div>
                                <div className='whitespace-nowrap cursor-pointer ul-animation'>STARSHEILD</div>
                                <div className='whitespace-nowrap cursor-pointer ul-animation'>STARLINK</div>
                        </div>
                        <div className='flex-1 xl:block hidden'></div>
                    </div>
                    <div className='gap-8 w-fit right-0 h-[100px] flex justify-center items-center mr-14'>
                        <div className='hidden xl:block cursor-pointer ul-animation'>
                            SHOP
                        </div>
                        <div onClick={toggleMenu} id="hamburger" className=' flex flex-col gap-[2px] justify-center h-[16px] w-[16px] cursor-pointer z-40'>
                                <motion.div id="bar1" className="bar"
                                    variants={menubutton1}
                                    animate="animation1"
                                    ></motion.div>
                                <motion.div id="bar2" className="bar"
                                    variants={menubutton2}
                                    animate="animation2"
                                    ></motion.div>
                                <motion.div id="bar1" className="bar"
                                    variants={menubutton3}
                                    animate="animation3"
                                    ></motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>    
            <motion.div id='closebg' className='hidden absolute top-0 right-0 w-full h-screen bg-[#00000050] ' onClick={toggleMenu}
                        variants={closemenu}
                        initial="initail"
                        animate="animate"
                        transition={
                            {
                                ease: "linear",
                                duration: 0.4,
                                when: "beforeChildren"
                            }
                        }
                ></motion.div>
            <motion.div id="menu-bg" className={`${ddibRegular.className} bg-black absolute w-0 top-0 h-screen pt-20 right-0 flex justify-center`}
                        animate={menubg}
                        transition={
                            {
                                ease: "linear",
                                duration: 0.3,
                                when: "beforeChildren"
                            }
                        }
                        >
                        <ul className='sticky right-12 top-20 w-[250px] flex flex-col text-[16px]'>
                            <motion.li id='menu-item-1' className='menu-item border-b-[1px]  opacity-0 border-b-[#252525] h-[41px] hidden justify-end items-center'
                                variants={toggleMenuElements}
                                initial="initail"
                                animate="animate"
                                >MISSION</motion.li>
                            <motion.li id='menu-item-2' className='menu-item border-b-[1px]  opacity-0 border-b-[#252525] h-[41px] hidden justify-end items-center'
                                variants={toggleMenuElements}
                                initial="initail"
                                animate="animate"
                                >LAUNCHES</motion.li>
                            <motion.li id='menu-item-3' className='menu-item border-b-[1px]  opacity-0 border-b-[#252525] h-[41px] hidden justify-end items-center'
                                variants={toggleMenuElements}
                                initial="initail"
                                animate="animate"
                                >CAREERS</motion.li>
                            <motion.li id='menu-item-4' className='menu-item border-b-[1px]  opacity-0 border-b-[#252525] h-[41px] hidden justify-end items-center'
                                variants={toggleMenuElements}
                                initial="initail"
                                animate="animate"
                                >UPDATES</motion.li>
                            <motion.li id='menu-item-5'  className='menu-item border-b-[1px] opacity-0 border-b-[#252525] h-[41px] hidden justify-end items-center'
                                variants={toggleMenuElements}
                                initial="initail"
                                animate="animate"
                                >SHOP</motion.li>
                            <motion.li id='menu-item-6'  className='menu-item border-b-[1px] opacity-0 border-b-[#252525] h-[41px] xl:hidden hidden justify-end items-center'
                                variants={toggleMenuElements}
                                initial="initail"
                                animate="animate"
                            >
                                FALCON 9</motion.li>
                            <motion.li id='menu-item-7'  className='menu-item border-b-[1px] opacity-0 border-b-[#252525] h-[41px] xl:hidden hidden justify-end items-center'
                                variants={toggleMenuElements}
                                initial="initail"
                                animate="animate"
                                >    
                            FALCON HEAVY</motion.li>
                            <motion.li id='menu-item-8'  className='menu-item border-b-[1px] opacity-0 border-b-[#252525] h-[41px] xl:hidden hidden justify-end items-center'
                                variants={toggleMenuElements}
                                initial="initail"
                                animate="animate"
                                >    
                            DRAGON</motion.li>
                            <motion.li id='menu-item-9'  className='menu-item border-b-[1px] opacity-0 border-b-[#252525] h-[41px] xl:hidden hidden justify-end items-center'
                                variants={toggleMenuElements}
                                initial="initail"
                                animate="animate"
                                >    
                            STARSHIP</motion.li>
                            <motion.li id='menu-item-10'  className='menu-item border-b-[1px] opacity-0 border-b-[#252525] h-[41px] xl:hidden hidden justify-end items-center'
                                variants={toggleMenuElements}
                                initial="initail"
                                animate="animate"
                                >    
                            HUMAN SPACEFLIGHT</motion.li>
                            <motion.li id='menu-item-11'  className='menu-item border-b-[1px] opacity-0 border-b-[#252525] h-[41px] xl:hidden hidden justify-end items-center'
                                variants={toggleMenuElements}
                                initial="initail"
                                animate="animate"
                                >    
                            RIDESHARE</motion.li>
                            <motion.li id='menu-item-12'  className='menu-item border-b-[1px] opacity-0 border-b-[#252525] h-[41px] xl:hidden hidden justify-end items-center'
                                variants={toggleMenuElements}
                                initial="initail"
                                animate="animate"
                                >    
                            STARSHEILD</motion.li>
                            <motion.li id='menu-item-13'  className='menu-item border-b-[1px] opacity-0 border-b-[#252525] h-[41px] xl:hidden hidden justify-end items-center'
                                variants={toggleMenuElements}
                                initial="initail"
                                animate="animate"
                            >    
                            STARLINK</motion.li>
                        </ul>
            </motion.div>
        </div>
        
    );
};

export default Header;