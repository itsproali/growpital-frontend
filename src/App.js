import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Invest from "./pages/Service/Invest/Invest";
import Portfolio from "./pages/Service/Portfolio/Portfolio";
import Service from "./pages/Service/Service";
import Support from "./pages/Service/Support/Support";
import Wallet from "./pages/Service/Wallet/Wallet";

function App() {
  const location = useLocation();
  const isService = location.pathname.includes("service");
  return (
    <>
      {isService || <Navbar />}
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />}>
          <Route index element={<Portfolio />} />
          <Route path="invest" element={<Invest />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
      {isService || <Footer />}
    </>
  );
}

export default App;
