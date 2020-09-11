import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Global Digitronix</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://globaldg.net/">GLobal Digitronix!</a>
        </h1>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://globaldg.net/"
        >
          All rights reserved to{' '}
          <img src="/logo.png" alt="Global Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
