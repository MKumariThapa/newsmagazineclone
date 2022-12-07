import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Topbar from "./components/navbar/Topbar";
// import Footer from "./components/mainsection/Footer/Footer";
import FooterEnd from "./components/mainsection/Footer/FooterEnd";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/newsmagazineclone" element={<Home />} />
          {/* <Route index element={<Home />} /> */}
          {/* <Home /> */}
        </Routes>
        {/* <Footer /> */}
        <FooterEnd />
      </BrowserRouter>
    </div>
  );
}

export default App;
