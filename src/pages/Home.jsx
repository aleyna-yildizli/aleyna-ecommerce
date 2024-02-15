import HeroCarousel from "../components/home/HeroCarousel"
import BottomCarousel from "../components/home/BottomCarousel"
import { data } from '../data/data'

export default function Home() {
    return (
    <div  className="">
    <div>
        <HeroCarousel data={data.home.heroWomen}/>
        <BottomCarousel data={data.home.heroMan}/>
    </div>
    </div>
    )
}