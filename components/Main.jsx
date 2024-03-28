"use client";
import localFont from "next/font/local";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
import { cubicBezier } from "framer-motion";

const ddibBold = localFont({ src: "../assets/D-DIN-Bold.woff2" });
const ddib = localFont({ src: "../assets/D-DIN.woff2" });

const Main = ({ bgImage, title, missionTitle }) => {
  const [arrow, animate] = useAnimate();
  const div1 = useRef();
  const div2 = useRef();
  const div3 = useRef();
  const inView1 = useInView(div1);
  const inView2 = useInView(div2);
  const inView3 = useInView(div3);
  const cubic = cubicBezier(0.13, 0.57, 0.44, 0.9);
  const [animation1, setAnimation1] = useState({ opacity: 0 });
  const [animation2, setAnimation2] = useState({ opacity: 0 });
  const [animation3, setAnimation3] = useState({ opacity: 0 });

  useEffect(() => {
    if (inView1) {
      setAnimation1({ opacity: 1, translateY: 0 });
    }
    if (inView2) {
      setAnimation2({ opacity: 1, translateY: 0 });
    }
    if (inView3) {
      setAnimation3({ opacity: 1, translateY: 0 });
    }
  }, [inView1, inView2, inView3]);

  useEffect(() => {
    setInterval(() => {
      animate([
        [
          arrow.current,
          {
            opacity: 1,
          },
          {
            duration: 0.6,
          },
        ],
        [
          arrow.current,
          {
            translateY: 10,
          },
          {
            duration: 1.8,
            ease: cubicBezier(0.4, 0.4, 0.6, 0.8),
          },
        ],
        [
          arrow.current,
          {
            opacity: 0,
          },
          {
            duration: 0.6,
          },
        ],
        [
          arrow.current,
          {
            translateY: 0,
          },
          {
            duration: 0.4,
          },
        ],
      ]);
    }, 4000);
  });

  return (
    <div
      className={`${ddibBold.className} bg-no-repeat bg-center bg-cover h-screen relative`}
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="absolute bottom-0 left-0 w-full h-fit flex justify-center xl:px-[300px] px-[50px] py-[140px]">
        <div className="w-screen max-w-[1400px] flex justify-center">
          <div className="w-fit max-w-[520px] h-fit flex flex-col leading-[36px] text-white top-[1000]">
            <motion.span
              ref={div1}
              initial={{ opacity: 0, translateY: 50 }}
              animate={animation1}
              transition={{ duration: 0.7, ease: cubic }}
              className={`${ddib.className} text-[20px]`}
            >
              {title}
            </motion.span>
            <motion.span
              ref={div2}
              initial={{ opacity: 0, translateY: 50 }}
              animate={animation2}
              transition={{
                duration: 0.7,
                ease: cubic,
              }}
              className="text-[48px] leading-[48px] "
            >
              {missionTitle}
            </motion.span>
            <motion.button
              ref={div3}
              initial={{ opacity: 0, translateY: 50 }}
              animate={animation3}
              transition={{
                duration: 0.7,
                ease: cubic,
                delay: 0.05,
              }}
              className="inline-block w-fit min-w-[130px] py-0 px-[15px] border-[2px] mt-[30px] border-white "
            >
              <div className="text-[14px] h-[50px] w-[130px] flex justify-center items-center ">
                LEARN MORE
              </div>
            </motion.button>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
      <div
        className="absolute bottom-16 left-1/2 opacity-0 select-none"
        ref={arrow}
      >
        <svg width="30px" height="20px" aria-label="more content below">
          <path
            fillOpacity="0"
            stroke="#ffffff"
            strokeWidth="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Main;
