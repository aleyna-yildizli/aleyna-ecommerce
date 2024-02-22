import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faBorderAll, faListCheck } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../components/shop/ProductCard";
import Paginations from "../components/shop/Paginations";
import CategoryCard from "../components/shop/CategoryCard";
import Clients from "../components/about/Clients";
import { data } from '../data/data';

export default function Shop() {
    return (
        <div>
            <div className="w-full">
                <div className=" flex justify-between items-center py-[24px] bg-[#FAFAFA]">
                    <h2 className="text-[#252B42] text-[24px] ml-[300px] font-bold">Shop</h2>
                    <div className="flex gap-[15px] mr-[300px]">
                        <p className="text-[#252B42] text-[14px] font-bold">Home</p>
                        <FontAwesomeIcon icon={faChevronRight} size="md" className='text-[#BDBDBD] mt-1' />
                        <p className="text-[#BDBDBD] text-[14px] font-bold">Shop</p>
                    </div>
                </div>
                {/* Category Card Componenti Buraya */}
                <div className="flex justify-between py-[36px] items-center w-[65%] mx-auto">
                    <p className="text-[#737373] font-bold">Showing all 12 results</p>
                    <div className="flex items-center gap-3">
                        <p className="text-[#737373] text-sm font-bold">Views:</p>
                        <FontAwesomeIcon icon={faBorderAll} className="p-2 border rounded cursor-pointer mb-3" />
                        <FontAwesomeIcon icon={faListCheck} className="p-2 border rounded cursor-pointer mb-3" />
                    </div>
                    <div className="flex items-center gap-[15px]">
                        <div className="border rounded px-[20px] py-[10px] text-sm text-[#737373] bg-[#F9F9F9]">Popularity</div>
                        <button className="bg-[#23A6F0] px-[20px] py-[10px] text-white text-sm font-bold rounded">Filter</button>
                    </div>
                </div>
                <ProductCard />
                <Paginations />
                <Clients />
            </div>
        </div>
    )
}