import React, { useEffect, useState } from "react";
import { getCityNames } from "turkey-neighbourhoods";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTimes,
  faUser,
  faMobileRetro,
} from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "@material-tailwind/react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  addToAddresses,
  deleteAddress,
  fetchAddresses,
  selectAddress,
  updateAddress,
} from "../../store/actions/ShoppingCard/shoppingCardAction";
import { useForm } from "react-hook-form";
import { truncateAddress } from "../utils/truncateAddress";
//TODO-modal post last clear

export default function AddressSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [activeButton, setActiveButton] = useState("bireysel");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAddresses());
  }, []);

  const addressList = useSelector((store) => store.shop.address);
  const selectedAddress = useSelector((store) => store.shop.selectedAddress);

  const cities = getCityNames();

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setIsEdit(false);
    setShow(true);
  };

  const handleSelect = (address) => {
    dispatch(selectAddress(address));
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
                onChange={() => handleSelect(address)}
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
          onClick={() => handleSelect(address)}
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

  const onSubmit = (addressData) => {
    if (isEdit) {
      dispatch(updateAddress(selectedAddress.id, addressData));
    } else {
      dispatch(addToAddresses(addressData));
    }
    handleClose();
  };

  const handleDelete = (id) => {
    dispatch(deleteAddress(id));
  };

  const handleEditShow = (address) => {
    dispatch(selectAddress(address));
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

  return (
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
                          <p className="form-error">{errors.name.message}</p>
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
                          <p className="form-error">{errors.surname.message}</p>
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
                          <p className="form-error">{errors.phone.message}</p>
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
                          <p className="form-error">{errors.city.message}</p>
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
                        <label htmlFor="neighborhood" className="form-label">
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
                        Kargonuzun size sorunsuz bir şekilde ulaşabilmesi için
                        mahalle, cadde, sokak, bina gibi detay bilgileri
                        eksiksiz girdiğinizden emin olun.
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
                        <p className="form-error">{errors.address.message}</p>
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
                        <p className="form-error">{errors.title.message}</p>
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
                                required: "VKN 10-11 karakter içermelidir",
                                minLength: {
                                  value: 10,
                                  message: "VKN 10-11 karakter içermelidir",
                                },
                              })}
                            />
                            {errors.vkn && (
                              <p className="form-error">{errors.vkn.message}</p>
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
                            <label htmlFor="firmName" className="form-label">
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
  );
}
