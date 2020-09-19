import Head from 'next/head'
import Navbar from './layout/navbar';
import Banner from './layout/partials/banner';
import Services from './layout/pages/services';
import Products from './layout/pages/products';
import Client from './layout/pages/client';
import Technology from './layout/pages/technology';
import Development from './layout/pages/development';
import Careers from './layout/pages/careers';
import Contact from './layout/pages/contact';
import Footer from './layout/partials/footer';
import Team from './layout/pages/team';
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
        <Products />
        <Client />
        <Team />
        <Technology />
        <Development />
        <Careers />
        <Contact />
        <Footer />
      </main>
      {/* <footer className={styles.footer}>
        <a
          href="https://globaldg.net/"
          className='mt-5'
        >
          All rights reserved to{' '}
          <img src="/logo.png" alt="Global Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
