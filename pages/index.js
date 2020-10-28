import Head from 'next/head'
import Navbar from './layout/navbar';
import Banner from './layout/partials/banner';
import Services from './layout/pages/services';
import Work_Approach from './layout/pages/Work_Approach';
import Client from './layout/pages/client';
import Technology from './layout/pages/technology';
import Features from './layout/pages/features';
import Info from './layout/pages/info';
import Careers from './layout/pages/careers';
import AboutUs from './layout/pages/aboutUs';
import Contact from './layout/pages/contact';
import Footer from './layout/partials/footer';
import Industries from './layout/pages/industries';
import styles from '../styles/Home.module.css'

export default function Home() {

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        <Info />
        <Work_Approach />
        <Technology />
        <Features />
        <Industries />
        <Client />
        <AboutUs />
        <Contact />

        <Careers />
        <Footer />
        <section className={styles.scrollTop} onClick={scrollTop}>
          <div>Top</div>
        </section>
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
