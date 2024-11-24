import "./App.css";
import DrawerAppBar from "./components/DrawerAppBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { loadUserData } from "./utils/storage";
import HomeAppBar from "./components/HomeAppBar";
import IntroPage from "./pages/IntroPage";
import HomePage from "./pages/HomePage";
import LessonPage from "./pages/LessonPage";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = loadUserData();
    console.log(user);
    if (!user) {
      navigate("/intro");
    }
  }, []);

  return (
    <Box>
      <Routes>
        <Route path="/intro" element={<DrawerAppBar />}>
          <Route index element={<IntroPage />} />
        </Route>
        <Route path="/" element={<HomeAppBar />}>
          <Route index element={<HomePage />} />
          <Route path="/:lessonId" element={<LessonPage />} />
        </Route>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
