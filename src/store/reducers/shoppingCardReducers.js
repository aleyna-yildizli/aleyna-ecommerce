// shoppingCardActionTypes dosyasından eylem türlerini içeri aktar
import * as types from '../actions/ShoppingCard/shoppingCardActionTypes';


const cardInitial = {
    cart: [],
    payment: [],
    address: [],
    couponCodeApplied: false
};

// Reducer fonksiyonu
const shoppingCartReducers = (state = cardInitial, action) => {
    let newCart = [...state.cart];

    switch (action.type) {
        case types.ADD_TO_CART:
            // Sepete yeni ürün eklemek için
            const existingIndex = state.cart.findIndex(item => item.product === action.payload);
            if (existingIndex !== -1) {
                const updatedCart = [...state.cart];
                updatedCart[existingIndex] = {
                    ...updatedCart[existingIndex],
                    count: updatedCart[existingIndex].count + 1
                };
                return {
                    ...state,
                    cart: updatedCart
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { count: 1, checked: true, product: action.payload }]
                };
            }
        case types.REMOVE_FROM_CART:
            // Sepetten ürün çıkarmak
            return {
                ...state,
                cart: state.cart.filter(item => item.product.id !== action.payload)
            };
        case types.UPDATE_CART_ITEM_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.product.id === action.payload.productId) {
                    return {
                        ...item,
                        count: action.payload.count
                      };
                    }
                    return item;
                  })
                };
        case types.COUPON_CODE_USE:
                return {
                    ...state,
                    couponCodeApplied: true,  
                }
            //Sepetteki ürünlerin check stateini ayarlar
        case types.CHANGE_PRODUCT_CHECKED:
            for (let i = 0; i < newCart.length; i++) {
                if (action.payload === newCart[i].product.id) {
                    newCart = [...newCart.slice(0, i), { ...newCart[i], checked: !newCart[i].checked }, ...newCart.slice(i + 1)]
                    break;
                }
            }
            return { ...state, cart: [...newCart] };  
        case types.SET_PAYMENT_INFO:
            // var olan ödeme bilgileri tamamen değiştirilir
            // action.payload içinde gelen ödeme bilgileri, doğrudan payment alanına atamak gerekecek
            return {
                ...state,
                payment: action.payload
            };
        case types.SET_CHECK_STATUS:
            // Ödeme durumunu ayarlamak(örneğin, ödeme başarılı, ödeme başarısız, ödeme işlemde)
            // action.payload içinde gelen ödeme durumunu state'e eklemek gerekecek
            return {
                ...state,
                payment: {
                    ...state.payment,
                    status: action.payload
                }
            };
        case types.UPDATE_PAYMENT_INFO:
            // Ödeme bilgilerini güncellemek
            // action.payload içinde gelen güncellenmiş ödeme bilgilerini state'e eklemek gerekecek
            return {
                ...state,
                payment: {
                    ...state.payment,
                    ...action.payload
                }
            };
        case types.SET_ADDRESS_INFO:
            // Adres bilgilerini ayarlamak
            // action.payload içinde gelen adres bilgilerini state'e eklemek gerekecek
            return {
                    ...state,
                    address: action.payload
                };
        case types.ADD_TO_ADDRESSES:
            // Adreslere ekleme yapmak
            // action.payload içinde gelen yeni adres bilgilerini state'e eklemek gerekecek,
            const newAddress = action.payload;
            return {
                ...state,
                address: [...state.address, newAddress]
            };
        case types.FETCH_ADDRESSES:
            return {
                 ...state, 
                 address: action.payload 
                };
        case types.SAVE_CARD:
            return {
                ...state,
                payment: [...state.payment, action.payload], // Yeni kart bilgisini diziye ekliyoruz
                };
        case types.FETCH_CARDS:
            return {
                ...state,
                payment: action.payload, // Kart bilgilerini state'e ekliyoruz
                };
        default:
            return state;
    }
};

export default shoppingCartReducers;
