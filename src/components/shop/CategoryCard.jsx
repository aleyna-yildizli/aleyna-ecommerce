import { Link } from "react-router-dom";
import slugify from "slugify";

export default function CategoryCard(props) {
  const { title, img, gender, id } = props.category;

  const genderCategory = gender === "k" ? "KADIN" : "ERKEK";
  const genderSlug = gender === "k" ? "kadin" : "erkek";
  const categorySlug = slugify(title, { lower: true });

  return (
    <div>
      <Link to={`/shop/${id}/${genderSlug}/${categorySlug}`}>
        <div className="flex justify-center items-center relative hover:scale-105">
          <img
            src={img}
            className="category-card-image border-3 border-transparent object-cover cursor-pointer w-full transition-all duration-300"
          />
          <div className="flex flex-col justify-center items-center text-white tracking-tighter  absolute z-1">
            <h6 className="text-semibold text-2xl leading-6 ">{title}</h6>
            <h6 className="text-base font-bold leading-6 ">{genderCategory}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
}
