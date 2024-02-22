import { data } from '../../data/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export default function ProductDetailCard() {
    const { productCards } = data.productPageCards;

    return (
        <div className="w-full m-auto ">
            <div className="flex gap-[50px] flex-wrap items-center justify-center pb-[80px]">
                {productCards.map((item) => (
                    <div key={item.id} className="">
                        <img
                            src={item.img}
                            alt={item.product}
                            className="w-[280px] h-[370px] object-cover"
                        />
                        <div className="flex flex-col items-left py-[30px] gap-[10px] bg-[#FAFAFA]">
                            <h5 className="text-[16px] font-semibold">{item.category}</h5>

                            <p className="text-[14px] text-[#737373] font-bold">
                                {item.product}
                            </p>
                            <div className="flex gap-[5px] py-[5px] px-[3px] text-[16px] font-bold">
                                <p className="text-[#BDBDBD]"> {item.oldPrice}</p>
                                <p className="text-[#23856D]"> {item.newPrice}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}