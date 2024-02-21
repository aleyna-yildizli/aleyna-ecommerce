import { data } from '../../data/data';


//tamamlanmadı
export default function CategoryCard() {
    const { categories } = data.categories;

    if (!categories || categories.length === 0) {
        return <div>No categories available</div>;
    }

    return (
        <div className="flex flex-col justify-center items-center bg-cover bg-center w-[216px] h-[223px] relative leading-[24px] hover:scale-110 hover:ease-out duration-300">
            {categories.map((category) => (
                <img key={category.name} src={category.img} alt={category.name} />
            ))}
            <div className="bg-neutral-900 bg-opacity-25 absolute w-full h-full"></div>
        </div>
    );
}

