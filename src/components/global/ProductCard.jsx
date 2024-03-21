import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

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

export default function ProductCard(props) {
  const { name, price, description, images, rating, category_id, id } =
    props.data || {};
  const categories = useSelector((store) => store.global.categories);
  const nameSlug = name.toLowerCase().replaceAll(" ", "").replaceAll("-", "");
  const catCode = categories.find((c) => c.id == category_id)?.code;
  const gender = catCode?.slice(0, 1) == "k" ? "kadin" : "erkek";
  const category = catCode?.slice(2);

  // Description içindeki belirli ifadeleri daha kullanıcı dostu bir formata dönüştürme
  const transformedDescription = description
    .replace(/%100\sPamuk/g, "100% Pamuk")
    .replace(/Regular\/Normal\sKalıp/g, "Regular Kalıp")
    .replace(/V\sYaka/g, "V Yaka")
    .replace(/Uzun\sKollu/g, "Uzun Kollu")
    .replace(/Örme\sT-Shirt/g, "Örme T-Shirt");

  return (
    <Card className="w-full">
      <CardHeader shadow={false} floated={false} className="h-[400px]">
        <Link to={`/product/${gender}/${category}/${id}/${nameSlug}`}>
          <div className="">
            {images && images.length > 0 && (
              <img
                src={images[0].url}
                alt="card-image"
                className="h-full w-full object-cover rounded-lg"
              />
            )}
          </div>
        </Link>
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {transformedDescription}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-gray-900/10 text-gray-900 shadow-none hover:scale-105 hover:bg-[#23A6F0] hover:text-white hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 "
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
