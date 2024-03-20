import {
  Route,
  Switch,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

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

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userLogout, userLogin } from "./store/actions/userActions";

import { API, renewAPI } from "./api/api.js";
import "./App.css";
import PiggyLoading from "./components/widgets/PiggyLoading/PiggyLoading.jsx";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      console.log("Token var:", savedToken); // Token varsa konsola yazdır
      API.get("/verify")
        .then((response) => {
          dispatch(userLogin(response.data));
          renewAPI();
        })
        .catch((error) => {
          dispatch(userLogout()); // Kullanıcıyı çıkış yapmaya zorla
          localStorage.removeItem("token");
          delete renewAPI();
        });
    } else {
      console.log("Token yok."); // Token yoksa konsola yazdır
      history.push("/login");
    }
  }, [dispatch, history]);

  return (
    <div className="w-full">
      <Header />
      <Route path="/piggy" exact>
        <PiggyLoading />
      </Route>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/verification">
          <EmailVerificationPage />
        </Route>
        <Route path="/shop/:categoryId?/:gender?/:categorySlug?/:offset?">
          <Shop />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/team" exact>
          <Team />
        </Route>
        <Route path="/product/:gender?/:category?/:id?/:name?" exact>
          <ProductPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
