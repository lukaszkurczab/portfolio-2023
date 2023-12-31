'use client'
import Image from 'next/image';
import { ParticlesComponent } from '../src/particles/index'
import Footer from '../src/footer/index'
import styles from './layout.module.scss'
import '../src/styles/global.scss'
import Navigation from '../src/navigation/index'

import logo from "../public/logo.png"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.layout}>
        <ParticlesComponent />
        <Image src={logo} alt="" className={styles.layout__logo} />
        <Navigation />
          <div className={styles.pageWrapper}>
            {children}
          </div>
        <Footer/>
      </body>
    </html>
  )
}
