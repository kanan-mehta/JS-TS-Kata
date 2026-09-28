import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import KatasPage from "./pages/KatasPage/KatasPage";
import KatasDetailPage from "./pages/KatasDetailPage/KatasDetailPage";
import KatasCategoryPage from "./pages/KatasCategoryPage/KatasCategoryPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/katas" element={<KatasPage />} />
            <Route
              path="/katas/:categorySlug"
              element={<KatasCategoryPage />}
            />
            <Route
              path="/katas/:categorySlug/:slug"
              element={<KatasDetailPage />}
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
