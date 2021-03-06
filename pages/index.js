import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import homePage from "./homePage";
import HomePage from "./homePage";
import Services from "./services";
import Work from "./work";
import Clients from "./clients";
import Contact from "./contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>For portfolio Umuroff</title>
        <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/pro.ico" />
      </Head>

        <Navbar/>
       <HomePage/>
        <Services/>
        <Work/>
        <Clients/>
        <Contact/>
        <Footer/>
    </div>
  )
}
