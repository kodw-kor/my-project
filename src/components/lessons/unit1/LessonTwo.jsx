import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import images from "../../../assets";
import Exercise from "../../Exercise";

const LessonOne = () => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="h4" fontWeight="bold">
          {t("lesson1-title-example")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography
          variant="paragraph"
          fontSize="0.8rem"
          fontStyle={{ color: "gray" }}
        >
          {t("lesson1-info")}
        </Typography>
      </Box>
      <Typography variant="paragraph" fontSize="1rem">
        {t("lesson1-paragraph1")}
      </Typography>
      <Box sx={{ margin: "10px 0px 10px 0px" }}>
        <img style={{ width: "100%" }} src={images.dummyRectangle} />
      </Box>
      <Box marginBottom="20px">
        <Typography variant="paragraph" fontSize="1rem">
          {t("lesson1-paragraph2")}
        </Typography>
      </Box>
      <Exercise
        question={t("lesson1-question1")}
        answers={["True", "False"]}
        correctIndex={1}
        textIfCorrect={t("lesson1-answer1")}
        textIfWrong={t("lesson1-wrong-answer1")}
      />
      <Box marginTop="20px" marginBottom="20px">
        <Typography variant="paragraph" fontSize="1rem">
          {t("lesson1-paragraph3")}
        </Typography>
      </Box>
      <Exercise
        question={t("lesson1-question1")}
        answers={["True", "False"]}
        correctIndex={1}
        textIfCorrect={t("lesson1-answer1")}
        textIfWrong={t("lesson1-wrong-answer1")}
      />
      <Box marginTop="20px" marginBottom="20px">
        <Typography variant="paragraph" fontSize="1rem">
          {t("lesson1-paragraph4")}
        </Typography>
      </Box>
      <Box marginBottom="20px">
        <Typography variant="paragraph" fontSize="1rem">
          {t("lesson1-paragraph5")}
        </Typography>
      </Box>
    </Stack>
  );
};

export default LessonOne;
