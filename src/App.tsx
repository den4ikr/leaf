import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/Home";
import MenuPage from "./containers/Menu";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
