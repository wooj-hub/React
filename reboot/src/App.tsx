import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tabs from "./thinggo/Tabs";
import Home from "./Home";
import Product from "./Product";
import Layout from "./yeoshin/Layout";
import Counter from "./musinsa/Counter";
import Effect from "./Effect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout을 route로 감싸주면 안에 페이지를 열 때 기본적으로 깔려있음 */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* 위에 와 같은 의미 Component 보단 element 선호함 */}
          {/* <Route path="/" Component={Home} /> */}
          <Route path="/thinggo" Component={Tabs} />
          {/* probs를 전달할 때는 밑에처럼 함 */}
          <Route
            path="/musinsa"
            element={
              <>
                <Counter price={15000} />
                <Counter price={30000} />
                <Counter price={40000} />
              </>
            }
          />
          <Route path="/product/:id" Component={Product} />
          <Route path="/effect" Component={Effect} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
