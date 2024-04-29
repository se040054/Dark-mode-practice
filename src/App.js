import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, AnotherPage } from "./pages";
import React from "react";
import { GlobalStyles } from "./components/common/global";
import { ThemeContextProvider } from "./context/ThemeContext";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeContextProvider>
          <GlobalStyles />
          <Routes>
            <Route path="home" element={<HomePage />}></Route>
            <Route path="another" element={<AnotherPage />}></Route>
          </Routes>
        </ThemeContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

