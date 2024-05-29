import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/actions/ShoppingCard/shoppingCardAction";

export default function OrderConfirmation() {
  const dispatch = useDispatch();
  const order = useSelector((store) => store.shop.order);
  const initialShoppingCart = useSelector((store) => store.shop.cart);
  const selectedAddress = useSelector((store) => store.shop.selectedAddress);
  const couponCodeApplied = useSelector(
    (store) => store.shop.couponCodeApplied
  );

  const [shoppingCart, setShoppingCart] = useState(() => initialShoppingCart);

  useEffect(() => {
    localStorage.removeItem("cart");
    dispatch(clearCart());
  }, [dispatch]);

  if (!order || !selectedAddress || !shoppingCart) {
    return <div>Loading...</div>;
  }
  // (ara toplam)
  const totalPriceOfProducts = shoppingCart.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.count * currentValue.product.price;
    },
    0
  );
  const orderDate = new Date(order.order_date).toLocaleDateString();
  const shippingCost = totalPriceOfProducts >= 100 ? 0 : 29.99;
  const couponDiscount = couponCodeApplied ? totalPriceOfProducts * 0.1 : 0;
  const totalSavings = couponDiscount + (shippingCost === 0 ? 29.99 : 0);
  const totalPriceWithDiscounts =
    totalPriceOfProducts + shippingCost - totalSavings;

  return (
    <div className="mx-auto px-[10%]">
      <h1 className="text-2xl text-green-500 bg-green-100 mt-10 pl-10 py-10 ">
        Siparişiniz başarıyla kaydedildi!
      </h1>
      <div className="flex justify-between mt-4">
        <span>SİPARİŞİNİZİN REFERANSI</span>
        <span>SİPARİŞ:</span>
      </div>
      <div className="flex justify-between mt-2 text-cyan-600 font-semibold">
        <span>N° 0146116525</span>
        <span>{orderDate}</span>
      </div>

      <div className="flex flex-col items-center ">
        <div className="bg-white w-full  ">
          <div className="flex flex-col my-10 p-10 shadow-sm">
            {shoppingCart.map((item, index) => (
              <div key={index} className="flex mb-2">
                <img
                  src={item.product.images[0]?.url}
                  className="w-[13%] h-[220px] object-cover shadow-xl"
                />
                <div className="flex flex-col ml-5 gap-3">
                  <span className="font-medium text-gray-600">
                    {item.product.description}
                  </span>
                  <span className="text-gray-600">Miktar: {item.count}</span>
                </div>

                <span className="ml-auto flex justify-center items-center text-lg">
                  ${(item.product.price * item.count).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-40 mb-4">
            <div className="flex flex-col w-full gap-3">
              <h2 className="text-xl font-medium text-cyan-600 mb-2 tracking-wide">
                Teslimat Yöntemi
              </h2>
              <span className="bg-teal-50 font-semibold text-sm p-3">
                Adrese Teslim
              </span>
              <h2 className="text-xl font-light text-cyan-600 mb-2 tracking-wide">
                Teslimat Adresi
              </h2>
              <div className="flex flex-col mb-4 bg-teal-50 p-4 leading-relaxed ">
                <span className="font-bold text-sm">
                  {selectedAddress.name} {selectedAddress.surname},
                </span>
                <span>{selectedAddress.address}</span>
                <span>{selectedAddress.neighborhood} Mah</span>
                <span>{selectedAddress.city},</span>
                <span>{selectedAddress.district}</span>
              </div>
              <h2 className="text-xl font-light text-cyan-600 mb-2 tracking-wide">
                Fatura Adresi
              </h2>
              <div className="flex flex-col mb-4 bg-teal-50 p-4 leading-relaxed">
                <span className="font-bold text-sm">
                  {selectedAddress.name} {selectedAddress.surname},
                </span>
                <span>{selectedAddress.address}</span>
                <span>{selectedAddress.neighborhood} Mah</span>
                <span>{selectedAddress.city},</span>
                <span>{selectedAddress.district}</span>
              </div>
            </div>
            <div className="flex flex-col pt-4 w-1/2 gap-10 px-10 shadow-md my-10">
              <span className="text-cyan-600">Ara Toplam</span>
              <div className="relative flex justify-between items-center after:content-[''] after:w-full after:h-[2px] after:bg-cyan-600 after:absolute after:bottom-[-20px]">
                <span className="">Toplam</span>
                <span className="mr-2">${totalPriceOfProducts.toFixed(2)}</span>
              </div>

              <div className="relative flex justify-between items-center after:content-[''] after:w-full after:h-[2px] after:bg-cyan-600 after:absolute after:bottom-[-20px]">
                <div className="flex flex-col gap-2">
                  <span className="">Teslimat</span>
                  <span className="text-sm font-light italic ml-4">
                    Adrese Teslim
                  </span>
                  {shippingCost === 0 && (
                    <span className="text-sm font-light italic ml-4">
                      100$ ve Üzeri Kargo Bedava
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <span className="ml-2">${shippingCost.toFixed(2)}</span>
                  {shippingCost === 0 && <span className="mr-2">-$29.99</span>}
                </div>
              </div>
              {couponCodeApplied && (
                <div className="relative flex justify-between items-center after:content-[''] after:w-full after:h-[2px] after:bg-cyan-600 after:absolute after:bottom-[-20px]">
                  <div className="flex flex-col gap-2">
                    <span className="">İndirim</span>
                    <span className="text-sm font-light italic ml-4">
                      PIGGY KUPON KAZANCI
                    </span>
                    <span className="text-sm font-light italic ml-4">
                      KAZANÇ
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <span className="mr-2">-${couponDiscount.toFixed(2)}</span>
                    <span>-${totalSavings.toFixed(2)}</span>
                  </div>
                </div>
              )}
              <div className="relative flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <span className="text-lg mb-2">Toplam</span>
                  <span className="text-sm font-light italic ml-4">
                    Kredi Kartı / Banka Kartı
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-lg text-cyan-600 font-bold">
                    ${order.price.toFixed(2)}
                  </span>
                  <span className="">-${order.price.toFixed(2)}</span>
                </div>
              </div>
              <span className="text-xs">
                Bu siparişiniz doğrulandığında{" "}
                <strong>
                  ${order.price.toFixed(2)} Piggy Card puan kazanacaksınız.🌺
                </strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
