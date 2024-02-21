import { data } from '../../data/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export default function ProductCard() {
    const { productCards } = data.shop;

    return (
        <div className="w-[80%] m-auto ">
            <div className="flex gap-[50px] flex-wrap items-center justify-center pb-[80px]">
                {productCards.map((item) => (
                    <div key={item.id} className="">
                        <img
                            src={item.img}
                            alt={item.product}
                            className="w-[239px] h-[427px] object-cover"
                        />
                        <div className="flex flex-col items-center py-[30px] gap-[10px]">
                            <h5 className="text-[16px] font-semibold">{item.category}</h5>

                            <p className="text-[14px] text-[#737373] font-bold">
                                {item.product}
                            </p>
                            <div className="flex gap-[5px] py-[5px] px-[3px] text-[16px] font-bold">
                                <p className="text-[#BDBDBD]"> {item.oldPrice}</p>
                                <p className="text-[#23856D]"> {item.newPrice}</p>
                            </div>
                            <div className="flex flex-row">
                                <FontAwesomeIcon icon="fa-solid fa-circle" size="2xs" style={{ color: "#33a3db", }} />
                                <FontAwesomeIcon icon="fa-solid fa-circle" size="2xs" style={{ color: "#1ca067", }} />
                                <FontAwesomeIcon icon="fa-solid fa-circle" size="2xs" style={{ color: "#ea7d43", }} />
                                <FontAwesomeIcon icon="fa-solid fa-circle" size="2xs" style={{ color: "#2f2d2d", }} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}