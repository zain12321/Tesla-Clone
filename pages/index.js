import Head from 'next/head'
import Image from 'next/image'
import Accessories from '../components/Accessories'
import Header from '../components/Header'
import ModalS from '../components/ModalS'
import Model3 from '../components/Model3'
import ModelX from '../components/ModelX'
import ModelY from '../components/ModelY'
import Roof from '../components/Roof'
import Solar from '../components/Solar'
import styles from '../styles/Home.module.css'
import ModelS from './ModelS'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tesla-clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <Header/>
            <ModalS/>
            <ModelY/>
            <Model3/>
            <ModelX/>
            <Solar/>
            <Roof/>
            <Accessories/>
        
    </div> 
  )
}
