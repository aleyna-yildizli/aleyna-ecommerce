export default function CategoryCard({ category }) {
    const { title, amount, img } = category;

    return (
        <div className="flex px-1">
            <div className="flex flex-col justify-center items-center bg-cover w-[220px] h-[223px] bg-center relative" style={{ backgroundImage: `url('${img}')` }}>
                <h6 className="text-white text-base font-bold">{title}</h6>
                <h6 className="text-white text-sm font-normal">{amount}</h6>
                <div className="w-full h-full bg-neutral-800 bg-opacity-20 absolute"></div>
            </div>
        </div>
    )
}
