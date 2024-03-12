export default function ProductCard(props) {
  const { name, price, images, description, sell_count, rating } = props.data || {};
  return (
    <div className="shadow-md rounded-lg cursor-pointer hover:scale-105">
      <div>
      {images && images.length > 0 && <img src={images[0].url} className="w-100 object-cover" />}
      </div>
      <div className="flex flex-col items-center py-[30px] gap-2 ">
        <h5 className="text-[16px] font-semibold">{name}</h5>
        <h5 className="text-[12px] font-semibold">Rating {rating}</h5>
        <div className="flex gap-[5px] py-[5px] px-[3px] text-[16px] font-bold">
          <p className="text-[#BDBDBD]"> ${price}</p>
          <p className="text-[#23856D]"> ${price}</p>
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