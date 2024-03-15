import { PiPiggyBankDuotone } from "react-icons/pi";

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-between">
      <PiPiggyBankDuotone className=" text-pink-400 text-[90px]" />{" "}
      <p className="text-pink-400 font-bold text-[50px]"> Loading...</p>
    </div>
  );
}
