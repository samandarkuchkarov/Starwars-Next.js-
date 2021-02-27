import Link from 'next/link'
import style from '../styles/Heros.module.css'
export function Heros( {data} ){
    let heros=[]
    let size = 20;
    console.log(data)
    for(let i = 1; i<size;i++){
        heros.push(
            <Link href='/[id]' key = {i} as = {`${i}`}>
                <div>
                <div className = {style.image}  style={{backgroundImage:`url(${data[i-1].image})`}}></div>
        <div className={style.name}>{data[i-1].name}</div>
                </div>
                
            </Link>
        )
    }
     
    return(
        <div className = {style.container}>
           <h2 className = {style.title}> Main Heros</h2>
           <div className = {style.link}><div className ={style.scroll}>{heros}</div></div> 
        </div>
    )
}

Heros.getInitialProps = async (ctx) =>{
    const res = await fetch('https://akabab.github.io/starwars-api/api/all.json')
    const data = await res.json()
    console.log(data)
    return {
       data
    }

}