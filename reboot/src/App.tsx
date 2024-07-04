import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tabs from "./thinggo/Tabs";
import Musinsa from "./musinsa/Musinsa";
import Home from "./Home";
import Product from "./Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 정적 라우팅 */}
        <Route path="/" Component={Home} />
        <Route path="/thinggo" Component={Tabs} />
        <Route path="/musinsa" Component={Musinsa} />

        {/* 동적 라우팅. id에 따라 페이지가 바뀜*/}
        {/* id 말고도 abc, sa 등 아무거나 다 됨 */}
        <Route path="/product/:id" Component={Product} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
