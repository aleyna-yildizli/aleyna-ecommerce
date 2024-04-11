import { React, useState } from "react";
import { getCityNames } from "turkey-neighbourhoods";
import OrderSummary from "../components/shop/OrderSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { Checkbox } from "@material-tailwind/react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { addToAddresses } from "../store/actions/ShoppingCard/shoppingCardAction";

export default function CompleteOrder() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("address");
  const [activeButton, setActiveButton] = useState("bireysel");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const onSubmit = (newAddress) => {
    const addressData = {
      title: newAddress.title,
      name: newAddress.name,
      surname: newAddress.surname,
      phone: newAddress.phone,
      city: newAddress.city,
      district: newAddress.district,
      neighborhood: newAddress.neighborhood,
      address: newAddress.address,
    };
    dispatch(addToAddresses(addressData));

    handleClose();
  };

  return (
    <div className="flex flex-col container my-4 p-4  ">
      <div className="flex flex-col">
        <div className="flex justify-between items-center m-[2%] ">
          <h1 className="text-[35px] tracking-tight">piggybank</h1>
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
            <span className="text-gray-400"> GÜVENLİ ÖDEME</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 p-4">
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
                  Home
                </span>
                <span className="text-gray-600 font-semibold  text-[12px]">
                  Manavkuyu Mah 240 sk. No 2B tevsan sitesi B blok K:3 D:14
                </span>
                <span className="text-gray-600 font-semibold text-[12px]">
                  35000 - İzmir/Bayraklı
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
                  <h5 className="text-[20px] text-gray-600">
                    Delivery Address
                  </h5>
                  <span className="text-gray-500 text-sm flex justify-center items-center">
                    <Checkbox color="blue" defaultChecked />
                    Send My Invoice to the Same Address
                  </span>
                </div>
                <div className="mb-4 p-4 rounded border w-1/2 bg-gray-50">
                  <div className="flex justify-center">
                    <button
                      className="flex flex-col justify-center items-center gap-2 my-2"
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
                      <span className="text-lg">Adres Ekle</span>
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
                              <label htmlFor="district" className="form-label">
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
                              Kargonuzun size sorunsuz bir şekilde ulaşabilmesi
                              için mahalle, cadde, sokak, bina gibi detay
                              bilgileri eksiksiz girdiğinizden emin olun.
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
                        {/* Kurumsal form */}
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
              </div>
            )}
            {activeTab === tab2.value && <div>ZEYNEP ILGIN .....</div>}
          </div>
          <div className="flex flex-col basis-[23%] gap-4">
            <button className="bg-[#23a6f0] rounded-lg text-white py-3">
              Kaydet ve Devam Et
              <FontAwesomeIcon
                icon={faChevronRight}
                size="sm"
                className="ml-2"
              />
            </button>
            <OrderSummary />
            <button className="bg-[#23a6f0] rounded-lg text-white py-3">
              Kaydet ve Devam Et
              <FontAwesomeIcon
                icon={faChevronRight}
                size="sm"
                className="ml-2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
