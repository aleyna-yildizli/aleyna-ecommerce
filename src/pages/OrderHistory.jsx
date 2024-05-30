import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchOrders,
  fetchAddresses,
} from "../store/actions/ShoppingCard/shoppingCardAction";

export default function OrderHistory() {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.shop.orderList) || [];
  const addresses = useSelector((store) => store.shop.address) || [];

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchAddresses());
  }, [dispatch]);

  const findAddress = (addressId) => {
    return addresses.find((address) => address.id === addressId);
  };

  if (orders.length === 0 || addresses.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto px-[10%]">
      <h1 className="text-3xl font-semibold mt-10 -tracking-tight">
        SİPARİŞ ÖZETİNİZ
      </h1>
      <div className="flex flex-col items-center">
        {orders.length > 0 ? (
          orders.map((order, index) => {
            const orderDate = new Date(order.order_date).toLocaleDateString();
            const totalPriceOfProducts = order.products
              ? order.products.reduce(
                  (accumulator, product) =>
                    accumulator + product.count * product.price,
                  0
                )
              : 0;
            const shippingCost = totalPriceOfProducts >= 100 ? 0 : 29.99;
            const couponDiscount = order.couponCodeApplied
              ? totalPriceOfProducts * 0.1
              : 0;
            const totalSavings =
              couponDiscount + (shippingCost === 0 ? 29.99 : 0);
            const totalPrice =
              totalPriceOfProducts + shippingCost - totalSavings;

            const orderAddress = findAddress(order.address_id);

            return (
              <div key={index} className="bg-white w-full my-10 p-10 shadow-sm">
                <div className="flex justify-between mb-4">
                  <span className="text-sm">SİPARİŞ NUMARASI: {order.id}</span>
                  <span className="text-sm font-bold">{orderDate}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="font-bold text-lg">Teslim Edildi</span>
                  <span className="font-bold text-cyan-600 text-lg">
                    {" "}
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex flex-col my-10 border p-10 shadow-sm">
                  <h5 className="mb-10">SİPARİŞİM</h5>
                  {order.products &&
                    order.products.map((product, productIndex) => (
                      <div key={productIndex}>
                        <div className="flex mb-2">
                          <img
                            src={product.images[0]?.url}
                            className="w-[13%] h-[220px] object-cover shadow-xl"
                            alt="Product"
                          />
                          <div className="flex flex-col ml-5 gap-3">
                            <span className="font-medium text-gray-600">
                              {product.description}
                            </span>
                            <span className="text-gray-600">
                              Miktar: {product.count}
                            </span>
                          </div>
                          <span className="ml-auto flex justify-center items-center text-lg">
                            ${(product.count * product.price).toFixed(2)}
                          </span>
                        </div>
                        {productIndex < order.products.length - 1 && (
                          <hr className="my-4 border-gray-400" />
                        )}
                      </div>
                    ))}
                  <span className="flex justify-end underline text-cyan-600 cursor-pointer">
                    Kargo takibi için tıkla
                  </span>
                </div>

                <div className="flex gap-40">
                  <div className="flex flex-col w-full gap-3 mt-10">
                    <h2 className="text-xl font-medium text-cyan-600 mb-2 tracking-wide">
                      Teslimat Yöntemi
                    </h2>
                    <span className="bg-teal-50 font-semibold text-sm p-3">
                      Adrese Teslim
                    </span>
                    <h2 className="text-xl font-light text-cyan-600 mb-2 tracking-wide">
                      Teslimat Adresi
                    </h2>

                    {orderAddress && (
                      <div className="flex flex-col mb-4 bg-teal-50 p-4 leading-relaxed ">
                        <span className="font-bold text-sm">
                          {orderAddress.name} {orderAddress.surname},
                        </span>
                        <span>{orderAddress.address}</span>
                        <span>{orderAddress.neighborhood} Mah</span>
                        <span>{orderAddress.city},</span>
                        <span>{orderAddress.district}</span>
                      </div>
                    )}
                    <span className="flex justify-end underline text-cyan-600 cursor-pointer">
                      Fatura için tıkla
                    </span>
                  </div>
                  <div className="flex flex-col pt-4 w-1/2 gap-10 p-10 my-10">
                    <span className="text-cyan-600">Ara Toplam</span>
                    <div className="relative flex justify-between items-center after:content-[''] after:w-full after:h-[2px] after:bg-cyan-600 after:absolute after:bottom-[-20px]">
                      <span className="">Toplam</span>
                      <span className="mr-2">
                        ${totalPriceOfProducts.toFixed(2)}
                      </span>
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
                        {shippingCost === 0 && (
                          <span className="mr-2">-$29.99</span>
                        )}
                      </div>
                    </div>
                    {order.couponCodeApplied && (
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
                          <span className="mr-2">
                            -${couponDiscount.toFixed(2)}
                          </span>
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
                          ${totalPrice.toFixed(2)}
                        </span>
                        <span className="">-${totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                    <span className="text-xs">
                      Bu siparişiniz doğrulandığında{" "}
                      <strong>
                        ${totalPrice.toFixed(2)} PiggyBank Puanı kazanacaksınız!
                        Kumbara doluyor, alışveriş keyfi artıyor! 🐷💰
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Henüz geçmiş bir siparişiniz yok.</p>
        )}
      </div>
    </div>
  );
}
