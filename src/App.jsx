import { Route, Routes } from "react-router-dom";

import "./scss/app.scss";

import ScrollToTop from "./utils/scrollToTop";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Partners from "./pages/Partners";
import Mission from "./pages/Mission";
import Products from "./pages/Products";

const App = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/about-us"} element={<AboutUs />} />
                    <Route path={"/partners"} element={<Partners />} />
                    <Route path={"/mission"} element={<Mission />} />
                    <Route path={"/products"} element={<Products />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
