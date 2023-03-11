import "./App.css";
import Header from "./components/Home/header/header";
import Main from "./components/Home/main/main";
import Sidebar from "./components/Home/sidebar/sidebar";
import Catalog from "./components/routes/catalog/catalog";
import Toys from "./components/routes/toys/toys";
import Characters from "./components/routes/character/characters";
import Eng from "./components/routes/eng/eng";
import Alexender from "./components/routes/alexender/alexender";
import Brand from "./components/routes/brand/brand";
import Legoland from "./components/routes/legoland/legoland";
import { Routes, Route } from "react-router-dom";
// import Catagoeryitem from "./components/routes/catagoeryItem/catagoeryItem";
// import Searchitem from "./components/routes/searchItem/searchitem";
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Header />
      <Main />
      <div className="pages">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Toys />}></Route>
          <Route path="/Catalog" element={<Catalog />}></Route>
          <Route path="/Characters" element={<Characters />}></Route>
          <Route path="/Eng" element={<Eng />}></Route>
          <Route path="/Alexender" element={<Alexender />}></Route>
          <Route path="/Brand" element={<Brand />}></Route>
          <Route path="/Legoland" element={<Legoland />}></Route>
        </Routes>
      </div>
      {/* </BrowserRouter> */}
    </div>
  );
}
export default App;
