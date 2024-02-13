import HeroCarousel from "../components/home/HeroCarousel"
import { data } from '../data/data'

export default function Home() {
    return (
    <div  className="mx-auto">
    <div>
        <HeroCarousel data={data.home.heroWomen}/>
    </div>
    </div>
    )
}