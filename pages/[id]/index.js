import {useRouter} from 'next/router'
import style from '../../styles/MainHero.module.css'
import Link from 'next/link'
const ChosedHero = ({data}) =>{
    const router = useRouter();
    const {id} = router.query;
    
    return( 
    <div className = {style.page}>
        <div className ={style.nav}>
        <Link href='/'><div><span>Home</span> / <span>{data[id-1].name}</span></div></Link>
        </div>
        <div className = {style.container}>
        
        <div className = {style.image} style = {{backgroundImage:`url(${data[id-1].image})`}}></div>
        <div className ={style.block}>
                <div className = {style.text}>
                    <h3>{data[id-1].name}</h3>   
                    <h4>Birth Year: {Math.abs(data[id-1].born)}BBY </h4>
                    <h4>Species: {data[id-1].species}</h4>
                    <h4>Height: {(data[id-1].height*100).toString()}</h4>
                    <h4>Mass: {data[id-1].mass}kg</h4>
                    <h4>Gender: {data[id-1].gender}</h4>
                    <h4>Hair Color: {data[id-1].hairColor}</h4>
                    <h4>Skin color: {data[id-1].skinColor}</h4>
                    <h4>Homeworld: {data[id-1].homeworld}</h4>
                </div>
        </div>
        </div>
    </div>
    )
}

ChosedHero.getInitialProps = async (ctx) =>{
    const res = await fetch('https://akabab.github.io/starwars-api/api/all.json')
    const data = await res.json()
    return {
       data
    }

}
export default ChosedHero