import Head from 'next/head'
import Navbar from './layout/navbar';
import Banner from './layout/partials/banner';
import Services from './layout/pages/services';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Global Digitronix</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <header className={styles['gd-header']}>
        <Banner />
      </header>
      <main className={styles.main}>
        <Services />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://globaldg.net/"
          className='mt-5'
        >
          All rights reserved to{' '}
          <img src="/logo.png" alt="Global Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
