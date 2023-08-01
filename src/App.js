import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./routes/main";
import Perfume from "./routes/perfume";
import Accessory from "./routes/accessory";
import Costume from "./routes/costume";
import Shoes from "./routes/shoes";
import DetailMain from "./routes/detail/detail";
import Cart from "./routes/cart";
import SignIn from "./routes/signIn";
import SignUp from "./routes/singUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailMain />} />
        <Route path="/perfume" element={<Perfume />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/costume" element={<Costume />} />
        <Route path="/accessory" element={<Accessory />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
