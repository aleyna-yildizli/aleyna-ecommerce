import { PiPiggyBankDuotone } from "react-icons/pi";

export default function EmptyPage() {
  return (
    <div className="flex text-center text-[50px] font-bold  text-slate-800 -tracking-tight py-[70px]">
      <p className="">
        For All Your Needs, There's Only One Place:{" "}
        <p className="text-pink-400">PiggyBank!</p>
        <p className="text-lg">Sell on PiggyBank.</p>
        <PiPiggyBankDuotone className=" text-pink-400 text-[50px] ml-[480px]" />
      </p>
    </div>
  );
}
