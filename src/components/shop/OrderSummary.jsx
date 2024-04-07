export default function OrderSummary({
  subTotal,
  shippingFee,
  couponCodeApplied,
  discountAppliedText,
  totalAmount,
}) {
  return (
    <div className="flex flex-col basis-1/4 font-medium gap-3 ">
      <span className="text-2xl  text-[#2e1a1a] flex mb-2">Özet</span>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between ">
          <span>Ürünün Toplamı: </span>
          {subTotal && <span>${subTotal.toFixed(2)}</span>}
        </div>
        <div className="flex flex-row justify-between">
          <span>Kargo toplam: </span>
          <span>$29,99</span>
        </div>
        {shippingFee === 0 && (
          <div className="flex flex-row justify-between">
            <span>100$ ve Üzeri Kargo Bedava </span>
            <span className="text-green-500">-$29,99</span>
          </div>
        )}

        {couponCodeApplied && (
          <div className="flex flex-row justify-between">
            <p className="">Kupon İndirimi: </p>{" "}
            <span className="text-green-500">{discountAppliedText}</span>
          </div>
        )}
        {!couponCodeApplied && subTotal > 100 && (
          <div className="flex flex-row justify-between">
            <span>Toplam Kazancın: </span>
            <span className="text-green-500">$29.99</span>
          </div>
        )}
        {shippingFee === 0 && couponCodeApplied && (
          <div className="flex flex-row justify-between">
            <span>Toplam Kazancın: </span>
            <span className="text-green-500">
              {`$${(
                29.99 + parseFloat(discountAppliedText.replace("-$", ""))
              ).toFixed(2)}`}
            </span>
          </div>
        )}
        {shippingFee !== 0 && couponCodeApplied && (
          <div className="flex flex-row justify-between">
            <span>Toplam Kazancın: </span>
            <span className="text-green-500">
              ${parseFloat(discountAppliedText.replace("-$", ""))}
            </span>
          </div>
        )}
        <hr className="w-[100%]" />
        <div className="flex flex-row justify-between">
          <span>Toplam:</span>
          {totalAmount && <span>${totalAmount.toFixed(2)}</span>}
        </div>
      </div>
    </div>
  );
}
