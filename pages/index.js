import Head from 'next/head'
import Navbar from './layout/navbar';
import Banner from './layout/partials/banner';
import Services from './layout/pages/services';
import Products from './layout/pages/products';
import Client from './layout/pages/client';
import Technology from './layout/pages/technology';
import Development from './layout/pages/development';
import Info from './layout/pages/info';
import Careers from './layout/pages/careers';
import AboutUs from './layout/pages/aboutUs';
import Contact from './layout/pages/contact';
import Footer from './layout/partials/footer';
import Team from './layout/pages/team';
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
        <Products />
        <Technology />
        <Team />
        <AboutUs />
        <Contact />
        <Development />
        <Client />

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
