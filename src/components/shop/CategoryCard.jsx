export default function CategoryCard({ category }) {
    const { title, amount, img } = category;
  
    return (
      <div className="flex flex-grow-1 basis-[210px]">
        <div className="flex flex-grow-1 basis-[210px] justify-center items-center relative">
          <img src={img} className="w-100 object-cover" />
          <h6 className="text-white text-base font-bold absolute top-50% left-50% transform -translate-x-50% -translate-y-50%">
            {title}
          </h6>
          <h6 className="text-white text-sm font-normal absolute top-50% left-50% transform -translate-x-50% translate-y-2/3">
            {amount}
          </h6>
        </div>
      </div>
    );
  }