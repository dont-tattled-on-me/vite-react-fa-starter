import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./Pages/Home";
import { ErrorPage } from "./Pages/Error";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Error Handling */}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
