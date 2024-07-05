import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      {/* main과 outlet이 있어야 Header와 Footer 사이에  웹 페이지의 주요 컨텐츠를 나타내는 역할을 합니다. */}
      {/* mt-16 은 margin-top 64px라는 뜻으로 위로부터 64px를 띄어줘야 메인 컨텐츠 들이 보임 */}
      <main className="w-full m-auto max-w-3xl mt-16 text-center ">
        {/* outlet을 통해 기본적으로 모든 페이지에 깔려있게 해줌 */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
