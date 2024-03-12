import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faBorderAll,
  faListCheck,
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../components/global/ProductCard";
import Paginations from "../components/shop/Paginations";
import Categories from "../components/shop/Categories";
import Clients from "../components/global/Clients";
import { data } from "../data/data";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../store/actions/globalActions";
import { useEffect, useState } from "react";
import { fetchProduct } from "../store/actions/productActions";

export default function Shop() {
  const { productCards } = data.global;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const totalProductCount = productList.length;
  const [sort, setSort] = useState(""); // Sıralama seçeneği
  const [filterText, setFilterText] = useState(""); // Filtreleme metni

  useEffect(() => {
    dispatch(setCategories());
    dispatch(fetchProduct());
  }, []);

  const handleFilterSubmit = () => {
    fetchProductList(sort, filterText);
  };

  const onSearchChange = (e) => {
    const searchText = e.target.value;
    setFilterText(searchText);
  };

  const fetchProductList = (sortOption = "", filterText = "") => {
    dispatch(fetchProduct(sortOption, filterText));
  };

  return (
    <div>
      <div className="w-full ">
        <div className="bg-[#FAFAFA] pb-5">
          <div className=" flex flex-col sm:flex-row justify-between items-center py-[24px]  sm:px-[160px] ">
            <h2 className="text-[#252B42] text-[24px] font-bold">Shop</h2>
            <div className="flex  gap-[15px] ">
              <p className="text-[#252B42] text-[14px] font-bold">Home</p>
              <FontAwesomeIcon
                icon={faChevronRight}
                size="sm"
                className="text-[#BDBDBD] mt-1"
              />
              <p className="text-[#BDBDBD] text-[14px] font-bold">Shop</p>
            </div>
          </div>
          {/* Categories Componenti Buraya */}
          <div className=" bg-[#FAFAFA] px-[10%]">
            <Categories />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between py-[36px] items-center w-[76%] mx-auto">
          <p className="text-[#737373] font-bold">
            Showing all {totalProductCount} results
          </p>
          <div className="flex items-center gap-3 mr-[20%]">
            <p className="text-[#737373] text-sm font-bold">Views:</p>
            <FontAwesomeIcon
              icon={faBorderAll}
              className="p-2 border rounded cursor-pointer mb-3"
            />
            <FontAwesomeIcon
              icon={faListCheck}
              className="p-2 border rounded cursor-pointer mb-3"
            />
          </div>
          <div className="w-[300px] h-[31px] bg-[#f2f2f2] border rounded-md">
            <div className="select-container">
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option disabled>Popularity</option>
                <option value="price:desc">Price: High to Low</option>
                <option value="price:asc"> Price:Low to High</option>
              </select>
              <div>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="mt-2 ml-2 hover:text-blue-600  text-gray-500 hover:scale-150"
                  size="xs"
                />
              </div>
            </div>
            <input
              type="text"
              id="products-filter"
              className="px-3 py-1 outline-none bg-transparent text-md"
              placeholder="Search PiggyBank.com"
              onChange={onSearchChange}
            />
            <div className="w-[33px] h-[50px] float-right">
              <button
                onClick={handleFilterSubmit}
                type="submit"
                className="cursor-pointer h-[31px] relative right-[-1px] top-[-3.5px] w-[50px] bg-[#23A6F0] border-l-2 border-[#23A6F0] rounded-r"
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="absolute text-white top-1 left-3 text-[20px] hover:scale-105"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {filterText && (
        <p className="flex justify-center items-center text-sm">
          {sort === "price:desc" ? (
            <span>
              En yüksek fiyatlı <strong>{filterText}</strong> arama sonuçları
            </span>
          ) : (
            <span>
              En düşük fiyatlı <strong>{filterText}</strong> arama sonuçları
            </span>
          )}
        </p>
      )}
      <div className="flex gap-[50px] flex-wrap items-center justify-center pb-[80px] px-[12%]">
        {productList.map((item, index) => (
          <div key={item.id} className="flex-grow-1 basis-[210px]">
            <ProductCard data={item} key={index} />
          </div>
        ))}
      </div>
      <Paginations />
      <Clients />
    </div>
  );
}
