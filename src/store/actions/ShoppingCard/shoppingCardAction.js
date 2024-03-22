import * as types from './shoppingCardActionTypes'
// shoppingCardActionTypes dosyasından eylem türlerini içeri aktarıyoruz


// Action Creators


// Sepete ürün eklemek için eylem oluşturucu
export const addToCart = (product) => ({
    type: types.ADD_TO_CART,
    payload: product
});

// Sepetten ürünü kaldırmak için eylem oluşturucu
export const removeFromCart = (productId) => ({
    type: types.REMOVE_FROM_CART,
    payload: productId
});

// Sepetteki tüm ürünleri temizlemek için eylem oluşturucu
export const clearCart = () => ({
    type: types.CLEAR_CART
});

// Ödeme bilgilerini ayarlamak için eylem oluşturucu
export const setPaymentInfo = (paymentInfo) => ({
    type: types.SET_PAYMENT_INFO,
    payload: paymentInfo
});

// Adres bilgilerini ayarlamak için eylem oluşturucu
export const setAddressInfo = (addressInfo) => ({
    type: types.SET_ADDRESS_INFO,
    payload: addressInfo
});

// Sepet öğe miktarını güncellemek için eylem oluşturucu
export const updateCartItemQuantity = (productId, newQuantity) => ({
    type: types.UPDATE_CART_ITEM_QUANTITY,
    payload: { productId, newQuantity }
});

// Ödeme durumunu ayarlamak için eylem oluşturucu
export const setCheckStatus = (status) => ({
    type: types.SET_CHECK_STATUS,
    payload: status
});

// Ödeme bilgilerini güncellemek için eylem oluşturucu
export const updatePaymentInfo = (updatedInfo) => ({
    type: types.UPDATE_PAYMENT_INFO,
    payload: updatedInfo
});

// Adreslere ekleme yapmak için eylem oluşturucu
export const addToAddresses = (newAddress) => ({
    type: types.ADD_TO_ADDRESSES,
    payload: newAddress
});
