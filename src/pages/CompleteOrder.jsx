import { React } from "react";
import OrderSummary from "../components/shop/OrderSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function CompleteOrder() {
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
              <div className="flex flex-col mb-4 p-4 bg-gray-50 rounded-l border w-1/2">
                <h2 className="text-gray-600 text-[22px] font-semibold leading-3 mb-3 tracking-wide ">
                  Address Information
                </h2>
                <span className="flex text-[13px] text-gray-600 font-semibold ">
                  Home
                </span>
                <span className="text-gray-600 font-semibold text-[12px]">
                  Manavkuyu Mah 240 sk. No 2B tevsan sitesi B blok K:3 D:14
                </span>
                <span className="text-gray-600 font-semibold text-[12px]">
                  35000 - İzmir/Bayraklı
                </span>
              </div>
              <div className="p-4 mb-4 border-t border-b border-r bg-white rounded-r w-1/2">
                <h2 className="text-gray-600 text-[22px] font-semibold leading-3 tracking-wide mb-3 w-1/2">
                  Payment Options
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
