import React, { useEffect, useState } from "react";

import OrderSummary from "../components/shop/OrderSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentSection from "../components/Order/PaymentSection";
import AddressSection from "../components/Order/AddressSection";
import { truncateAddress } from "../components/utils/truncateAddress";

export default function CompleteOrder() {
  const [activeTab, setActiveTab] = useState("address");
  const [selectedAddress, setSelectedAddress] = useState({});

  const shoppingCart = useSelector((store) => store.shop.cart);
  const addressList = useSelector((store) => store.shop.address);

  const tab1 = {
    label: "Address Information",
    value: "address",
  };
  const tab2 = {
    label: "Payment Options ",
    value: "payment",
  };

  const totalProductCount = shoppingCart.reduce(
    (total, item) => total + item.count,
    0
  );

  useEffect(() => {
    if (addressList.length > 0) {
      setSelectedAddress(addressList[0]);
    }
  }, [addressList]);

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  return (
    <div className="flex flex-col">
      <ToastContainer />
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
            <AddressSection
              selectedAddress={selectedAddress}
              setSelectedAddress={handleSelectAddress}
              handleSelectAddress={handleSelectAddress}
            />
          )}
          {activeTab === tab2.value && <PaymentSection />}
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
