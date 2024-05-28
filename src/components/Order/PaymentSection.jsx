import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  saveCard,
  fetchCards,
  updateCard,
  deleteCard,
  selectCard,
} from "../../store/actions/ShoppingCard/shoppingCardAction";
import { RiVisaLine } from "react-icons/ri";

const PaymentSection = ({ totalPrice }) => {
  const {
    register: registerCard,
    handleSubmit: handleSubmitCard,
    formState: { errors: cardErrors },
    reset: resetCardForm,
    setValue: setCardValue,
  } = useForm();

  const [useSavedCard, setUseSavedCard] = useState(true);
  const [editingCard, setEditingCard] = useState(null);
  const dispatch = useDispatch();
  const payment = useSelector((store) => store.shop.payment);

  const togglePaymentMethod = () => {
    setUseSavedCard(!useSavedCard);
  };

  const maskCardNumber = (cardNumber) => {
    if (cardNumber && cardNumber.length === 16) {
      return cardNumber.slice(0, 6) + " ** **** " + cardNumber.slice(12, 16);
    }
    return cardNumber || ""; // Eğer kart numarası tanımlı değilse, boş string döndür
  };

  const handleDeleteCard = (cardId) => {
    dispatch(deleteCard(cardId));
  };

  const renderCardList = () => {
    if (!payment.cards || payment.cards.length === 0) {
      return <div>No saved cards.</div>;
    }

    return payment.cards.map((card) => (
      <div key={card.id}>
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-1">
            <input
              type="radio"
              className="w-[12px] h-[12px]"
              onChange={() => dispatch(selectCard(card))}
            />
            <span className="text-[10px] font-semibold"> Kredi Kartım</span>
          </div>
          <div className="flex gap-2">
            <span
              className="card-edit text-[8px] hover:text-red-600"
              onClick={() => handleDeleteCard(card.id)}
            >
              Delete
            </span>
            <span
              className="card-edit text-[8px] hover:text-sky-600"
              onClick={() => handleEditCard(card)}
            >
              Edit
            </span>
          </div>
        </div>

        <div className="flex flex-col p-2 mb-2 bg-gray-50 border rounded">
          <div className="flex justify-between items-center">
            <span className="text-[25px] text-purple-600 font-extrabold custom-font">
              WORLD
            </span>
            <RiVisaLine className="text-[50px] text-blue-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium mt-1 flex justify-end">
              {maskCardNumber(card.card_no)}
            </span>
            <span className="text-xs font-medium mt-1 flex justify-end">
              {card.expire_month}/{card.expire_year}
            </span>
          </div>
        </div>
      </div>
    ));
  };
  const onSaveCardSubmit = (data) => {
    const cardData = {
      id: editingCard ? editingCard.id : undefined,
      card_no: data.card_no,
      expire_month: data.expire_month,
      expire_year: data.expire_year,
      name_on_card: data.name_on_card,
    };

    if (editingCard) {
      dispatch(updateCard(cardData));
    } else {
      dispatch(saveCard(cardData));
    }

    clearCardForm();
    setUseSavedCard(true);
  };

  const clearCardForm = () => {
    resetCardForm();
    setEditingCard(null);
  };

  const handleEditCard = (card) => {
    setEditingCard(card);
    setCardValue("name_on_card", card.name_on_card);
    setCardValue("card_no", card.card_no);
    setCardValue("expire_month", card.expire_month);
    setCardValue("expire_year", card.expire_year);
    setUseSavedCard(false);
  };

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div className="flex border border-text-gray-500 p-2 rounded">
      <div className="flex-1 p-4 border-r-2 border-text-gray-500">
        <div className="flex justify-between mb-3">
          <h1 className="text-[16px]">Kart Bilgileri</h1>
          <span
            className="text-xs underline hover:text-sky-600 cursor-pointer"
            onClick={togglePaymentMethod}
          >
            {useSavedCard
              ? "Başka bir kart ile ödeme yap"
              : "Kayıtlı kartımla ödeme yap"}
          </span>
        </div>

        <form onSubmit={handleSubmitCard(onSaveCardSubmit)}>
          {!useSavedCard ? (
            <div className="kartEklemeDivi">
              <div className="flex justify-start mt-4 flex-col">
                <label htmlFor="name_on_card" className="form-label text-xs">
                  Kart Üzerindeki İsim Soyisim
                </label>
                <input
                  type="name_on_card"
                  id="name_on_card"
                  className="w-full p-2 border-t border-r border-b rounded bg-gray-50 border-l-4 border-l-sky-600"
                  {...registerCard("name_on_card", {
                    required: true,
                  })}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="cardNumber" className="form-label text-xs mt-4">
                  Kart Numarası
                </label>
                <input
                  type="text"
                  id="card_no"
                  className="w-full p-2  border-t border-r border-b rounded bg-gray-50 border-l-4 border-l-sky-600"
                  placeholder="xxxx xxxx xxxx xxxx"
                  {...registerCard("card_no", {
                    required: "Kart numarası gereklidir",
                    minLength: {
                      value: 16,
                      message: "Kart numarası 16 haneli olmalıdır",
                    },
                  })}
                />
                {cardErrors.card_no && (
                  <span className="text-[10px] text-red-700 font-bold mt-1">
                    {cardErrors.card_no.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <div className="flex gap-[140px] mt-4">
                  <label htmlFor="expire" className="form-label text-xs">
                    Son Kullanma Tarihi
                  </label>
                  <label htmlFor="cvv" className="form-label text-xs">
                    CVV
                  </label>
                </div>
                <div className="flex">
                  <div className="flex">
                    <select
                      id="expire_month"
                      name="expire_month"
                      required
                      className="w-full p-2 mr-4 border-t border-r border-b border-gray-300 rounded bg-gray-50 text-sm border-l-4 border-l-sky-600"
                      defaultValue=""
                      {...registerCard("expire_month", {
                        required: true,
                      })}
                    >
                      <option value="" disabled selected hidden>
                        Ay
                      </option>
                      {[...Array(12).keys()].map((month) => (
                        <option key={month + 1} value={month + 1}>
                          {month + 1}
                        </option>
                      ))}
                    </select>
                    <select
                      id="expire_year"
                      name="expire_year"
                      required
                      className="w-full p-2 mr-4 border-t border-r border-b border-gray-300 rounded bg-gray-50 text-sm border-l-4 border-l-sky-600"
                      defaultValue=""
                      {...registerCard("expire_year", {
                        required: true,
                      })}
                    >
                      <option value="" disabled selected hidden>
                        Yıl
                      </option>
                      {[...Array(10).keys()].map((year) => (
                        <option key={year + 2024} value={year + 2024}>
                          {year + 2024}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex justify-end">
                    <input
                      type="cvv"
                      id="cvv"
                      className="w-1/2 p-2 border-t border-r border-b rounded bg-gray-50 border-l-4 border-l-sky-600"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex mt-4 gap-2">
                    <input
                      type="checkbox"
                      id="Check"
                      name="Check"
                      className=" w-[15px] h-[15px]"
                    />
                    <span className="text-xs">
                      <strong>3D Secure</strong> ile ödemek istiyorum
                    </span>
                  </div>

                  <div className="flex items-end">
                    <button
                      type="submit"
                      className="bg-white hover:text-sky-600"
                    >
                      Kaydet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="newCardDiv">
              <div className="saved-cards grid grid-cols-2 gap-x-3 gap-y-3">
                {renderCardList()}
              </div>
            </div>
          )}
        </form>
      </div>

      <div className="flex-1 p-4">
        <h1 className="text-[16px]">Taksit Seçenekleri</h1>
        <span className="text-xs">
          Kartınıza uygun taksit seçeneğini seçiniz
        </span>
        <div className="mb-4 rounded border bg-gray-50 relative mt-3">
          <div className="flex justify-between items-center border-b p-2">
            <span className="font-semibold text-xs text-center">
              Taksit Sayısı
            </span>
            <span className="font-semibold text-xs  text-center">
              Aylık Ödeme
            </span>
          </div>
          <div className="flex items-center justify-between p-2 bg-white">
            <div className="flex items-center w-1/2">
              <input type="radio" className="w-[15px] h-[15px] mr-2" />
              <span className="font-semibold text-xs">Tek Çekim</span>
            </div>
            <span className="text-xs text-sky-600 ">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <div className="absolute inset-y-0 left-1/2 border-l border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
