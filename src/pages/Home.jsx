import { data } from '../data/data'
import HeroCarousel from "../components/home/HeroCarousel"
import BottomCarousel from "../components/home/BottomCarousel"
import ContainerFluid from "../components/home/ContainerFluid"

export default function Home() {
    return (
        <div className="">
            <div>
                <HeroCarousel data={data.home.heroWomen} />
                <BottomCarousel data={data.home.heroMan} />
                <ContainerFluid data={data.home.containerFluid} />
            </div>
        </div>
    )
}