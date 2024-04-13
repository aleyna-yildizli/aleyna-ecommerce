import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faBorderAll,
  faListCheck,
  faMagnifyingGlass,
  faChevronDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../components/global/ProductCard";
import Categories from "../components/shop/Categories";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

import Clients from "../components/global/Clients";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../store/actions/globalActions";
import { useEffect, useState } from "react";
import {
  fetchProduct,
  FetchStates,
  setActivePage,
} from "../store/actions/productActions";
import { useHistory, useLocation, useParams } from "react-router";
import LoadingSpinner from "../components/widgets/LoadingSpinner";
import { useRef } from "react";
import EmptyPage from "./EmptyPage";

export default function Shop() {
  const { categoryId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const limit = 12;
  const history = useHistory();
  const productList = useSelector((state) => state.product.productList);
  const totalProductCount = useSelector(
    (state) => state.product.totalProductCount
  );
  const pageCount = useSelector((state) => state.product.pageCount);
  const activePage = useSelector((state) => state.product.activePage);
  const categories = useSelector((state) => state.global.categories);
  const productListLoading = useSelector((state) => state.product.fetchState);
  const displayedProductCount = productList.length;
  const [sort, setSort] = useState(""); // Sıralama seçeneği
  const [offset, setOffset] = useState("");

  const [category, setCategory] = useState(""); // Sıralama seçeneği
  const [filterText, setFilterText] = useState(""); // Filtreleme metni
  const [loading, setLoading] = useState(false);
  const isInitialRender = useRef(true);

  const handleClick = (pageNumber) => {
    const offset = pageNumber === 1 ? 0 : (pageNumber - 1) * limit;
    setOffset(offset); // offset değerini güncelleyin
    dispatch(setActivePage(pageNumber));
    window.scrollTo(0, 0);
  };

  const maxPageNumbers = 3;
  let startPage = Math.max(activePage - Math.floor(maxPageNumbers / 2), 1); // Start sayfasını en az 1 yapın
  const endPage = Math.min(startPage + maxPageNumbers - 1, pageCount);

  const getCategoryTitleById = (categoryId) => {
    switch (categoryId) {
      case "1":
        return "Kadın Tişört kategorisinde";
      case "2":
        return "Kadın Ayakkabı kategorisinde";
      case "3":
        return "Kadın Ceket kategorisinde";
      case "4":
        return "Kadın Elbise kategorisinde";
      default:
        return "Bu kategoride ürün bulunmamaktadır.";
    }
  };

  const handleFilterSubmit = (filterText) => {
    setFilterText(filterText);
  };

  const handleClearFilter = () => {
    setFilterText("");
    document.getElementById("products-filter").value = "";
  };

  const processUrlParams = () => {
    const params = new URLSearchParams(window.location.search);
    const sortParam = params.get("sort");
    const filterParam = params.get("filter");
    const categoryParam = params.get("categoryId");
    const offsetParam = params.get("offset");

    if (!sortParam && !filterParam && !categoryId) {
      dispatch(fetchProduct(limit));
    }

    if (sortParam) {
      setSort(sortParam);
    }
    if (filterParam) {
      setFilterText(filterParam);
    }
    if (categoryParam) {
      setCategory(categoryParam);
    }
    if (offsetParam) {
      const offsetValue = parseInt(offsetParam, 10); // String'i integer'a dönüştür
      setOffset(offsetValue);
    }
  };

  const fetchFilteredProducts = async () => {
    const params = new URLSearchParams();
    if (sort) {
      params.set("sort", sort);
    }
    if (filterText) {
      params.set("filter", filterText);
    }
    if (categoryId) {
      params.set("category", categoryId);
    }
    if (offset) {
      params.set("offset", offset);
    }

    const updatedUrl = `${location.pathname}?${params.toString()}`;
    history.push(updatedUrl);

    try {
      // Kategori seçilmemişse ve sıralama/filtreleme yapılmışsa, yine ürünleri getir.
      // Ancak kategori seçilmemiş ve sıralama/filtreleme yapılmamışsa, sadece kategorisiz ürünleri getir.
      if (categoryId || sort || filterText || offset) {
        params.set("limit", limit);

        await dispatch(fetchProduct(params));
      } else {
        await dispatch(fetchProduct({ limit })); // Kategori seçilmemiş ve sıralama/filtreleme yapılmamışsa boş nesne gönder.
      }
    } catch (error) {
      console.error("Product fetch error:", error);
    } finally {
      setLoading(false);
      isInitialRender.current = false;
    }
  };

  useEffect(() => {
    dispatch(setCategories());
    processUrlParams();
  }, []);

  useEffect(() => {
    fetchFilteredProducts();
  }, [sort, filterText, categoryId, offset, limit]);

  return (
    <div>
      <div className="w-full">
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
      </div>
      <div>
        {totalProductCount === 0 ? (
          <div className="flex justify-center">
            <EmptyPage />
          </div>
        ) : (
          <>
            <div className="flex flex-col lg:flex-row justify-between gap-3 py-[36px] items-center mx-auto  sm:px-[120px] xl:px-[160px] px-[50px] ">
              <div className="flex basis-[40%] ">
                {filterText || sort ? (
                  <div className="text-sm text-[#737373] ">
                    {filterText && sort && (
                      <>
                        {sort === "price:desc" ? (
                          <span>
                            <strong>En yüksek fiyatlı</strong> sıralamaya göre{" "}
                            {totalProductCount} sonuç arasından{" "}
                            <strong>{getCategoryTitleById(categoryId)}</strong>{" "}
                            {displayedProductCount} sonuç listeleniyor. Aranan
                            ürün: <strong>"{filterText}"</strong>{" "}
                          </span>
                        ) : sort === "price:asc" ? (
                          <span>
                            <strong>En düşük fiyatlı</strong> sıralamaya göre{" "}
                            {totalProductCount} sonuç arasından{" "}
                            <strong> {getCategoryTitleById(categoryId)}</strong>{" "}
                            {displayedProductCount} sonuç listeleniyor. Aranan
                            ürün: <strong>"{filterText}"</strong>{" "}
                          </span>
                        ) : sort === "rating:asc" ? (
                          <span>
                            <strong>En düşük popülerlik</strong> derecesine göre{" "}
                            {totalProductCount} sonuç arasından{" "}
                            <strong>{getCategoryTitleById(categoryId)}</strong>{" "}
                            {displayedProductCount} sonuç listeleniyor. Aranan
                            ürün: <strong>"{filterText}"</strong>{" "}
                          </span>
                        ) : sort === "rating:desc" ? (
                          <span>
                            <strong>En yüksek popülerlik</strong> derecesine
                            göre {totalProductCount} sonuç arasından{" "}
                            <strong>{getCategoryTitleById(categoryId)}</strong>{" "}
                            {displayedProductCount} sonuç listeleniyor. Aranan
                            ürün: <strong>"{filterText}"</strong>{" "}
                          </span>
                        ) : null}
                      </>
                    )}
                    {!filterText && sort && (
                      <div className="text-sm text-[#737373]">
                        {sort === "price:desc" && (
                          <span>
                            <strong>En yüksek fiyatlı </strong> sıralamaya göre{" "}
                            {totalProductCount} sonuç arasından{" "}
                            <strong>{getCategoryTitleById(categoryId)}</strong>{" "}
                            {displayedProductCount} sonuç listeleniyor
                          </span>
                        )}
                        {sort === "price:asc" && (
                          <span>
                            <strong>En düşük fiyatlı</strong> sıralamaya göre{" "}
                            {totalProductCount} sonuç arasından{" "}
                            <strong>{getCategoryTitleById(categoryId)}</strong>{" "}
                            {displayedProductCount} sonuç listeleniyor
                          </span>
                        )}
                        {sort === "rating:asc" && (
                          <span>
                            <strong>En düşük popülerlik</strong> sıralamasına
                            göre {totalProductCount} sonuç arasından{" "}
                            <strong>{getCategoryTitleById(categoryId)}</strong>{" "}
                            {displayedProductCount} sonuç listeleniyor
                          </span>
                        )}
                        {sort === "rating:desc" && (
                          <span>
                            <strong>En yüksek popülerlik </strong>sıralamasına
                            göre {totalProductCount} sonuç arasından{" "}
                            <strong>{getCategoryTitleById(categoryId)}</strong>{" "}
                            {displayedProductCount} sonuç listeleniyor
                          </span>
                        )}
                      </div>
                    )}
                    {filterText && !sort && (
                      <span>
                        {totalProductCount} sonuç arasından{" "}
                        <strong> {getCategoryTitleById(categoryId)}</strong>{" "}
                        {displayedProductCount} ürün listeleniyor. Aranan ürün:{" "}
                        <strong>"{filterText}"</strong>{" "}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="text-sm text-[#737373]">
                    {categoryId ? (
                      <div className="text-sm text-[#737373]">
                        {totalProductCount > 0 ? (
                          <div>
                            {totalProductCount} sonuç arasından{" "}
                            <strong>{getCategoryTitleById(categoryId)}</strong>{" "}
                            {displayedProductCount} ürün listeleniyor.
                          </div>
                        ) : (
                          <strong>Sell on PiggyBank.</strong>
                        )}
                      </div>
                    ) : (
                      <strong>
                        {totalProductCount} sonuç arasından{" "}
                        {displayedProductCount} ürün listeleniyor.
                      </strong>
                    )}
                  </div>
                )}
              </div>
              <div className="flex items-center pt-3 gap-3 ">
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
              <div className="w-[300px] h-[31px] bg-[#f2f2f2] border rounded-md ">
                <div className="select-container">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="">All products</option>
                    <option value="price:desc">Price: High to Low</option>
                    <option value="price:asc"> Price: Low to High</option>
                    <option value="rating:asc">Popularity: Low to High</option>
                    <option value="rating:desc">Popularity: High to Low</option>
                  </select>
                  <div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="mt-2 ml-2 hover:text-sky-600  text-gray-500 hover:scale-150"
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
                {filterText && ( // Eğer filterText doluysa çarpı ikonunu göster
                  <button
                    onClick={handleClearFilter} // Temizleme işlevi çağrılacak
                    className=" top-1 right-2"
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="text-gray-400 hover:text-gray-600"
                    />
                  </button>
                )}
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
            <div className="flex gap-[50px] flex-wrap items-center justify-center pb-[80px] px-[100px]">
              {productListLoading === FetchStates.FETCHING ? (
                <div className="flex justify-center items-start">
                  <LoadingSpinner />
                </div>
              ) : (
                productList.map((item, index) => (
                  <div key={item.id} className="flex-grow-1 basis-[290px]">
                    <ProductCard data={item} key={index} />
                  </div>
                ))
              )}
            </div>
            <div className="flex justify-center">
              <Pagination aria-label="Page navigation example" size="lg">
                <PaginationItem disabled={activePage === 1}>
                  <PaginationLink
                    first
                    className="pagination-link-first"
                    onClick={() => {
                      if (activePage === 1) return; // Eğer zaten birinci sayfadaysa işlem yapma
                      handleClick(1);
                    }}
                  >
                    First
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem disabled={activePage === 1}>
                  <PaginationLink
                    previous
                    onClick={() => handleClick(activePage - 1)}
                  >
                    ◀︎◀︎
                  </PaginationLink>
                </PaginationItem>
                {[...Array(maxPageNumbers)].map((_, index) => {
                  const pageNumber = startPage + index;
                  return (
                    pageNumber <= endPage && (
                      <PaginationItem
                        key={index}
                        active={activePage === pageNumber}
                      >
                        <PaginationLink onClick={() => handleClick(pageNumber)}>
                          {pageNumber}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  );
                })}
                <PaginationItem disabled={activePage === pageCount}>
                  <PaginationLink
                    className="paginations-1-3-Next"
                    next
                    onClick={() => handleClick(activePage + 1)}
                  >
                    ▶︎▶︎
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem disabled={activePage === pageCount}>
                  <PaginationLink
                    last
                    className="pagination-link-last"
                    onClick={() => {
                      if (activePage === pageCount) return; // Eğer zaten son sayfadaysa işlem yapma
                      handleClick(pageCount);
                    }}
                  >
                    Last
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </div>
          </>
        )}
      </div>
      <Clients />
    </div>
  );
}
