import { data } from '../data/data';
import { faInstagram, faLinkedin, faSquareFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

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
            {/* İkinci section başlangıcı */}
            <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center justify-center gap-6">
                    <h6 className="text-[#252B42] text-sm font-normal">VISIT OUR OFFICE</h6>
                    <div className="w-[30%] ">
                        <h2 className="text-[#252B42] text-[40px] font-bold text-center">We help small businesses with big ideas</h2>
                    </div>
                </div>
            </div>
            <div className="flex mx-auto gap-5">
                <div className="flex items-center gap-[60px]">
                    <div className="flex flex-col gap-[10px] px-[40px] text-center py-3">
                        <FontAwesomeIcon icon={faPhone} className='text-[#23A6F0] text-[100px] mb-4' />
                        <h6 className="text-[#252B42] text-base font-bold">georgia.young@example.com</h6>
                        <h6 className="text-[#252B42] text-base font-bold">georgia.young@ple.com</h6>
                        <h6 className="text-[#252B42] text-lg font-bold">Get Support</h6>
                        <button className="ml-[23px] border border-[#23A6F0] text-[#23A6F0] w-[189px] h-[54px] px-[36px] py-[15px] rounded-[37px] hover:bg-transparent">Submit Request</button>
                    </div>
                    <div className="flex flex-col gap-[10px] px-[40px] h-[450px] text-center py-3 bg-[#252B42] w">
                        <FontAwesomeIcon icon={faLocationDot} className='text-[#23A6F0] text-[100px] mb-4 mt-12' />
                        <h6 className="text-base font-bold text-white">georgia.young@example.com</h6>
                        <h6 className="text-base font-bold text-white">georgia.young@ple.com</h6>
                        <h6 className="text-lg font-bold text-white">Get Support</h6>
                        <button className="ml-[23px] border bg-transparent text-[#23A6F0] w-[189px] h-[54px] px-[36px] py-[15px] rounded-[37px]">Submit Request</button>
                    </div>
                    <div className="flex flex-col gap-[10px] px-[40px] text-center py-3">
                        <FontAwesomeIcon icon={faEnvelope} className='text-[#23A6F0] text-[100px] mb-4' />
                        <h6 className="text-[#252B42] text-base font-bold">georgia.young@example.com</h6>
                        <h6 className="text-[#252B42] text-base font-bold">georgia.young@ple.com</h6>
                        <h6 className="text-[#252B42] text-lg font-bold">Get Support</h6>
                        <button className="ml-[23px] border border-[#23A6F0] text-[#23A6F0] w-[189px] h-[54px] px-[36px] py-[15px] rounded-[37px] hover:bg-transparent">Submit Request</button>
                    </div>
                </div>

            </div>
        </div>
    )
}



