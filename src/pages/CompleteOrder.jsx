import { React } from "react";
import OrderSummary from "../components/shop/OrderSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function CompleteOrder() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col basis-1/4">
        <OrderSummary />
        <button className="bg-[#23a6f0] rounded-lg text-center text-white py-3 ">
          Kaydet ve Devam Et
          <FontAwesomeIcon icon={faChevronRight} size="sm" className="ml-2" />
        </button>
      </div>
    </div>
  );
}
