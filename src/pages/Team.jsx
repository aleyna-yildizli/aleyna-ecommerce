import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom/cjs/react-router-dom";
import { data } from '../data/data';

export default function Team() {
    const { womanCategory } = data.team;

    console.log(data);
    return (
        <div className="flex flex-col py-20">
            {/* İlk section */}
            <div className="flex flex-col items-center justify-center gap-4">
                <h5 className="text-base font-bold text-[#737373]">WHAT WE DO</h5>
                <h2 className="text-[#252B42] font-bold text-6xl leading-[80px] tracking-[0.2px]">Innovation tailored for you</h2>
                <div className="flex justify-center items-center gap-2">
                    <Link to="/" className="text-[#252B42] no-underline text-md font-bold">Home</Link>
                    <FontAwesomeIcon icon={faChevronRight} size="lg" className="p-1 text-[#BDBDBD]" />
                    <h6 className="text-md text-[#737373] font-bold pt-2">Team</h6>
                </div>
            </div>
            <div className="flex flex-col gap-y-2">
                <div className="w-full">
                    <img src={womanCategory.womanImageOne} className="w-full h-[570px] object-cover" />
                </div>
                <div className="flex flex-wrap gap-[0.1rem] max-sm:w-full">
                    <img src={womanCategory.womanImageTwo} className="w-[49.6%] h-[285px] object-cover transform scale-x-[-1]" />
                    <img src={womanCategory.womanImageThree} className="w-[49.6%] h-[285px] object-cover transform scale-x-[-1]" />
                    <img src={womanCategory.womanImageFour} className="w-[49.6%] h-[285px] object-cover transform scale-x-[-1]" />
                    <img src={womanCategory.womanImageFive} className="w-[49.6%] h-[285px] object-cover transform scale-x-[-1]" />
                </div>
            </div>
        </div>
    )
}
