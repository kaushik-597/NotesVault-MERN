import { Header, Footer } from "./components/index.js";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-slate-100">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default Layout;
