import { faChevronRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { GoHeart, GoTrash } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../store/actions/ShoppingCard/shoppingCardAction";

export default function ShoppingCart() {
  const shoppingCart = useSelector((store) => store.shop.cart);
  const categories = useSelector((store) => store.global.categories);
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const initialCheckedItems = {};
    shoppingCart.forEach((item) => {
      initialCheckedItems[item.product.id] = true;
    });
    setCheckedItems(initialCheckedItems);
  }, [shoppingCart]);

  const handleCheckboxChange = (productId) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [productId]: !prevCheckedItems[productId],
    }));
  };

  const handleQuantityChange = (productId, newCount) => {
    dispatch(updateCartItemQuantity(productId, newCount));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="w-full container p-5">
      <div className="flex flex-col md:flex-row justify-between gap-1">
        <div className="flex flex-col basis-2/3 gap-3">
          <span className="text-3xl font-medium text-[#111111] flex mb-2 ">
            Sepet
          </span>
          {shoppingCart.length > 0 ? (
            shoppingCart.map((item, index) => {
              // Ürünün kategorisini bul
              const product = item.product;
              const categoryId = product.category_id;
              const category = categories.find((cat) => cat.id === categoryId);
              const categoryName = category ? category.title : "";
              const genderCategory =
                category && category.gender === "k" ? "Kadın" : "Erkek";
              const isChecked = checkedItems[product.id];

              // Ürün açıklamasını dönüştür
              const transformedDescription = product.description
                .replace(/%100\sPamuk/g, "100% Pamuk")
                .replace(/Regular\/Normal\sKalıp/g, "Regular Kalıp")
                .replace(/V\sYaka/g, "V Yaka")
                .replace(/Uzun\sKollu/g, "Uzun Kollu")
                .replace(/Örme\sT-Shirt/g, "Örme T-Shirt")
                .replace(/\bTWOAW21TS0099\b/g, "");

              return (
                <div key={index}>
                  <div className="flex gap-3">
                    <img
                      src={product.images[0].url}
                      className="object-cover w-[170px] h-[170px]"
                      alt="product"
                    />
                    <div className="flex flex-1 ">
                      <div className="flex flex-col tracking-wide basis-[380%] ">
                        <div className="flex flex-row gap-3 ">
                          {" "}
                          <h2 className="font-bold text-[#111111] text-[16px] ">
                            {product.name}{" "}
                          </h2>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleCheckboxChange(product.id)}
                            className="mb-1.5"
                          />
                        </div>
                        <h3 className="font-normal text-[#707072] text-[16px]">
                          {genderCategory} {categoryName}
                        </h3>
                        <h3 className="font-normal text-[#707072] text-[16px]">
                          {transformedDescription}
                        </h3>
                        <div className="flex gap-3">
                          <div className="flex">
                            <span className="font-normal text-[#707072]">
                              Beden
                            </span>
                            <select className="text-[#707072] font-normal pl-1">
                              <option>32</option>
                              <option>34</option>
                              <option>36</option>
                              <option>38</option>
                              <option>40</option>
                              <option>42</option>
                            </select>
                          </div>
                          <div className="flex">
                            <span className="font-normal text-[#707072]">
                              Adet
                            </span>
                            <select
                              className="text-[#707072] font-normal pl-1"
                              onChange={(e) =>
                                handleQuantityChange(product.id, e.target.value)
                              }
                              value={item.count}
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex gap-4 mt-10">
                          <GoHeart className="text-[24px]" />
                          <button
                            onClick={() => handleRemoveFromCart(product.id)}
                          >
                            <GoTrash className="text-[24px]" />
                          </button>
                        </div>
                      </div>
                      <p className="flex font-bold text-[#111111] text-[16px] leading-8 tracking-wide">
                        ${(item.count * product.price).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <hr className="w-[100%]" />
                </div>
              );
            })
          ) : (
            <p className="font-semibold">Your cart is empty.</p>
          )}
        </div>
        <div className="flex flex-col basis-1/4 font-medium gap-3 ">
          <span className="text-3xl  text-[#111111] flex mb-2">Özet</span>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between ">
              <span>Ara Toplam </span>
              <span>₺15.399,70</span>
            </div>
            <div className="flex flex-row justify-between">
              <span>Tahmini Kargo ve İşlem Ücreti: </span>
              <span>Ücretsiz</span>
            </div>
            <hr className="w-[100%]" />
            <div className="flex flex-row justify-between">
              <span>Toplam:</span>
              <span>₺15.399,70</span>
            </div>
            <hr className="w-[100%]" />
            <button className="bg-[#23a6f0] rounded-lg text-white py-3  ">
              Sepeti Onayla{" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                size="sm"
                className="mr-2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
