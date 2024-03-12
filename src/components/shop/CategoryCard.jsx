import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function CategoryCard(props) {
  const { title, rating, img, gender } = props.category;


  const genderPrefix = gender === "k" ? "kadin" : "erkek"; 
  const genderCategory = gender === 'k' ? 'KADIN' : 'ERKEK'
  const lowercaseTitle = title.charAt(0).toLowerCase() + title.slice(1);

  return (
    <div>
      <Link to={`/shopping/${genderPrefix}/${lowercaseTitle}`}>
        <div className="flex justify-center items-center relative hover:scale-105">
          <img src={img} className="category-card-image border-3 border-transparent object-cover cursor-pointer w-full transition-all duration-300"/>
          <div className="flex flex-col justify-center items-center text-white tracking-tighter  absolute z-1">
          <h6 className="text-base font-bold leading-6 ">{genderCategory}</h6>
          <h6 className="text-semibold text-2xl leading-6 ">{title}</h6>
          <h6 className="text-sm font-normal leading-6 ">{rating}Rating</h6>
          </div>
        </div>
      </Link>
    </div>
  );
}
