import CategoryCard from "./CategoryCard";
import { useSelector } from "react-redux";

export default function Categories() {
  const categories = useSelector((state) => state.global.categories);
  return (
    <div className="flex flex-col gap-1 md:flex-row w-full justify-center ">
      {categories
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5)
        .map((category) => (
          <div key={category.id} className="flex-grow-1 basis-[210px]">
            <CategoryCard category={category} />
          </div>
        ))}
    </div>
  );
}
