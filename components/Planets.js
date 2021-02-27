import { createRef } from "react";
import style from "../styles/Planets.module.css"
import Link from "next/link"

export const Planets = ({planets}) =>{
    console.log(planets.results[10])
    let size = 10;
    let unique = 342424
    let planetsList = []
    let planetElements = createRef()
    
    for(let i = 2;i<=size;i++){
        planetsList.push(
            <Link key={`${unique++}`} href ='/planets/[id]' as={`/planets/${i-1}`} >
          <div  className = {style.planet} >
             <div className={style.image}  style={{backgroundImage: `url(https://starwars-visualguide.com/assets/img/planets/${i}.jpg)`}}></div>
              <div ref={planetElements} className = {style.text}>
                    {planets.results[i-1].name}
              </div>
          </div>
          </Link>)
    }
    return(
        <div  className = {style.wraper} >
            {planetsList}
        </div>
    )
}
Planets.getInitialProps = async (ctx) =>{
    const res = await fetch('https://swapi.dev/api/planets/')
    const data = await res.json()

    return {
       data
    }
  
  }
  