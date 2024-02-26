import CategoryCard from './CategoryCard';
import { data } from '../../data/data';

export default function Categories() {
    return (
        <div className="flex flex-col gap-1 md:flex-row w-full justify-center">
            {data.shop.categories.map((category, index) => (
                <CategoryCard key={index} category={category} />
            ))}
        </div>
    );
}