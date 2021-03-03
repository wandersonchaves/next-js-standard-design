import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Page Head</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Page Header</h1>
      </header>

      <main className={styles.main}>
        <h2>Page Main</h2>
      </main>

      <footer className={styles.footer}>
        <h3>Page Footer</h3>
      </footer>
    </div>
  );
}
