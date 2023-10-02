import localFont from 'next/font/local';
import React from 'react';

const ddibBold = localFont({ src: '../assets/D-DIN-Bold.woff2'})
const ddib = localFont({ src: '../assets/D-DIN.woff2'})

const Main = ({ bgImage, title, missionTitle}) => {
    return (
      <div className={`${ddibBold.className} bg-no-repeat bg-center bg-cover h-screen relative`} style={{ backgroundImage: `url(/_next/static/media/${bgImage})` }}>
        <div className='absolute bottom-0 left-0 w-full h-fit flex justify-center xl:px-[300px] px-[50px] py-[140px]'>
          <div className='w-screen max-w-[1400px] flex justify-center'>
            <div className='w-[420px] h-fit flex flex-col leading-[36px] text-white'>
              <span className={`${ddib.className} text-[20px]`}>
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
      </div>
    );
};

export default Main;