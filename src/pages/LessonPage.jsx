import { Box, Button, Container, Stack, styled } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import images from "../assets";
import UnitOneLessonOne from "../components/lessons/unit1/LessonOne";
import UnitOneLessonTwo from "../components/lessons/unit1/LessonTwo";
import { useTranslation } from "react-i18next";
import useContentsStore from "../stores/contentsStore";
import { useUserDataStore } from "../stores/userDataStore";
import {
  setCurrentLessonData,
  setCurrentUnitData,
  addBadgeCount,
} from "../apis/firebase";

const CustomButton = styled(Button)({
  backgroundColor: "#f2c94c",
  width: "150px",
  height: "60px",
  color: "#4a3800",
  borderRadius: "20px",
  padding: "10px 20px",
  fontSize: "20px",
  fontWeight: "bold",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#e2b944", // 호버 시 배경색
  },
});

const LessonPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const contents = useContentsStore((state) => state.contents);
  const userData = useUserDataStore((state) => state.userData);
  const setUserData = useUserDataStore((state) => state.setUserData);
  const { unitName, lessonName } = useParams();

  const getLesson = () => {
    if (unitName === "unit1" && lessonName === "lesson1") {
      return UnitOneLessonOne();
    } else if (unitName === "unit1" && lessonName === "lesson2") {
      return UnitOneLessonTwo();
    }
  };
  const onDidItButtonClick = async () => {
    const currentUnit = userData.currentUnit;
    const currentLesson = userData.currentLesson;
    const allUnits = Object.keys(contents);
    console.log(currentLesson);
    const lessonList = contents[currentUnit].lessonList;
    const currentLessonIndex = lessonList.findIndex((e) => e === currentLesson);
    if (lessonList.length - 1 < currentLessonIndex + 1) {
      const currentUnitIndex = allUnits.findIndex(
        (e) => e === userData.currentUnit
      );
      if (allUnits.length - 1 >= currentUnitIndex + 1) {
        await setCurrentUnitData(allUnits[currentUnitIndex + 1]);
        await addBadgeCount();
        await setUserData({ ...userData, badgeCount: userData.badgeCount + 1 });
        navigate("/");
      }
    } else {
      await setCurrentLessonData(lessonList[currentLessonIndex + 1]);
      await addBadgeCount();
      await setUserData({ ...userData, badgeCount: userData.badgeCount + 1 });
      navigate("/");
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
        <Stack alignItems="center" marginTop="20px">
          <CustomButton onClick={onDidItButtonClick}>
            {t("you-did-it")}{" "}
          </CustomButton>
        </Stack>
        <Box sx={{ height: "30px" }}></Box>
      </Container>
    </Box>
  );
};

export default LessonPage;
