import { Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/notFound";
import { Main } from "../pages/main/main";
import { About } from "../pages/about";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
