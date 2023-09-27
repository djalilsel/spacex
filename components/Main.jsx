import localFont from 'next/font/local';
import React from 'react';

const ddib = localFont({ src: '../assets/D-DIN-Bold.woff2'})

const Main = () => {
    return (
        <div className={`${ddib.className} bg-no-repeat bg-center bg-cover bgHero h-screen relative`}>
        <div className='text-white absolute bottom-16 left-16'>
          <div>UPCOMING LAUNCH</div>
          <div>STARLINK MISSION</div>
          <button>LEARN MORE</button>
        </div>
      </div>
    );
};

export default Main;