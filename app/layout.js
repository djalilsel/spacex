import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'SpaceX replica',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id='wrapper'>
          <Header/>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
