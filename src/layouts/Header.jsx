import { data } from '../data/data'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faUser, faSearch, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";



export default function Header() {
    const { phone, mail, message, socialsURL, firmName } = data.header;


    return (
        <div className="">
            <div className="bg-[#252B42] text-white flex justify-between px-6">
                <div className="flex">
                    <div className='flex items-center gap-[5px] p-2.5 '>
                        <FontAwesomeIcon icon={faPhone} size="sm" style={{ color: "#ffffff" }} />
                        <h6 className='text-sm font-bold mb-0'>{phone}</h6>
                    </div>
                    <div className='flex items-center gap-[5px] p-2.5 '>
                        <FontAwesomeIcon icon={faEnvelope} size="sm" />
                        <span className='text-sm font-bold'>{mail}</span>
                    </div>
                </div>
                <div className='p-2.5'>
                    <h6 className='text-sm font-bold mb-0'>{message}</h6>
                </div>
                <div className="flex items-center justify-start gap-2.5 p-2.5">
                    <h6 className="text-sm font-bold mb-0">Follow us:</h6>
                    <div className="flex flex-wrap items-center justify-start gap-1">
                        <FontAwesomeIcon icon={faInstagram} size="sm" className="p-1" />
                        <FontAwesomeIcon icon={faYoutube} size="sm" className="p-1" />
                        <FontAwesomeIcon icon={faFacebook} size="sm" className="p-1" />
                        <FontAwesomeIcon icon={faTwitter} size="sm" className="p-1" />
                    </div>
                </div>
            </div>
            <div className="flex justify-between flex-wrap items-center px-10">
                <div>
                    <h3 className="text-2xl text-slate-800 font-bold">{firmName}</h3>
                </div>
                <nav className="justify-start items-start gap-4 flex">
                    <NavLink to="/" className="text-[#737373] nav-link">
                        Home
                    </NavLink>
                    <NavLink to="/productlist" className="text-[#737373] nav-link">
                        Shop
                    </NavLink>
                    <NavLink to="/about" className="text-[#737373] nav-link">
                        About
                    </NavLink>
                    <NavLink to="/team" className="text-[#737373] nav-link">
                        Team
                    </NavLink>
                    <NavLink to="/contact" className="text-[#737373] nav-link">
                        Contact
                    </NavLink>
                    <NavLink to="/blog" className="text-[#737373] nav-link">
                        Blog
                    </NavLink>
                </nav>
                <div className="flex text-sky-500 items-center gap-10">
                    <div className="items-center flex ">
                        <FontAwesomeIcon icon={faUser} size="sm" />
                        <div className="font-bold text-sm">Login / Register</div>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faSearch} size="sm" className="p-4" />
                        <div className="flex items-center p-4">
                            <FontAwesomeIcon icon={faCartShopping} size="sm" className="pr-1 " />
                            <div className=" font-normal text-sm">1</div>
                        </div>
                        <div className="flex items-center p-4">
                            <FontAwesomeIcon icon={faHeart} size="sm" className="pr-1" />
                            <div className="font-normal text-sm">1</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}