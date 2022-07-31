import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route
        path="kutsuvieras"
        element={<App lang="fi" kutsuvieras={true} />}
      />
      <Route
        path="kutsuvieras-en"
        element={<App lang="en" kutsuvieras={true} />}
      />
      <Route path="en" element={<App lang="en" kutsuvieras={false} />} />
      <Route path="/" element={<App lang="fi" kutsuvieras={false} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
