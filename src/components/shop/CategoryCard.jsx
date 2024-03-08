import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function CategoryCard(props) {
  const { title, rating, img, gender } = props.category;

  return (
    <div className=" ">
      <Link to={`/shopping/${gender === "k" ? "kadin" : "erkek"}/${title}`}>
        <div className="flex justify-center items-center relative">
          <img
            src={img}
            className="category-card-image object-cover cursor-pointer w-full"
          />
          <h6 className="text-white text-semibold text-[23px] leading-6 tracking-tighter absolute mb-[20%]">
            {title}
          </h6>
          <h6 className="text-white text-sm font-normal leading-6 tracking-tighter absolute">
            {rating} Rating
          </h6>
        </div>
      </Link>
    </div>
  );
}
