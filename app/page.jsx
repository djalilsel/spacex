
import Main from '../components/Main'
import heroBg from '../assets/LAUNCHES_Starlink_SLC_40.jpg'
import localFont from 'next/font/local'

const ddib = localFont({ src: '../assets/D-DIN-Bold.woff2'})

export default function Home() {
  return (
    <main>
      <Main />
      <Main />
    </main>
  )
}