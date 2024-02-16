import { data } from '../data/data'
import HeroCarousel from "../components/home/HeroCarousel"
import BottomCarousel from "../components/home/BottomCarousel"
import ContainerFluid from "../components/home/ContainerFluid"
import CategorySection from '../components/home/CategorySection'
import BestSellers from '../components/home/BestSellers'

export default function Home() {
    return (
        <div className="">
            <div>
                <HeroCarousel data={data.home.heroWomen} />
                <CategorySection data={data.home.categories} />
                <BestSellers data={{ bestSellersText: data.home.bestSellersText, bestSellers: data.home.bestSellers }} />
                <BottomCarousel data={data.home.heroMan} />
                <ContainerFluid data={data.home.containerFluid} />
            </div>
        </div>
    )
}