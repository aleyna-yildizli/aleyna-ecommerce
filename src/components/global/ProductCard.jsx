import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { addToCart } from "../../store/actions/ShoppingCard/shoppingCardAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard(props) {
  const { name, price, description, images, rating, category_id, id } =
    props.data || {};
  const categories = useSelector((store) => store.global.categories);
  const nameSlug = name.toLowerCase().replaceAll(" ", "").replaceAll("-", "");
  const catCode = categories.find((c) => c.id == category_id)?.code;
  const gender = catCode?.slice(0, 1) == "k" ? "kadin" : "erkek";
  const category = catCode?.slice(2);
  const dispatch = useDispatch();

  // Adres metnini belirli bir uzunluğa kadar kesmek ve "..." ile bitirmek
  const truncateDescription = (description, maxLength = 45) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "...";
    }
    return description;
  };

  const handleAddToCart = () => {
    dispatch(addToCart(props.data));
  };

  return (
    <Card className="w-full">
      <CardHeader shadow={false} floated={false} className="h-[350px] w-auto">
        <div className="">
          {images && images.length > 0 && (
            <img
              src={images[0].url}
              alt="card-image"
              className="h-full w-full object-cover rounded-lg"
            />
          )}
          {price > 100 && (
            <div className="absolute top-5 left-0 bg-gray-700 bg-opacity-30 text-white px-3 py-1  rounded-tr-lg rounded-br-lg">
              <div className="flex justify-center items-center gap-2 text-md">
                <MdOutlineLocalShipping /> Free Shipping
              </div>
            </div>
          )}
        </div>
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex flex-col">
          <Typography color="blue-gray" className="font-bold">
            {name}
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {truncateDescription(description)}
          </Typography>
        </div>
        <div className="flex  justify-between">
          <Typography color="blue-gray" className="">
            <span className="font-bold flex justify-center items-center mt-3">
              ${price}
            </span>
          </Typography>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-300"
              size="lg"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-300"
              size="lg"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-300"
              size="lg"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-300"
              size="lg"
            />
            <FontAwesomeIcon
              icon={faStarHalfStroke}
              className="text-yellow-300 mr-2"
              size="lg"
            />

            <span className="text-neutral-500 text-sm font-bold">{rating}</span>
          </div>
        </div>
      </CardBody>
      <CardFooter className="pt-0 flex  gap-2 ">
        <Link
          to={`/product/${gender}/${category}/${id}/${nameSlug}`}
          ripple={false}
          className="font-medium px-20 py-2 text-gray-900 shadow-none hover:scale-105 hover:bg-[#23A6F0] border-2 border-[#23A6F0] hover:text-white hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 no-underline rounded-lg"
        >
          More Details
        </Link>

        <Button
          onClick={handleAddToCart}
          ripple={false}
          className="bg-[#23A6F0] px-auto py-2 shadow-none hover:scale-105 text-white hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 "
        >
          <div className="flex justify-center items-center">
            <BsCartCheck className="text-[30px] mb-0.5" />
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
}

/* 
  return (
    <div className="shadow-md rounded-lg cursor-pointer hover:scale-105">
      <Link to={`/product/${gender}/${category}/${id}/${nameSlug}`}>
        <div>
          {images && images.length > 0 && (
            <img src={images[0].url} className="w-100 object-cover" />
          )}
        </div>
      </Link>
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
*/
