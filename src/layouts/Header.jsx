import { data } from '../data/data'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faUser, faSearch, faCartShopping, faHeart, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { NavLink, Link } from "react-router-dom";
import { useState } from 'react';
import { useSelector } from 'react-redux';




export default function Header() {
    const { phone, mail, message, socialsURL, firmName } = data.header;
    const userData = useSelector(state => state.user.userData); 
    const [isMenuVisible, setMenuVisible] = useState(false);
    const toggleMenuVisibility = () => {
        setMenuVisible(!isMenuVisible);
    };

    return (
        <div className="">
            <div className={`bg-[#252B42] text-white sm:flex justify-between px-6 hidden  `}>
                <div className="flex ">
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
            <div className={`flex flex-col sm:flex-row justify-between flex-wrap sm:items-center px-10 ${isMenuVisible ? 'h-[501px]' : ''} `}>
                <div className='flex flex-row justify-between'>
                    <h3 className="text-2xl text-slate-800 font-bold">{firmName}</h3>
                    <button onClick={toggleMenuVisibility} className="text-secondaryColor flex sm:hidden m-2 " ><FontAwesomeIcon icon={faBars} /></button>
                </div>
                <nav className={` items-center gap-4 flex flex-col sm:flex-row ${isMenuVisible ? 'flex' : 'hidden sm:flex'} `}>
                    <NavLink to="/" className="text-[#737373] nav-link">
                        Home
                    </NavLink>
                    <NavLink to="/shop" className="text-[#737373] nav-link">
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
                </nav>
                <div className={` flex flex-col sm:flex-row  text-sky-500 items-center gap-2 sm:gap-10 ${isMenuVisible ? 'flex' : 'hidden sm:flex'} `}>
                    <div className="items-center flex flex-row ">
                        <FontAwesomeIcon icon={faUser} size="sm" className='mr-2' />
                        <Link className="no-underline font-bold text-md text-[#23A6F0] mr-2" to="/login">{userData && userData.name ? userData.name : 'Login'}</Link>/<Link className="no-underline font-bold text-md text-[#23A6F0] ml-2" to="/signup">Register</Link>
                    </div>
                    <div className=" flex flex-col sm:flex-row  items-center">
                        <FontAwesomeIcon icon={faSearch} size="sm" className="p-3" />
                        <div className="flex items-center p-3">
                            <FontAwesomeIcon icon={faCartShopping} size="sm" className="pr-1 " />
                            <div className=" font-normal text-sm">1</div>
                        </div>
                        <div className="flex items-center p-3">
                            <FontAwesomeIcon icon={faHeart} size="sm" className="pr-1" />
                            <div className="font-normal text-sm">1</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}