import { Box, Button, Container, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import images from "../assets";
import LessonOne from "../components/Lessons/LessonOne";

const LessonPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const getLesson = () => {
    switch (location.pathname) {
      case "/lesson1":
        return LessonOne();
    }
  };
  return (
    <Box sx={{ backgroundColor: "#F9F9FB" }}>
      <Stack flexDirection="row">
        <Box
          sx={{
            position: "relative",
            marginLeft: "30px",
            marginTop: "20px",
            paddingLeft: "5px",
          }}
        >
          <Box sx={{ position: "absolute", top: 8, left: -10 }}>
            <img
              style={{ width: "20px", height: "20px" }}
              src={images.arrowLeft}
            />
          </Box>
          <Button
            onClick={() => {
              navigate("/");
            }}
            sx={{ color: "black" }}
          >
            뒤로가기
          </Button>
        </Box>
      </Stack>
      <Container sx={{ marginTop: "20px" }} maxWidth="md">
        {getLesson()}
      </Container>
    </Box>
  );
};

export default LessonPage;
