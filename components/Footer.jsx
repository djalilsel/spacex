"use client"
import localFont from 'next/font/local';
import React from 'react';
import { motion } from 'framer-motion';


const ddibBold = localFont({ src: '../assets/D-DIN-Bold.woff2'})
const ddib = localFont({ src: '../assets/D-DIN.woff2'})
const Footer = () => {


    return (
        <div className={`${ddibBold.className} h-[80px]  bg-black text-white flex justify-center items-center gap-[40px] text-[12px]`}>
            <span className={`${ddib.className}`}>SPACEX © 2023</span>
            <motion.span className='cursor-pointer'
                whileHover={{ color: '#8b939b' }}
                whileTap={{ color: '#8b939b' }}
            >PRIVACY POLICY</motion.span>
            <motion.span className='cursor-pointer'
                whileHover={{ color: '#8b939b' }}
                whileTap={{ color: '#8b939b' }}
            >SUPPLIERS</motion.span>
        </div>
    );
};

export default Footer;