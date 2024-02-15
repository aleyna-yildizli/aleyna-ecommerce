import { data } from '../data/data'
import HeroCarousel from "../components/home/HeroCarousel"
import BottomCarousel from "../components/home/BottomCarousel"
import ContainerFluid from "../components/home/ContainerFluid"
import CategorySection from '../components/home/CategorySection'

export default function Home() {
    return (
        <div className="">
            <div>
                <HeroCarousel data={data.home.heroWomen} />
                <CategorySection data={data.home.categories} />
                <BottomCarousel data={data.home.heroMan} />
                <ContainerFluid data={data.home.containerFluid} />
            </div>
        </div>
    )
}