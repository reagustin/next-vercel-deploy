/* eslint-disable @next/next/no-html-link-for-pages */
import { FC } from 'react';

import Head from 'next/head'
import { Inter } from 'next/font/google'

import { Navbar } from '../Navbar';

import styles from './MainLayout.module.css';

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({children}) => {
  return (
    <div className={styles.container}>

      <Head>
        <title>Home App Pops</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className={`${styles.main} ${inter.className}`}>
             
        {children}
        
      </main>
    </div>
  )
}
