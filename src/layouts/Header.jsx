import { data } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faUser,
  faSearch,
  faCartShopping,
  faHeart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGravatar } from "use-gravatar";
import { userLogout } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { SlUserFemale, SlUser, SlHandbag } from "react-icons/sl";
import { LiaBabyCarriageSolid } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";

export default function Header({ direction }) {
  const { phone, mail, message, socialsURL, firmName } = data.header;
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const categories = useSelector((store) => store.global.categories);
  const womanCategories = categories.filter((category) => category.gender === 'k');
  const manCategories = categories.filter((category) => category.gender === 'e');
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const gravatar = useGravatar(userData?.email);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [womenDropdownOpen, setWomenDropdownOpen] = useState(false);
  const [menDropdownOpen, setMenDropdownOpen] = useState(false);
  const [accessoriesDropdownOpen, setAccessoriesDropdownOpen] = useState(false);
  const [directions, setDirection] = useState("false");

  const toggleMenuVisibility = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleLogout = () => {
    dispatch(userLogout());
    localStorage.removeItem("token");
    sessionStorage.removeItem("isUserWelcomed");
  };

  const handleDropdownClick = (newDirection) => {
    setDirection(newDirection);
    setDropdownOpen(true);
  };

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleMenDropdown = () => {
    setMenDropdownOpen(!menDropdownOpen);
    setWomenDropdownOpen(false);
    setAccessoriesDropdownOpen(false);
  };

  const toggleWomenDropdown = () => {
    setWomenDropdownOpen(!womenDropdownOpen);
    setMenDropdownOpen(false);
    setAccessoriesDropdownOpen(false);
  };

    const toggleAccessoriesDropdown = () => {
    setAccessoriesDropdownOpen(!accessoriesDropdownOpen);
    setMenDropdownOpen(false);
    setWomenDropdownOpen(false);
  };

  return (
    <div className="mb-2">
      <div
        className={`bg-[#252B42] text-white sm:flex justify-between px-6 hidden  `}
      >
        <div className="flex ">
          <div className="flex items-center gap-[5px] p-2.5 ">
            <FontAwesomeIcon
              icon={faPhone}
              size="sm"
              style={{ color: "#ffffff" }}
            />
            <h6 className="text-sm font-bold mb-0">{phone}</h6>
          </div>
          <div className="flex items-center gap-[5px] p-2.5 ">
            <FontAwesomeIcon icon={faEnvelope} size="sm" />
            <span className="text-sm font-bold">{mail}</span>
          </div>
        </div>
        <div className="p-2.5">
          <h6 className="text-sm font-bold mb-0 hidden lg:flex">{message}</h6>
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
      <div
        className={`flex flex-col sm:flex-row justify-between flex-wrap sm:items-center px-10 ${
          isMenuVisible ? "h-[501px]" : ""
        } `}>
        <div className="flex flex-row justify-between">
          <NavLink
            to="/"
            className="text-2xl text-slate-800 font-bold no-underline hover:text-slate-800"
          >
            {firmName}
          </NavLink>
          <button
            onClick={toggleMenuVisibility}
            className="text-secondaryColor flex sm:hidden m-2 "
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <nav
          className={` items-center gap-4 flex flex-col sm:flex-row ${
            isMenuVisible ? "flex" : "hidden sm:flex"
          } `}
        >
          <NavLink to="/" className="text-[#737373] nav-link">
            Home
          </NavLink>
          <NavLink to="/shop" className="text-[#737373] nav-link" >
          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <DropdownToggle
              caret
              className="text-[#737373] dropdown-toggle hover:bg-white nav-link"
            >
              Shop
            </DropdownToggle>
            <DropdownMenu className="custom-dropdown-padding">
              <DropdownItem divider />
              <Link to="">
                <DropdownItem
                  className="dropdown-item"
                  onMouseEnter={toggleMenDropdown}
                >
                  {" "}
                  <div className="flex justify-between">
                    <div className="flex items-center">
                    <SlUser style={{ fontSize: "1.1rem" }} />
                    <span className="ml-2">Men</span>
                    </div>
                    <div className="flex mt-1 ml-3">
                    <IoIosArrowForward />
                    </div>
                  </div>
                </DropdownItem>
                <Dropdown
                  isOpen={menDropdownOpen}
                  toggle={toggleMenDropdown}
                  direction="right"
                  className="absolute top-[-50px] left-[158px] z-1"
                >
               <DropdownMenu>
                {manCategories.map((category, idx) => (
               <DropdownItem key={idx}>{category.title}</DropdownItem>
              ))}
        </DropdownMenu>
                </Dropdown>
              </Link>
              <Link to="">
                <DropdownItem
                  className="dropdown-item"
                  onMouseEnter={toggleWomenDropdown}
                >
                  <div className="flex justify-between">
                    <div className="flex items-center">
                    <SlUserFemale style={{ fontSize: "1.1rem" }} />
                    <span className="ml-2">Women</span>
                    </div>
                    <div className="flex mt-1 ml-3">
                    <IoIosArrowForward />
                    </div>
                  </div>
                </DropdownItem>
                <Dropdown
                  isOpen={womenDropdownOpen}
                  toggle={toggleWomenDropdown}
                  direction="right"
                  className="absolute top-[-89px] left-[158px] z-1"
                >
               <DropdownMenu>
                {womanCategories.map((category, idx) => (
               <DropdownItem key={idx}>{category.title}</DropdownItem>
               ))}
                </DropdownMenu>
                </Dropdown>
              </Link>
              <Link to="">
                <DropdownItem
                  className="dropdown-item"
                  onMouseEnter={toggleAccessoriesDropdown}
                >
                  <div className="flex justify-between">
                    <div className="flex items-center">
                    <SlHandbag style={{ fontSize: "1.1rem" }} />
                    <span className="ml-2">Accessories</span>
                    </div>
                    <div className="flex mt-1 ml-3">
                    <IoIosArrowForward />
                    </div>
                  </div>
                </DropdownItem>
                <Dropdown
                  isOpen={accessoriesDropdownOpen}
                  toggle={toggleAccessoriesDropdown}
                  direction="right"
                  className="absolute top-[-129px] left-[158px] z-1"
                >
                </Dropdown>
              </Link>
              <Link to="">
                <DropdownItem
                  className="dropdown-item"
                  onClick={() => handleDropdownClick("right")}
                >
                  <div className="flex justify-between">
                    <div className="flex items-center">
                    <LiaBabyCarriageSolid className="ml-[-4px]" size="24px" />
                    <span className=" ml-2 ">Kids </span>
                    </div>
                    <div className="flex mt-1 ml-3">
                    <IoIosArrowForward />
                    </div>
                  </div>
                </DropdownItem>
              </Link>
            </DropdownMenu>
          </Dropdown>
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
        <div
          className={` flex flex-col sm:flex-row  text-sky-500 items-center gap-2 sm:gap-10 ${
            isMenuVisible ? "flex" : "hidden sm:flex"
          } `}
        >
          <div className="flex flex-col sm:flex-row items-center">
            {isAuthenticated ? ( // Eğer kullanıcı giriş yapmışsa
              <div className="items-center flex flex-row">
                <img src={gravatar} className="w-7 h-7 rounded-full mr-2" />
                <span className="no-underline font-bold text-md text-[#23A6F0] mr-2">
                  {userData.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="no-underline font-bold text-md text-[#23A6F0] ml-2"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="items-center flex flex-row">
                <FontAwesomeIcon icon={faUser} size="sm" className="mr-2" />
                <Link
                  className="no-underline font-bold text-md text-[#23A6F0] mr-2"
                  to="/login"
                >
                  Login
                </Link>
                /
                <Link
                  className="no-underline font-bold text-md text-[#23A6F0] ml-2"
                  to="/signup"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
          <div className=" flex flex-col sm:flex-row  items-center">
            <FontAwesomeIcon icon={faSearch} size="sm" className="p-3" />
            <div className="flex items-center p-3">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="sm"
                className="pr-1 "
              />
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
  );
}
