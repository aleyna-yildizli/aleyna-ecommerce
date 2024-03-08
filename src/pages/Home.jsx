import { data } from "../data/data";
import HeroCarousel from "../components/home/HeroCarousel";
import BottomCarousel from "../components/home/BottomCarousel";
import ContainerFluid from "../components/home/ContainerFluid";
import CategorySection from "../components/home/CategorySection";
import ProductCard from "../components/global/ProductCard";
import FeaturedCard from "../components/home/FeaturedCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const { productCards } = data.global;
  const { featuredPosts, featuredPostsText, bestSellersText } = data.home;
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userData = useSelector((state) => state.user.userData);

  useEffect(() => {
    const isWelcomed = sessionStorage.getItem("isUserWelcomed");
    if (isAuthenticated && isWelcomed !== "true") {
      toast.success(userData.name + " Welcome!", {
        position: "top-right",
      });
      sessionStorage.setItem("isUserWelcomed", "true");
    }
  }, [isAuthenticated, userData]);

  return (
    <div className="">
      <ToastContainer position="top-right" autoClose={5000} />
      <div>
        <HeroCarousel data={data.home.heroWomen} />
        <CategorySection data={data.home.categories} />
        <section className="bestSeller">
          <div className="w-[80%] m-auto ">
            <div className="flex flex-col items-center gap-[10px] py-[80px]">
              <h2 className="text-[20px] text-[#737373] text-center">
                {bestSellersText.h2}
              </h2>
              <h3 className="text-[24px] font-bold text-center">
                {bestSellersText.h3}
              </h3>
              <p className="text-[14px] text-[#737373] text-center">
                {bestSellersText.p}
              </p>
            </div>
            <div className="flex gap-[50px] flex-wrap items-center justify-center pb-[80px]">
              {productCards.slice(0, 8).map((item) => (
                <div key={item.id} className="flex-grow-1 basis-[210px]">
                  <ProductCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <BottomCarousel data={data.home.heroMan} />
        <ContainerFluid data={data.home.containerFluid} />
        <div className=" flex flex-col justify-center items-center py-28 gap-20">
          <div className="flex flex-col text-center gap-[10px]">
            <h6 className="text-[#23A6F0] text-sm font-bold">
              {featuredPostsText.h6}
            </h6>
            <h3 className="text-[#252B42] text-[40px] font-bold">
              {featuredPostsText.h3}
            </h3>
            <p className="text-[#737373] text-sm font-normal mb-[5px] w-[385px]">
              {featuredPostsText.p}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-[80%] justify-center items-center gap-7">
            {featuredPosts.map((item) => (
              <FeaturedCard data={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
