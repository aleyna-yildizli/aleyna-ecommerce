import { data } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoLogOut } from "react-icons/io5";
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
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGravatar } from "use-gravatar";
import { userLogout } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
import { IoIosArrowForward } from "react-icons/io";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import slugify from "slugify";
import { fetchProduct } from "../store/actions/productActions";
import { Card, CardBody } from "reactstrap";
import Modal from "react-bootstrap/Modal";
import { LOAD_CART } from "../store/actions/ShoppingCard/shoppingCardActionTypes";
import { PiDoorDuotone, PiHandbagSimpleDuotone } from "react-icons/pi";

export default function Header() {
  const { phone, mail, message, firmName } = data.header;
  const dispatch = useDispatch();
  const history = useHistory();

  const [show, setShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false); // Dropdown menu visibility
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false); // Mobile menu visibility

  const cart = useSelector((state) => state.shop.cart);
  const userData = useSelector((state) => state.user.userData);
  const categories = useSelector((store) => store.global.categories);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const gravatar = useGravatar(userData?.email);

  let totalProductCount = 0;
  let subtotal = 0;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      dispatch({ type: LOAD_CART, payload: savedCart });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  cart.forEach((item) => {
    totalProductCount += item.count;
    const productTotal = item.count * item.product.price;
    subtotal += productTotal;
  });

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const womanCategories = categories.filter(
    (category) => category.gender === "k"
  );
  const manCategories = categories.filter(
    (category) => category.gender === "e"
  );

  const toggleMenuVisibility = () => {
    setMenuVisible(!isMenuVisible);
  };
  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
  };
  const handleNestedItemClick = () => {
    setOpenMenu(false); // itema tıklandığında menüyü kapat
  };

  const handleLogout = () => {
    dispatch(userLogout());
    localStorage.removeItem("token");
    sessionStorage.removeItem("isUserWelcomed");
    handleClose();
  };
  const handleCategoryClick = (category) => {
    const categoryId = category.id;
    const genderSlug = category.gender === "e" ? "erkek" : "kadin";
    const categorySlug = slugify(category.title, { lower: true });
    dispatch(fetchProduct(categoryId, null, null));
    history.push(`/shop/${categoryId}/${genderSlug}/${categorySlug}`);
  };

  return (
    <div>
      <div className="bg-[#252B42] text-white sm:flex justify-between px-6 hidden">
        <div className="flex">
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
        <h6 className="text-sm font-bold mb-0 hidden lg:flex p-2.5">
          {message}
        </h6>
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
        } `}
      >
        <div className="flex flex-row justify-between py-3">
          <Link
            to="/"
            className="text-2xl text-slate-800 font-bold no-underline "
          >
            {firmName}
          </Link>
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
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Menu
            placement="bottom-start"
            open={openMenu}
            handler={setOpenMenu}
            offset={15}
          >
            <MenuHandler onClick={handleMenuToggle}>
              <Link to="/shop" className="flex items-center nav-link">
                Shop
                <span className="inline-block ml-1">
                  {openMenu ? (
                    <ChevronUpIcon strokeWidth={2.5} className="h-3.5 w-3.5" />
                  ) : (
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className="h-3.5 w-3.5"
                    />
                  )}
                </span>
              </Link>
            </MenuHandler>
            <MenuList>
              <Menu placement="right-start">
                <MenuHandler onClick={handleNestedItemClick}>
                  <MenuItem className="flex items-center w-full gap-4 bg-transparent  text-gray-500 hover:text-sky-600">
                    MEN{" "}
                    <div className="flex ml-10">
                      <IoIosArrowForward className="hover:text-sky-600  text-gray-500 hover:scale-150" />
                    </div>
                  </MenuItem>
                </MenuHandler>
                <MenuList>
                  {manCategories.map((category) => (
                    <MenuItem
                      className="hover:text-sky-600 text-gray-500 bg-transparent"
                      key={category.id}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category.title}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <Menu placement="right-start">
                <MenuHandler onClick={handleNestedItemClick}>
                  <MenuItem className="flex items-center justify-between w-full gap-4 bg-transparent hover:text-sky-600 text-gray-500">
                    WOMEN{" "}
                    <div className="flex ml-3">
                      <IoIosArrowForward className="hover:text-sky-600 text-gray-500 hover:scale-150" />
                    </div>
                  </MenuItem>
                </MenuHandler>
                <MenuList className="">
                  {womanCategories.map((category) => (
                    <MenuItem
                      className="bg-transparent hover:text-sky-600  text-gray-500"
                      key={category.id}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category.title}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </MenuList>
          </Menu>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/team" className="nav-link">
            Team
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
        <div
          className={` flex flex-col sm:flex-row  text-sky-500 items-center gap-2 sm:gap-10 ${
            isMenuVisible ? "flex" : "hidden sm:flex"
          } `}
        >
          <div className="flex flex-col sm:flex-row items-center">
            {isAuthenticated ? (
              <div className="items-center flex flex-row relative">
                <img
                  src={gravatar}
                  className="w-7 h-7 rounded-2xl border-2 border-sky-500 mr-3"
                />
                <span className="no-underline font-bold text-md text-sky-500 mr-2">
                  {userData.name}
                </span>
                <Menu>
                  <MenuHandler>
                    <button className="focus:outline-none relative z-50">
                      <ChevronDownIcon className="text-sky-500 h-5 w-5 bg-white" />
                    </button>
                  </MenuHandler>
                  <MenuList className="max-w-xl relative z-50">
                    <MenuItem className="bg-white ">
                      <Link
                        to="/order/history"
                        className="flex items-center justify-between no-underline text-lg hover:text-cyan-600 text-black w-full"
                      >
                        Siparişlerim
                        <PiHandbagSimpleDuotone className="text-[22px] text-sky-600 ml-2" />
                      </Link>
                    </MenuItem>
                    <hr className="my-1 border-gray-400" />
                    <MenuItem className="bg-white">
                      <button
                        onClick={handleShow}
                        className="flex items-center justify-between text-lg hover:text-cyan-600 text-black bg-white w-full"
                      >
                        Çıkış Yap
                        <PiDoorDuotone className="text-[24px] text-sky-600 ml-6" />
                      </button>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            ) : (
              <div className="items-center flex flex-row">
                <FontAwesomeIcon icon={faUser} size="sm" className="mr-2" />
                <Link
                  className="no-underline font-bold text-md text-sky-500 mr-2"
                  to="/login"
                >
                  Login
                </Link>
                /
                <Link
                  className="no-underline font-bold text-md text-sky-500 ml-2"
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
              <button className=" header-button" onClick={toggleCart}>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
              {isCartOpen && (
                <div>
                  <Card className="w-[350px] sm:w-[450px] position-absolute z-10 left-[67.5%] top-[11.5%] ">
                    <CardBody className="flex flex-col">
                      {cart.map((item) => (
                        <div>
                          <div className="flex flex-row gap-3 rounded-md justify-between">
                            <div className="flex basis-1/4 justify-center items-center">
                              <img
                                src={item.product.images[0].url}
                                className="object-cover w-[100px] h-[100px] rounded-lg"
                                alt="product"
                              />
                            </div>
                            <div className="flex flex-row justify-between basis-3/4 ">
                              <div
                                className="flex flex-col leading-8 tracking-wide text-slate-700 "
                                style={{ fontFamily: "Roboto" }}
                              >
                                <span className="font-bold text-lg  ">
                                  {item.product.name}
                                </span>
                                <span className="font-medium text-sm">
                                  Size: XS
                                </span>
                                <span className="font-medium">
                                  Count: {item.count}
                                </span>
                              </div>
                              <span className="flex font-bold text-md leading-8 tracking-wide text-slate-700">
                                ${(item.count * item.product.price).toFixed(2)}
                              </span>
                            </div>
                          </div>
                          <hr></hr>
                        </div>
                      ))}
                      <span className="leading-8 tracking-wide text-slate-700 font-medium flex justify-center">
                        Subtotal ({totalProductCount} product): $
                        {subtotal.toFixed(2)}
                      </span>
                      <div className="flex flex-row justify-center">
                        {cart.length > 0 ? (
                          <div className="flex w-max gap-2">
                            <Link to="/sepet">
                              <Button
                                ripple={false}
                                className="text-xs hover:bg-sky-500 px-[135px] hover:shadow-xl hover:scale-105 text-black unHoverTextColor bg-gray-200 active:scale-100"
                                onClick={toggleCart}
                              >
                                Complete Purchase
                              </Button>
                            </Link>
                          </div>
                        ) : (
                          <p className="font-semibold">Your cart is empty.</p>
                        )}
                      </div>
                    </CardBody>
                  </Card>
                </div>
              )}
              <span className="font-normal text-sm pl-2">
                {totalProductCount}{" "}
              </span>
            </div>
            <div className="flex items-center p-3">
              <FontAwesomeIcon icon={faHeart} size="sm" className="pr-1" />
              <div className="font-normal text-sm pl-1">1</div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Body className="flex text-center justify-center text-lg font-semibold m-2 p-4">
          Hesabınızdan çıkış yapmak üzeresiniz. Devam etmek istiyor musunuz?
        </Modal.Body>
        <div className="flex items-center justify-center text-center text-sm gap-1 py-2 rounded">
          <button
            className="bg-red-500 text-white rounded-md py-3 px-7 hover:scale-105"
            onClick={handleLogout}
          >
            Çıkış yap
          </button>
          <button
            className="bg-sky-500 text-white rounded-md py-3 px-9 text-sm hover:scale-105"
            onClick={handleClose}
          >
            Vazgeç
          </button>
        </div>
      </Modal>
    </div>
  );
}
