import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function OrderSummary({ setTotalPrice }) {
  const shoppingCart = useSelector((store) => store.shop.cart);
  const couponCodeApplied = useSelector(
    (store) => store.shop.couponCodeApplied
  );

  const totalPriceOfProducts = shoppingCart.reduce(
    (accumulator, currentValue) => {
      if (currentValue.checked) {
        return accumulator + currentValue.count * currentValue.product.price;
      }
      return accumulator;
    },
    0
  );
  const couponDiscount = couponCodeApplied ? totalPriceOfProducts * 0.1 : 0; //couponCode aktifse hesapla değilse 0
  const shippingPrice = totalPriceOfProducts >= 100 ? 0 : 29.99; //100'den fazlaysa shippig fee 29.99
  const totalDiscount =
    (totalPriceOfProducts >= 100 ? shippingPrice : 0) + couponDiscount; //coupon ve ship discount toplamı
  const totalPriceWithDiscounts =
    totalPriceOfProducts + shippingPrice - totalDiscount; //sonuç

  useEffect(() => {
    setTotalPrice(totalPriceWithDiscounts);
  }, [totalPriceWithDiscounts, setTotalPrice]);

  return (
    <div className="mb-3 p-3 rounded border">
      <div className="flex flex-col basis-1/4 font-medium gap-3 ">
        <span className="text-2xl  text-[#2e1a1a] flex mb-2">
          Sipariş Özeti
        </span>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between ">
            <span className="text-sm">Ürünün Toplamı: </span>
            {totalPriceOfProducts && (
              <span className="text-sm">
                ${totalPriceOfProducts.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex flex-row justify-between">
            <span className="text-sm">Kargo toplam: </span>
            <span className="text-sm">$29,99</span>
          </div>
          {shippingPrice === 0 && (
            <div className="flex flex-row justify-between">
              <span className="text-sm">100$ ve Üzeri Kargo Bedava </span>
              <span className="text-green-500 text-sm">-$29,99</span>
            </div>
          )}
          {couponCodeApplied && (
            <div className="flex flex-row justify-between">
              <span className="text-sm">Kupon İndirimi: </span>
              <span className="text-green-500 text-sm">{`-$${couponDiscount.toFixed(
                2
              )}`}</span>
            </div>
          )}
          {!couponCodeApplied && totalDiscount > 100 && (
            <div className="flex flex-row justify-between">
              <span className="text-sm">Toplam Kazancın: </span>
              <span className="text-[#23a6f0] text-sm font-semibold">
                $29.99
              </span>
            </div>
          )}
          {shippingPrice === 0 && couponCodeApplied && (
            <div className="flex flex-row justify-between">
              <span className="text-sm">Toplam Kazancın: </span>
              <span className="text-[#23a6f0] text-sm font-semibold">
                {`$${(29.99 + couponDiscount).toFixed(2)}`}
              </span>
            </div>
          )}
          {shippingPrice !== 0 && couponCodeApplied && (
            <div className="flex flex-row justify-between">
              <span>Toplam Kazancın: </span>
              <span className="text-[#23a6f0] text-sm font-semibold">
                ${couponDiscount}
              </span>
            </div>
          )}
          <hr className="w-[100%]" />
          <div className="flex flex-row justify-between">
            <span className="text-lg">Toplam:</span>
            {totalPriceWithDiscounts && (
              <span className="text-[#23a6f0] text-lg font-semibold">
                ${totalPriceWithDiscounts.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
