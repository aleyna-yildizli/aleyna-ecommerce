import CategoryCard from './CategoryCard';
import { data } from '../../data/data';

export default function Categories() {
    return (
        <div className="flex w-full">
            {data.shop.categories.map((category, index) => (
                <CategoryCard key={index} category={category} />
            ))}
        </div>
    );
}
