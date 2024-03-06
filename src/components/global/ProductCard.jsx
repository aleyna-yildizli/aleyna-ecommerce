export default function ProductCard({ item }) {
  return (
    <div>
      <img src={item.img} alt={item.product} className="w-100 object-cover " />
      <div className="flex flex-col items-center py-[30px] gap-[10px] ">
        <h5 className="text-[16px] font-semibold">{item.category}</h5>

        <p className="text-[14px] text-[#737373] font-bold">{item.product}</p>
        <div className="flex gap-[5px] py-[5px] px-[3px] text-[16px] font-bold">
          <p className="text-[#BDBDBD]"> {item.oldPrice}</p>
          <p className="text-[#23856D]"> {item.newPrice}</p>
        </div>
        <div className="flex gap-1">
          <div className="w-[20px] h-[20px] bg-sky-500 rounded-full shadow-sm" />
          <div className="w-[20px] h-[20px] bg-green-500 rounded-full shadow-sm" />
          <div className="w-[20px] h-[20px] bg-orange-400 rounded-full shadow-sm" />
          <div className="w-[20px] h-[20px] bg-slate-800 rounded-full shadow-sm" />
        </div>
      </div>
    </div>
  );
}