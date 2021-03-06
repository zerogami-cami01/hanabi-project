import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Mainsection from './mainsection'

export default function Home() {
  return (
    <div className="max-w-screen-lg">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">
          <Mainsection/>
      </h1>

    </div>
  )
}
