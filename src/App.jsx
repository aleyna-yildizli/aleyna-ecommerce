import { Route, Switch, useHistory } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import SignUpPage from "./pages/SignUpPage";
import EmailVerificationPage from "./pages/EmailVerificationPage.jsx";
import CompleteOrder from "./pages/CompleteOrder.jsx";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userLogout, userLogin } from "./store/actions/userActions";

import { API, renewAPI } from "./api/api.js";
import "./App.css";
import PiggyLoading from "./components/widgets/PiggyLoading/PiggyLoading.jsx";
import Cart from "./pages/Cart.jsx";
import OrderConfirmation from "./pages/OrderConfirmation.jsx";
import OrderHistory from "./pages/OrderHistory.jsx";
import PrivateRoute from "./components/utils/PrivateRoute.jsx";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      console.log("Token var:", savedToken); // Token varsa konsola yazdır
      API.get("/verify") // Axios başlıklarına token'ı ekle
        .then((response) => {
          console.log("Verify Response:", response.data);
          dispatch(userLogin(response.data)); // Kullanıcı bilgilerini store'a ekleyin
          localStorage.setItem("token", response.data.token);
          renewAPI(); // API'yi yenile
        })
        .catch((error) => {
          console.error("Token verification failed:", error);
          // Token geçerli değilse, token'ı yerel depolamadan ve axios başlıklarından silin
          dispatch(userLogout());
          localStorage.removeItem("token");
          renewAPI(); // API'yi yenile
          history.push("/login");
        });
    } else {
      console.log("Token yok."); // Token yoksa konsola yazdır
      history.push("/login");
    }
  }, [dispatch, history]);

  return (
    <div className="w-full">
      <Switch>
        <PrivateRoute path="/sepetim/odeme" exact>
          <CompleteOrder />
          <Footer />
        </PrivateRoute>
        <PrivateRoute path="/order/confirmation" exact>
          <Header />
          <OrderConfirmation />
          <Footer />
        </PrivateRoute>
        <PrivateRoute path="/order/history" exact>
          <Header />
          <OrderHistory />
          <Footer />
        </PrivateRoute>
        <Route path="/piggy" exact>
          <PiggyLoading />
        </Route>
        <Route path="/" exact>
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="/login">
          <Header />
          <Login />
          <Footer />
        </Route>
        <Route path="/signup">
          <Header />
          <SignUpPage />
          <Footer />
        </Route>
        <Route path="/verification">
          <EmailVerificationPage />
        </Route>
        <Route path="/shop/:categoryId?/:gender?/:categorySlug?/:offset?">
          <Header />
          <Shop />
          <Footer />
        </Route>
        <Route path="/about" exact>
          <Header />
          <About />
          <Footer />
        </Route>
        <Route path="/contact" exact>
          <Header />
          <Contact />
          <Footer />
        </Route>
        <Route path="/team" exact>
          <Header />
          <Team />
          <Footer />
        </Route>
        <Route path="/product/:gender?/:category?/:id?/:name?" exact>
          <Header />
          <ProductPage />
          <Footer />
        </Route>
        <Route path="/sepet" exact>
          <Header />
          <Cart />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
