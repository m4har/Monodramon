import Head from "next/head";
import styles from "../styles/Home.module.css";

const main = process.env.NEXT_PUBLIC_MAIN;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Auth App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Auth App</a>
        </h1>
        <p>{main}</p>
      </main>
    </div>
  );
}
