import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./components/HomePage";
import CaseStudy from "./components/CaseStudy";
import ResumePage from "./components/ResumePage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/:id" element={<CaseStudy />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  );
}
