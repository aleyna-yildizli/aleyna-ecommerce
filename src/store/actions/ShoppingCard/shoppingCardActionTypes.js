// SEPETTEKİ ÜRÜNLER İÇİN EYLEM TÜRLERİ
export const ADD_TO_CART = 'ADD_TO_CART'; // Sepete ürün eklemek için eylem türü
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'; // Sepetten ürün çıkarmak için eylem türü
export const CLEAR_CART = 'CLEAR_CART'; // Sepeti temizlemek için eylem türü
export const UPDATE_CART_ITEM_QUANTITY = "UPDATE_CART_ITEM_QUANTITY"; // Sepet öğe miktarını güncellemek için eylem türü
export const CHANGE_PRODUCT_CHECKED = "CHANGE_PRODUCT_CHANGED"; //Sepetteki (un)check edilen ürünleri sipariş özetine eklemek(kaldırmak) için eylem oluşturucu
export const COUPON_CODE_USE = "COUPON_CODE_USE"; // Sepetteki ürünlere kupon kodu uygulayan eylem türü
export const LOAD_CART = 'LOAD_CART'; //Sepetteki verilerini tarayıcıda kalıcı olarak saklamak ve gerektiğinde bu verileri yüklemek için


//ÖDEME BİLGİLERİ İÇİN EYLEM TÜRLERİ
export const SET_CHECK_STATUS = "SET_CHECK_STATUS"; // Ödeme işleminin durumununu ayarlamak için eylem türü
export const SAVE_CARD = 'SAVE_CARD'; // Yeni kart eklemek için eylem türü
export const FETCH_CARDS = 'FETCH_CARDS';  // Kayıtlı kart bilgilerini getirmek için eylem türü
export const SELECT_CARD = 'SELECT_CARD'; 


//ADRES BİLGİLERİ İÇİN EYLEM TÜRLERİ
export const ADD_TO_ADDRESSES = 'ADD_TO_ADDRESSES'; // Adreslere ekleme yapmak için eylem türü
export const FETCH_ADDRESSES = 'FETCH_ADDRESSES';
export const SELECT_ADDRESS = 'SELECT_ADDRESS'; 


//SİPARİŞİ TAMAMLAMAK İÇİN EYLEM TÜRLERİ 
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILURE = 'CREATE_ORDER_FAILURE';
export const FETCH_ORDERS = "FETCH_ORDERS";
