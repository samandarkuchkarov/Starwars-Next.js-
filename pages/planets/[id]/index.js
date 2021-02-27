import {useRouter} from 'next/router'
import style from '../../../styles/MainHero.module.css'
import Link from 'next/link'

const ChosedPlanet = ({data}) =>{
    console.log(data)
    const router = useRouter();
    const {id} = router.query;
    return (
        <div className = {style.page}>
        <div className ={style.nav}>
        <Link href='/'><div><span>Home</span> / <span>{data[id].name}</span></div></Link>
        </div>
        <div className = {style.container}>
        
        <div className = {style.image} style = {{backgroundImage:`url(https://starwars-visualguide.com/assets/img/planets/${Number(id)+1}.jpg)`}}></div>
        <div className ={style.block}>
                <div className = {style.text}>
                    <h3>{data[id].name}</h3>   
                    <h4>Population: {data[id].population}</h4>
                    <h4>Rotation period: {data[id].rotation_period} days</h4>
                    <h4>Orbital period: {data[id].orbital_period} days</h4>
                    <h4>Diametr: {data[id].diameter} km</h4>
                    <h4>Gravity: {data[id].gravity}</h4>
                    <h4>Terrain: {(data[id].terrain).charAt(0).toUpperCase() + (data[id].terrain).slice(1)}</h4>
                    <h4>Surface water: {data[id].surface_water}%</h4>
                    <h4>Climate: {data[id].climate.charAt(0).toUpperCase()+data[id].climate.slice(1)}</h4>
                </div>
        </div>
        </div>
    </div>
    )
}
ChosedPlanet.getInitialProps = async (ctx) =>{
    const res = await fetch('https://swapi.dev/api/planets/')
    const data = await res.json()
    return {
       data:data.results
    }

}
export default ChosedPlanet