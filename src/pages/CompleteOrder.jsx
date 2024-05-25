import React, { useEffect, useState } from "react";
import { getCityNames } from "turkey-neighbourhoods";
import OrderSummary from "../components/shop/OrderSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faMobileRetro,
  faPlus,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { Checkbox } from "@material-tailwind/react";
import Modal from "react-bootstrap/Modal";
import { RiVisaLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  addToAddresses,
  deleteAddress,
  fetchAddresses,
  saveCard,
  updateAddress,
  fetchCards,
} from "../store/actions/ShoppingCard/shoppingCardAction";
import { Link } from "react-router-dom";

export default function CompleteOrder() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const {
    register: registerCard,
    handleSubmit: handleSubmitCard,
    formState: { errors: cardErrors },
    reset: resetCardForm,
  } = useForm();

  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [activeTab, setActiveTab] = useState("address");
  const [activeButton, setActiveButton] = useState("bireysel");
  const shoppingCart = useSelector((store) => store.shop.cart);
  const addressList = useSelector((store) => store.shop.address);
  const payment = useSelector((store) => store.shop.payment);
  const [selectedAddress, setSelectedAddress] = useState({});
  const [useSavedCard, setUseSavedCard] = useState(true);

  const togglePaymentMethod = () => {
    setUseSavedCard(!useSavedCard);
  };

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  const handleDelete = (id) => {
    dispatch(deleteAddress(id));
  };

  const handleEditShow = (address) => {
    setSelectedAddress(address);
    setIsEdit(true);
    setValue("title", address.title);
    setValue("name", address.name);
    setValue("surname", address.surname);
    setValue("phone", address.phone);
    setValue("city", address.city);
    setValue("district", address.district);
    setValue("neighborhood", address.neighborhood);
    setValue("address", address.address);
    setShow(true);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setIsEdit(false);
    setShow(true);
  };

  const cities = getCityNames();
  const dispatch = useDispatch();

  const tab1 = {
    label: "Address Information",
    value: "address",
  };
  const tab2 = {
    label: "Payment Options ",
    value: "payment",
  };

  const truncateAddress = (address, maxLength = 30) => {
    if (address.length > maxLength) {
      return address.slice(0, maxLength) + "...";
    }
    return address;
  };

  const renderAddressList = () => {
    return addressList.map((address, index) => (
      <div key={index}>
        <div className="flex flex-col  p-1 mb-1 bg-white mt-[-29px]">
          <div className="flex justify-between">
            <div className="flex  justify-center items-center gap-1">
              <input
                type="radio"
                className="w-[12px] h-[12px]"
                checked={selectedAddress && selectedAddress.id === address.id}
                onChange={() => handleSelectAddress(address)}
              />
              <span className="text-xs font-semibold"> {address.title}</span>
            </div>
            <div className="flex gap-2">
              <span
                className="card-edit text-xs hover:text-red-600"
                onClick={() => handleDelete(address.id)}
              >
                Delete
              </span>
              <span
                className="card-edit text-xs hover:text-sky-600"
                onClick={() => handleEditShow(address)}
              >
                Edit
              </span>
            </div>
          </div>
        </div>
        <div
          key={address.id}
          className={`flex flex-col rounded p-4 mb-4 bg-gray-50 ${
            selectedAddress && selectedAddress === address
              ? "selected-address bg-sky-50"
              : "border bg-gray-50"
          }`}
          onClick={() => handleSelectAddress(address)}
        >
          <div className="flex justify-between">
            <span className="text-xs font-semibold mt-1">
              <FontAwesomeIcon
                icon={faUser}
                size="sm"
                className="mr-2 text-sky-500"
              />
              {address.name} {address.surname}
            </span>
            <span className="text-xs font-normal mt-1">
              <FontAwesomeIcon
                icon={faMobileRetro}
                size="sm"
                className="mr-2 text-sky-500"
              />
              {address.phone}
            </span>
          </div>
          <span className="text-sm font-bold mt-1">
            {truncateAddress(`${address.neighborhood}, ${address.address}`, 41)}
          </span>

          <span className="text-sm font-bold mt-1 block">
            {address.district}/{address.city}
          </span>
        </div>
      </div>
    ));
  };

  const maskCardNumber = (cardNumber) => {
    if (cardNumber.length === 16) {
      return cardNumber.slice(0, 6) + " ** **** " + cardNumber.slice(12, 16);
    }
    return cardNumber; // Eğer kart numarası 16 haneli değilse, değişiklik yapma
  };

  const renderCardList = () => {
    if (!Array.isArray(payment) || payment.length === 0) {
      return null; // Eğer kart bilgileri yoksa, null döndür
    }

    return payment.map((card, index) => (
      <div>
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-1">
            <input type="radio" className="w-[12px] h-[12px]" />
            <span className="text-[10px] font-semibold"> Kredi Kartım</span>
          </div>
          <div className="flex gap-2">
            <span className="card-edit text-[8px] hover:text-red-600">
              Delete
            </span>
            <span className="card-edit text-[8px] hover:text-sky-600">
              Edit
            </span>
          </div>
        </div>
        <div
          key={index}
          className="flex flex-col p-2 mb-2 bg-gray-50 border rounded"
        >
          <div className="flex justify-between items-center">
            <span className="text-[25px] text-purple-600 font-extrabold custom-font">
              WORLD
            </span>
            <RiVisaLine className="text-[50px] text-blue-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium mt-1 flex justify-end">
              {maskCardNumber(card.card_no)}
            </span>
            <span className="text-xs font-medium mt-1 flex justify-end">
              {card.expire_month}/{card.expire_year}
            </span>
          </div>
        </div>
      </div>
    ));
  };

  const totalProductCount = shoppingCart.reduce(
    (total, item) => total + item.count,
    0
  );

  const onSubmit = (addressData) => {
    if (isEdit) {
      dispatch(updateAddress(selectedAddress.id, addressData));
    } else {
      dispatch(addToAddresses(addressData));
    }
    handleClose();
  };

  const onSaveCardSubmit = (data) => {
    console.log("Card data submitted:", data); // Debug: Kart verisi
    const cardData = {
      card_no: data.card_no,
      expire_month: data.expire_month,
      expire_year: data.expire_year,
      name_on_card: data.name_on_card,
    };
    dispatch(saveCard(cardData));
    resetCardForm(); // Formu temizle
    setUseSavedCard(true); // Kayıtlı kartlarla ödeme yap moduna geç
  };

  useEffect(() => {
    dispatch(fetchAddresses());
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      <div className="bg-gray-100">
        <div className="flex justify-between items-center py-3 px-[10%]">
          <Link to="/" className="no-underline">
            <h1 className="text-3xl tracking-tight text-gray-800">
              piggybank
              <span className="text-xs font-semibold text-gray-800">
                .com.tr
              </span>
            </h1>
          </Link>
          <span className="text-[28px] text-gray-800 font-medium tracking-tight">
            Ödeme (
            <span className="text-sky-500">{totalProductCount} ürün</span>)
          </span>
          <div className="flex justify-between items-center gap-2">
            <RiSecurePaymentLine className="text-green-500 font-bold text-[40px]" />
            <div className="flex flex-col">
              <span className="text-[20px] text-green-500 font-bold">SSL </span>
              <span className="text-green-500 text-[9px]">secured</span>
            </div>
            <span className="text-[30px] text-gray-300 tracking-tighter">
              {" "}
              |
            </span>
            <span className="text-gray-400 text-[20px]"> GÜVENLİ ÖDEME</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 py-4 mx-auto px-[10%]">
        <div className="flex flex-col">
          <div className="flex">
            <div
              className={`flex flex-col mb-4 p-4 rounded-l border cursor-pointer w-1/2 ${
                activeTab === tab1.value ? "bg-white" : "bg-gray-50"
              }`}
              onClick={() => setActiveTab(tab1.value)}
            >
              <h2
                className={`${
                  activeTab === tab1.value ? "text-sky-500" : "text-gray-600"
                } text-[22px] font-semibold leading-3 mb-3 tracking-wide `}
              >
                {" "}
                {tab1.label}
              </h2>
              <span className="flex text-[13px] text-gray-600 font-semibold ">
                {selectedAddress.title}
              </span>
              <span className="text-gray-600 font-semibold  text-[12px]">
                {selectedAddress.neighborhood} Mah
                {truncateAddress(` ${selectedAddress.address}`, 44)}
              </span>
              <span className="text-gray-600 font-semibold text-[12px]">
                {selectedAddress.city}/{selectedAddress.district}
              </span>
            </div>
            <div
              className={`p-4 mb-4 border-t border-b border-r rounded-r cursor-pointer w-1/2  ${
                activeTab === tab2.value ? "bg-white" : "bg-gray-50"
              }`}
              onClick={() => setActiveTab(tab2.value)}
            >
              <h2
                className={`${
                  activeTab === tab2.value ? "text-sky-500" : "text-gray-600"
                } text-[22px] font-semibold leading-3 tracking-wide mb-3 `}
              >
                {tab2.label}
              </h2>
              <p className="text-[13px] text-gray-500">
                You can make your payment safely with a
                <span className="font-bold text-gray-800">
                  {" "}
                  bank / credit card{" "}
                </span>
                or
                <span className="font-bold text-gray-800">
                  {" "}
                  Shopping Credit
                </span>
                .
              </p>
            </div>
          </div>
          {activeTab === tab1.value && (
            <div className="mb-4 p-4 rounded h-full border">
              <div className="flex w-full justify-between items-center mb-4">
                <h5 className="text-[20px] text-gray-600">Delivery Address</h5>
                <span className="text-gray-500 text-sm flex justify-center items-center">
                  <Checkbox color="blue" defaultChecked />
                  Send My Invoice to the Same Address
                </span>
              </div>

              <div className="flex justify-between">
                <div className="p-4 mb-4 grid grid-cols-2 gap-x-8 gap-y-6">
                  <div className="mb-4 rounded border justify-center bg-gray-50">
                    <div className="flex justify-center items-center">
                      <button
                        className="flex flex-col justify-center items-center gap-2 mt-8 "
                        onClick={handleShow}
                      >
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="text-[20px] text-sky-500"
                        />
                        <span className="text-gray-600 font-semibold text-sm">
                          Yeni Adres Ekle
                        </span>
                      </button>
                    </div>

                    <Modal show={show}>
                      <Modal.Body className="flex justify-between">
                        <span className="text-lg">
                          {isEdit ? "Adres Güncelle" : "Adres Ekle"}
                        </span>
                        <button onClick={handleClose}>
                          {" "}
                          <FontAwesomeIcon
                            icon={faTimes}
                            className="text-gray-500 hover:text-gray-800 text-lg"
                          />
                        </button>
                      </Modal.Body>
                      <hr className="w-full"></hr>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col ">
                          <div className="flex justify-start items-start ">
                            <div className="flex items-center text-sm rounded m-1 p-1">
                              <div className="flex flex-col ">
                                <label htmlFor="name" className="form-label">
                                  Ad*
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  className="w-full p-2 mr-[55px] border rounded bg-gray-50"
                                  placeholder="Adınızı giriniz"
                                  {...register("name", {
                                    required: "2-30 karakter içermelidir",
                                    minLength: {
                                      value: 2,
                                      message: "2-30 karakter içermelidir",
                                    },
                                  })}
                                />
                                {errors.name && (
                                  <p className="form-error">
                                    {errors.name.message}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center text-sm rounded m-1 p-1">
                              <div className="flex flex-col">
                                <label htmlFor="surname" className="form-label">
                                  Soyad*
                                </label>
                                <input
                                  type="text"
                                  id="surname"
                                  className="w-full p-2 mr-[55px] border rounded bg-gray-50"
                                  placeholder="Soyadınızı giriniz"
                                  {...register("surname", {
                                    required: "2-30 karakter içermelidir",
                                    minLength: {
                                      value: 2,
                                      message: "2-30 karakter içermelidir",
                                    },
                                  })}
                                />{" "}
                                {errors.surname && (
                                  <p className="form-error">
                                    {errors.surname.message}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-start items-start">
                            <div className="flex items-center text-sm rounded m-1 p-1">
                              <div className="flex flex-col">
                                <label htmlFor="phone" className="form-label">
                                  Telefon*
                                </label>
                                <input
                                  type="text"
                                  name="phone"
                                  placeholder="0 (___) ___ __ __"
                                  className="w-full p-2 mr-[55px] border rounded bg-gray-50"
                                  country={"tr"}
                                  {...register("phone", {
                                    required: "Lütfen telefon numarası giriniz",
                                  })}
                                />
                                {errors.phone && (
                                  <p className="form-error">
                                    {errors.phone.message}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center text-sm rounded m-1 p-1">
                              <div className="flex flex-col">
                                <label htmlFor="city" className="form-label">
                                  İl*
                                </label>
                                <select
                                  id="city"
                                  name="city"
                                  required
                                  className="w-full p-2 mr-[85px] border rounded bg-gray-50"
                                  {...register("city", {
                                    required: "Lütfen Seçim Yapınız",
                                  })}
                                >
                                  <option value="" disabled selected hidden>
                                    Seçiniz
                                  </option>
                                  {cities.map((city, index) => (
                                    <option key={index} value={city}>
                                      {city}
                                    </option>
                                  ))}
                                </select>
                                {errors.city && (
                                  <p className="form-error">
                                    {errors.city.message}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-start items-start">
                            <div className="flex items-center text-sm rounded m-1 p-1">
                              <div className="flex flex-col">
                                <label
                                  htmlFor="district"
                                  className="form-label"
                                >
                                  İlçe*
                                </label>
                                <input
                                  id="district"
                                  {...register("district", {
                                    required: "Lütfen Seçim Yapınız",
                                  })}
                                  name="district"
                                  placeholder="İlçenizi giriniz"
                                  className="w-full p-2 mr-[55px] border rounded bg-gray-50"
                                />
                                {errors.district && (
                                  <p className="form-error">
                                    {errors.district.message}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center text-sm rounded m-1 p-1">
                              <div className="flex flex-col">
                                <label
                                  htmlFor="neighborhood"
                                  className="form-label"
                                >
                                  Mahalle*
                                </label>
                                <input
                                  id="neighborhood"
                                  {...register("neighborhood", {
                                    required: "Lütfen Seçim Yapınız",
                                  })}
                                  name="neighborhood"
                                  placeholder="Mahallenizi giriniz"
                                  className="w-full p-2 mr-[55px] border rounded bg-gray-50"
                                />
                                {errors.neighborhood && (
                                  <p className="form-error">
                                    {errors.neighborhood.message}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="text-sm rounded m-1 p-1">
                            <div className="flex flex-col">
                              <label htmlFor="address" className="form-label">
                                Adres*
                              </label>
                              <p className="text-xs text-gray-500">
                                Kargonuzun size sorunsuz bir şekilde
                                ulaşabilmesi için mahalle, cadde, sokak, bina
                                gibi detay bilgileri eksiksiz girdiğinizden emin
                                olun.
                              </p>
                              <textarea
                                type="text"
                                id="address"
                                className="w-full pb-20 border rounded bg-gray-50"
                                placeholder="Cadde, mahalle sokak ve diğer bilgileri giriniz."
                                {...register("address", {
                                  required: "10-250 karakter içermelidir",
                                  minLength: {
                                    value: 2,
                                    message: "10-250 karakter içermelidir",
                                  },
                                  maxLength: {
                                    value: 250,
                                    message: "10-250 karakter içermelidir",
                                  },
                                })}
                              />
                              {errors.address && (
                                <p className="form-error">
                                  {errors.address.message}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="text-sm rounded m-1 p-1">
                            <div className="flex flex-col">
                              <label htmlFor="title" className="form-label">
                                Adres Başlığı*
                              </label>
                              <input
                                type="text"
                                id="title"
                                className="w-full p-2 border rounded bg-gray-50"
                                placeholder="Adres Başlığı Giriniz"
                                {...register("title", {
                                  required: "1-20 karakter içermelidir",
                                  minLength: {
                                    value: 1,
                                    message: "1-20 karakter içermelidir",
                                  },
                                  maxLength: {
                                    value: 20,
                                    message: "1-20 karakter içermelidir",
                                  },
                                })}
                              />{" "}
                              {errors.title && (
                                <p className="form-error">
                                  {errors.title.message}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="text-sm rounded m-1 p-1">
                            <span className="form-label">Fatura Türü*</span>
                            <div className="flex gap-3 justify-center items-center">
                              <button
                                key="bireysel"
                                type="button"
                                className={`w-1/2 p-2.5 rounded-md ${
                                  activeButton === "bireysel"
                                    ? "bg-white text-[#23A6F0] border-solid border-2 border-sky-500"
                                    : "bg-gray-200 text-[#888] unHoverTextColor"
                                } `}
                                onClick={() => setActiveButton("bireysel")}
                              >
                                Bireysel
                              </button>
                              <button
                                key="kurumsal"
                                type="button"
                                className={`w-1/2 p-2.5 rounded-md ${
                                  activeButton === "kurumsal"
                                    ? "bg-white text-[#23A6F0] border-solid border-2 border-sky-500"
                                    : "bg-gray-200 text-[#888] unHoverTextColor "
                                } `}
                                onClick={() => setActiveButton("kurumsal")}
                              >
                                Kurumsal
                              </button>
                            </div>
                          </div>
                          {activeButton === "kurumsal" && (
                            <div>
                              <div className="flex justify-start items-start ">
                                <div className="flex items-center text-sm rounded m-1 p-1">
                                  <div className="flex flex-col ">
                                    <label htmlFor="vkn" className="form-label">
                                      VKN*
                                    </label>
                                    <input
                                      type="text"
                                      id="vkn"
                                      className="w-full p-2 mr-[55px] border rounded bg-gray-50"
                                      placeholder="VKN giriniz"
                                      {...register("vkn", {
                                        required:
                                          "VKN 10-11 karakter içermelidir",
                                        minLength: {
                                          value: 10,
                                          message:
                                            "VKN 10-11 karakter içermelidir",
                                        },
                                      })}
                                    />
                                    {errors.vkn && (
                                      <p className="form-error">
                                        {errors.vkn.message}
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center text-sm rounded m-1 p-1">
                                  <div className="flex flex-col">
                                    <label
                                      htmlFor="vergiDairesi"
                                      className="form-label"
                                    >
                                      Vergi Dairesi*
                                    </label>
                                    <input
                                      type="text"
                                      id="vergiDairesi"
                                      className="w-full p-2 mr-[55px] border rounded bg-gray-50"
                                      placeholder="Vergi Dairesi giriniz"
                                      {...register("vergiDairesi", {
                                        required: "5-100 karakter içermelidir",
                                        minLength: {
                                          value: 5,
                                          message: "5-100 karakter içermelidir",
                                        },
                                      })}
                                    />
                                    {errors.vergiDairesi && (
                                      <p className="form-error">
                                        {errors.vergiDairesi.message}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-start items-start ">
                                <div className="flex items-center text-sm rounded m-1 p-1">
                                  <div className="flex flex-col ">
                                    <label
                                      htmlFor="firmName"
                                      className="form-label"
                                    >
                                      Firma Adı*
                                    </label>
                                    <input
                                      type="text"
                                      id="firmName"
                                      className="w-full p-2 mr-[55px] border rounded bg-gray-50"
                                      placeholder="Firma Adı giriniz"
                                      {...register("firmName", {
                                        required: "5-100 karakter içermelidir",
                                        minLength: {
                                          value: 5,
                                          message: "5-100 karakter içermelidir",
                                        },
                                      })}
                                    />
                                    {errors.firmName && (
                                      <p className="form-error">
                                        {errors.firmName.message}
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center justify-center text-sm rounded pl-4 mt-[35px]">
                                  <Checkbox color="blue" defaultChecked />
                                  <span> E-fatura mükellefiyim</span>
                                </div>
                              </div>
                            </div>
                          )}
                          <button
                            type="submit"
                            className="text-lg rounded-md py-2 m-2 hover:bg-[#23b6f0] hover:scale-100 text-white bg-[#23A6F0]"
                          >
                            Kaydet
                          </button>
                        </div>
                      </form>
                    </Modal>
                  </div>

                  {renderAddressList()}
                </div>
              </div>
            </div>
          )}
          {activeTab === tab2.value && (
            <div className="flex border border-text-gray-500 p-2 rounded">
              <div className="flex-1 p-4 border-r-2 border-text-gray-500">
                <div className="flex justify-between mb-3">
                  <h1 className="text-[16px]">Kart Bilgileri</h1>
                  <span
                    className="text-xs underline hover:text-sky-600 cursor-pointer"
                    onClick={togglePaymentMethod}
                  >
                    {useSavedCard
                      ? "Kayıtlı kartımla ödeme yap"
                      : "Başka bir kart ile ödeme yap"}
                  </span>
                </div>

                <form onSubmit={handleSubmitCard(onSaveCardSubmit)}>
                  {!useSavedCard ? (
                    <div className="kartEklemeDivi">
                      <div className="flex justify-start mt-4 flex-col">
                        <label
                          htmlFor="name_on_card"
                          className="form-label text-xs"
                        >
                          Kart Üzerindeki İsim Soyisim
                        </label>
                        <input
                          type="name_on_card"
                          id="name_on_card"
                          className="w-full p-2 border-t border-r border-b rounded bg-gray-50 border-l-4 border-l-sky-600"
                          {...registerCard("name_on_card", {
                            required: true,
                          })}
                        />
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="cardNumber"
                          className="form-label text-xs mt-4"
                        >
                          Kart Numarası
                        </label>
                        <input
                          type="text"
                          id="card_no"
                          className="w-full p-2  border-t border-r border-b rounded bg-gray-50 border-l-4 border-l-sky-600"
                          placeholder="xxxx xxxx xxxx xxxx"
                          {...registerCard("card_no", {
                            required: "Kart numarası gereklidir",
                            minLength: {
                              value: 16,
                              message: "Kart numarası 16 haneli olmalıdır",
                            },
                          })}
                        />
                        {cardErrors.card_no && (
                          <span>{cardErrors.card_no.message}</span>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <div className="flex gap-[140px] mt-4">
                          <label
                            htmlFor="expire"
                            className="form-label text-xs"
                          >
                            Son Kullanma Tarihi
                          </label>
                          <label htmlFor="cvv" className="form-label text-xs">
                            CVV
                          </label>
                        </div>
                        <div className="flex">
                          <div className="flex">
                            <select
                              id="expire_month"
                              name="expire_month"
                              required
                              className="w-full p-2 mr-4 border-t border-r border-b border-gray-300 rounded bg-gray-50 text-sm border-l-4 border-l-sky-600"
                              defaultValue=""
                              {...registerCard("expire_month", {
                                required: true,
                              })}
                            >
                              <option value="" disabled selected hidden>
                                Ay
                              </option>
                              {[...Array(12).keys()].map((month) => (
                                <option key={month + 1} value={month + 1}>
                                  {month + 1}
                                </option>
                              ))}
                            </select>
                            <select
                              id="expire_year"
                              name="expire_year"
                              required
                              className="w-full p-2 mr-4 border-t border-r border-b border-gray-300 rounded bg-gray-50 text-sm border-l-4 border-l-sky-600"
                              defaultValue=""
                              {...registerCard("expire_year", {
                                required: true,
                              })}
                            >
                              <option value="" disabled selected hidden>
                                Yıl
                              </option>
                              {[...Array(10).keys()].map((year) => (
                                <option key={year + 2024} value={year + 2024}>
                                  {year + 2024}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="flex justify-end">
                            <input
                              type="cvv"
                              id="cvv"
                              className="w-1/2 p-2 border-t border-r border-b rounded bg-gray-50 border-l-4 border-l-sky-600"
                            />
                          </div>
                        </div>

                        <div className="flex justify-between">
                          <div className="flex mt-4 gap-2">
                            <input
                              type="checkbox"
                              id="Check"
                              name="Check"
                              className=" w-[15px] h-[15px]"
                            />
                            <span className="text-xs">
                              <strong>3D Secure</strong> ile ödemek istiyorum
                            </span>
                          </div>

                          <div className="flex items-end">
                            <button
                              type="submit"
                              className="bg-white hover:text-sky-600"
                            >
                              Kaydet
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="newCardDiv">
                      <div className="saved-cards grid grid-cols-2 gap-x-3 gap-y-3">
                        {renderCardList()}
                      </div>
                    </div>
                  )}
                </form>
              </div>

              <div className="flex-1 p-4">
                <h1 className="text-[16px]">Taksit Seçenekleri</h1>
                <span className="text-xs">
                  Kartınıza uygun taksit seçeneğini seçiniz
                </span>
                <div className="mb-4 rounded border bg-gray-50 relative mt-3">
                  <div className="flex justify-between items-center border-b p-2">
                    <span className="font-semibold text-xs text-center">
                      Taksit Sayısı
                    </span>
                    <span className="font-semibold text-xs  text-center">
                      Aylık Ödeme
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white">
                    <div className="flex items-center w-1/2">
                      <input type="radio" className="w-[15px] h-[15px] mr-2" />
                      <span className="font-semibold text-xs">Tek Çekim</span>
                    </div>
                    <span className="text-xs text-sky-600 ">$ 465</span>
                  </div>
                  <div className="absolute inset-y-0 left-1/2 border-l border-gray-300"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col basis-[26%] gap-4">
          <button className="bg-[#23a6f0] rounded-lg text-white py-3">
            Kaydet ve Devam Et
            <FontAwesomeIcon icon={faChevronRight} size="sm" className="ml-2" />
          </button>
          <div className="border rounded p-3">
            <div className="flex justify-start items-start text-sm ">
              <input
                type="checkbox"
                id="Check"
                name="Check"
                className="mr-2 w-[40px] h-[25px]"
              />
              <span>
                <strong className="underline">
                  Ön Bilgilendirme Koşulları
                </strong>
                <small className="text-gray-400">'nı ve</small>{" "}
                <strong className="underline">Mesafeli Satış Sözleşmesi</strong>
                <small className="text-gray-400">
                  'ni okudum, onaylıyorum.
                </small>
              </span>
            </div>
          </div>
          <OrderSummary />
          <button className="bg-[#23a6f0] rounded-lg text-white py-3">
            Kaydet ve Devam Et
            <FontAwesomeIcon icon={faChevronRight} size="sm" className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
