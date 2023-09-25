import heroBg from '../assets/LAUNCHES_Starlink_SLC_40.jpg'
import localFont from 'next/font/local'

const ddib = localFont({ src: '../assets/D-DIN-Bold.woff2'})

export default function Home() {
  return (
    <main>
      <div id="upcoming launch"  className={`${ddib.className}bg-no-repeat bg-center bg-cover bgHero h-screen`}>
        <div className='text-white absolute bottom-16 left-16'>
          <div>UPCOMING LAUNCH</div>
          <div>STARLINK MISSION</div>
          <button>LEARN MORE</button>
        </div>
      </div>
    </main>
  )
}