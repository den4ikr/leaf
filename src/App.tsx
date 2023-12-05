import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/Home";
import MenuPage from "./containers/Menu";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
