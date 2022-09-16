import { Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/notFound";
import { Main } from "../pages/main/main";
import { About } from "../pages/about";
import { Discography } from "../pages/discography";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/discography" element={<Discography />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
