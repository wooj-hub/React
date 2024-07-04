import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      {/* main은 뭐임? */}
      <main className="w-full m-auto max-w-3xl mt-16">
        {/* outlet을 통해 기본적으로 모든 페이지에 깔려있게 해줌 */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
