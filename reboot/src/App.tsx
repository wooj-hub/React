import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tabs from "./thinggo/Tabs";
import Musinsa from "./musinsa/Musinsa";
import Home from "./Home";
import Product from "./Product";
import Layout from "./yeoshin/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout을 route로 감싸주면 안에 페이지를 열 때 기본적으로 깔려있음 */}
        <Route element={<Layout />}>
          <Route path="/" Component={Home} />
          <Route path="/thinggo" Component={Tabs} />
          <Route path="/musinsa" Component={Musinsa} />
          <Route path="/product/:id" Component={Product} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
