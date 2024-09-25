import "./App.css";
import ApiTest from "./components/ApiTest";
import TopBar from "./components/Navbar/TopBar";
import DeliveryLocation from "./components/SearchTab/DeliveryLocation";
import SearchTabMobile from "./components/SearchTab/SearchTabMobile";

import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/search" element={<SearchTabMobile />} />
          <Route path="/delivery" element={<DeliveryLocation />} />
          
          <Route element={Error} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
