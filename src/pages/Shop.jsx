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
import { fetchProduct, FetchStates } from "../store/actions/productActions";
import { useHistory } from "react-router";
import LoadingSpinner from "../components/widgets/LoadingSpinner";
import { useRef } from "react";

export default function Shop() {
  const { productCards } = data.global;
  const dispatch = useDispatch();
  const history = useHistory();
  const productList = useSelector((state) => state.product.productList);
  const productListLoading = useSelector((state) => state.product.fetchState);
  const totalProductCount = productList.length;
  const [sort, setSort] = useState(""); // Sıralama seçeneği
  const [filterText, setFilterText] = useState(""); // Filtreleme metni
  const [loading, setLoading] = useState(false);
  const isInitialRender = useRef(true);

  const handleFilterSubmit = (filterText) => {
    setFilterText(filterText); // Filtre metnini güncelle
    fetchProductList(filterText); // Filtreleme isteği gönder
  };

  useEffect(() => {
    dispatch(setCategories());

    const params = new URLSearchParams(location.search);
    const sortParam = params.get("sort");
    const filterParam = params.get("filter");

    if (!sortParam && !filterParam) {
      dispatch(fetchProduct());
    }

    if (sortParam) {
      setSort(sortParam);
    }
    if (filterParam) {
      setFilterText(filterParam);
    }
  }, []);

  useEffect(() => {
    fetchProductList();
  }, [sort, filterText, history.location.key]);

  const fetchProductList = async () => {
    const params = new URLSearchParams(window.location.search);

    if (sort) {
      params.set("sort", sort);
    } else {
      params.delete("sort");
    }

    if (filterText) {
      params.set("filter", filterText);
    } else {
      params.delete("filter");
    }

    const updatedUrl = params.toString()
      ? `/shop?${params.toString()}`
      : "/shop";
    history.push(updatedUrl);

    try {
      if (
        (sort !== "" || filterText !== "") &&
        isInitialRender.current === false
      ) {
        await dispatch(fetchProduct(sort, filterText));
      }
      setLoading(false);
      isInitialRender.current = false;
    } catch (error) {
      console.error("Product fetch error:", error);
    }
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
          {filterText || sort ? (
            <p className="text-sm text-[#737373]">
              {filterText && sort && (
                <>
                  {sort === "price:desc" ? (
                    <span>
                      <strong>En yüksek fiyatlı</strong> sıralamaya göre{" "}
                      <strong>"{filterText}"</strong> araması için{" "}
                      {totalProductCount} sonuç listeleniyor
                    </span>
                  ) : sort === "price:asc" ? (
                    <span>
                      <strong>En düşük fiyatlı</strong> sıralamaya göre{" "}
                      <strong>"{filterText}"</strong> araması için{" "}
                      {totalProductCount} sonuç listeleniyor
                    </span>
                  ) : sort === "rating:asc" ? (
                    <span>
                      <strong>En düşük popülerlik</strong> derecesine göre{" "}
                      <strong>"{filterText}"</strong> araması için{" "}
                      {totalProductCount} sonuç listeleniyor
                    </span>
                  ) : sort === "rating:desc" ? (
                    <span>
                      <strong>En yüksek popülerlik</strong> derecesine göre{" "}
                      <strong>"{filterText}"</strong> araması için{" "}
                      {totalProductCount} sonuç listeleniyor
                    </span>
                  ) : null}
                </>
              )}
              {!filterText && sort && (
                <p className="text-sm text-[#737373]">
                  {sort === "price:desc" && (
                    <span>
                      <strong>En yüksek fiyatlı </strong> ürünler için{" "}
                      {totalProductCount} sonuç listeleniyor
                    </span>
                  )}
                  {sort === "price:asc" && (
                    <span>
                      <strong>En düşük fiyatlı</strong> ürünler için{" "}
                      {totalProductCount} sonuç listeleniyor
                    </span>
                  )}
                  {sort === "rating:asc" && (
                    <span>
                      <strong>En düşük popülerlik</strong> derecesine göre{" "}
                      {totalProductCount} sonuç listeleniyor
                    </span>
                  )}
                  {sort === "rating:desc" && (
                    <span>
                      <strong>En yüksek popülerlik </strong>derecesine göre{" "}
                      {totalProductCount} sonuç listeleniyor
                    </span>
                  )}
                </p>
              )}
              {filterText && !sort && (
                <span>
                  <strong>"{filterText}"</strong> araması için{" "}
                  {totalProductCount} sonuç listeleniyor
                </span>
              )}
            </p>
          ) : null}

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
                <option value="">All products</option>
                <option value="price:desc">Price: High to Low</option>
                <option value="price:asc"> Price: Low to High</option>
                <option value="rating:asc">Popularity: Low to High</option>
                <option value="rating:desc">Popularity: High to Low</option>
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
            />
            <div className="w-[33px] h-[50px] float-right">
              <button
                onClick={() =>
                  handleFilterSubmit(
                    document.getElementById("products-filter").value
                  )
                }
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
      <div className="flex gap-[50px] flex-wrap items-center justify-center pb-[80px] px-[12%]">
        {productListLoading === FetchStates.FETCHING ? (
          <div className="flex justify-center items-start">
            <LoadingSpinner />
          </div>
        ) : (
          productList.map((item, index) => (
            <div key={item.id} className="flex-grow-1 basis-[210px]">
              <ProductCard data={item} key={index} />
            </div>
          ))
        )}
      </div>
      <Paginations />
      <Clients />
    </div>
  );
}
