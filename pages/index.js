import Head from 'next/head'
import {Heros} from '../components/Heros'
import {Planets} from '../components/Planets'
import styles from '../styles/Home.module.css'

export default function Home({data,planets}) {
  <Head>
    <title>Star wars</title>
    <link ref='icon' href ='/logo.png'></link>
  </Head>
  return (
    <div>
      <Heros data ={data}/>
      <Planets planets ={planets}/>

    </div>
  )
}
Home.getInitialProps = async (ctx) =>{
  const res1 = await fetch ('https://swapi.dev/api/planets/')
  const res = await fetch('https://akabab.github.io/starwars-api/api/all.json')
  const planets = await res1.json()
  const data = await res.json()
  return {
     data,
     planets
  }

}
