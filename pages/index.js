import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FutureImage from "next/future/image";
import HighRes from "../public/highres.jpg"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>next/future/image</h2>
        <FutureImage
          src="/moon.jpg"
          alt="Man in the moon"
          width={600}
          height={200}
        />
        <h2>next/image</h2>
        <Image src={HighRes} placeholder="blur" alt="Man in the moon" width={600} height={200} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
