import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />;
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
