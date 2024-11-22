import "./App.css";
import DrawerAppBar from "./components/DrawerAppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Box } from "@mui/material";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DrawerAppBar />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default App;
