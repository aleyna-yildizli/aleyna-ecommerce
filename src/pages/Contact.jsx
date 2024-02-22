import { data } from '../data/data';
import { faInstagram, faLinkedin, faSquareFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    const { h5, h1, h4, phone, fax, img } = data.contact;

    return (
        <div className="flex flex-col gap-[30px]">
            {/* İlk section başlangıcı */}
            <div className="flex items-center max-w-[1400px] mx-auto pl-[100px]">
                <div className="flex flex-col gap-[35px] items-start">
                    <h5 className="text-[#252B42] text-base font-bold">{h5}</h5>
                    <h1 className=" text-[#252B42] text-[58px] font-bold">{h1}</h1>
                    <h4 className=" w-[65%] text-neutral-500 text-xl font-normal">{h4}</h4>
                    <div className=''>
                        <p className='text-[#252B42] text-2xl font-bold'>{phone}</p>
                        <p className='text-[#252B42] text-2xl font-bold'>{fax}</p>
                    </div>
                    <div className="flex gap-4 text-[#252B42]">
                        <FontAwesomeIcon icon={faTwitter} size="xl" />
                        <FontAwesomeIcon icon={faSquareFacebook} size="xl" />
                        <FontAwesomeIcon icon={faInstagram} size="xl" />
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </div>
                </div>
                <div className="w-[70%] flex justify-end">
                    <div className="relative flex justify-center items-center">
                        <img className="w-[70%] z-1" src={img} />
                        <div className="rounded-full absolute bg-[#FFE9EA] w-[65%] h-[65%]" />
                        <div className="rounded-full absolute bg-[#7f4cb5] w-[2%] h-[2%] left-[20%] bottom-[20%]" />
                        <div className="rounded-full absolute bg-[#FFE9EA] w-[10%] h-[10%] left-[15%] top-[10%]" />
                        <div className="rounded-full absolute bg-[#7f4cb5] w-[2%] h-[2%] right-[20%] top-[20%]" />
                        <div className="rounded-full absolute bg-[#FFE9EA] w-[4%] h-[4%] right-[10%] top-[50%]" />
                    </div>
                </div>
            </div>
        </div>
    )
}



