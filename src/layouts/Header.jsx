import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from '../data/data'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";



export default function Header() {
    const { phone, mail, message, socialsURL, firmName } = data.header;


    return (
        <div>
            <div className="bg-[#252B42] text-white flex text-center items-center justify-between px-6">
                <div className="flex">
                    <div className='flex items-center gap-[5px] p-2.5 '>
                        <FontAwesomeIcon icon={faPhone} size="sm" style={{color: "#ffffff"}} />
                        <h6 className=''>{phone}</h6>
                    </div>
                    <div className='flex items-center gap-[5px] p-2.5 '>
                        <FontAwesomeIcon icon={faEnvelope} size="sm" />
                        <span className=''>{mail}</span>
                    </div>
                </div>
                <div className='p-2.5'>
                   <h6 className=''>{message}</h6>
                </div>
                <div className="flex items-center justify-start gap-2.5 p-2.5">
                    <h6 className="">Follow us:</h6>
                    <div className="flex flex-wrap items-center justify-start gap-1">
                    <FontAwesomeIcon icon={faInstagram} size="sm" className="p-1"/>
                    <FontAwesomeIcon icon={faYoutube} size="sm" className="p-1"/>
                    <FontAwesomeIcon icon={faFacebook} size="sm" className="p-1"/>
                    <FontAwesomeIcon icon={faTwitter} size="sm" className="p-1"/>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}