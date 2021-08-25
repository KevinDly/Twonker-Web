import Head from "next/head";
import Image from "next/image";
import PageContainer from "../components/PageContainer";
import styles from "../styles/Home.module.css";

//https://medium.com/@markcolling/integrating-socket-io-with-next-js-33c4c435065e
export default function Home() {
  return (
    <div className={styles.container}>
      <Head></Head>

      <main className={styles.main}>
        <PageContainer />
      </main>
    </div>
  );
}
