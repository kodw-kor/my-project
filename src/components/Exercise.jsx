import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Exercise = ({
  question,
  answers,
  correctIndex,
  textIfCorrect,
  textIfWrong,
}) => {
  const [selectedIndex, setSeletedIndex] = useState(null);

  const showAnswerText = () => {
    if (selectedIndex !== null && selectedIndex === correctIndex) {
      return (
        <Typography fontStyle={{ color: "#2F45BE" }} fontWeight="bold">
          {textIfCorrect}
        </Typography>
      );
    } else if (selectedIndex !== null) {
      return (
        <Typography fontStyle={{ color: "#D89F12" }} fontWeight="bold">
          {textIfWrong}
        </Typography>
      );
    } else {
      return <></>;
    }
  };

  return (
    <Box
      sx={{
        padding: "15px",
        backgroundColor: "white",
        borderRadius: "15px",
        boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box marginBottom="10px">
        <Typography fontSize="1.2rem" fontWeight="bold">
          Q: {question}
        </Typography>
      </Box>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={(e) => {
            setSeletedIndex(Number(e.target.value));
          }}
        >
          {answers.map((e, i) => {
            return (
              <FormControlLabel
                key={i}
                value={i}
                control={<Radio />}
                label={e}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      <Box marginTop="10px">{showAnswerText()}</Box>
    </Box>
  );
};

export default Exercise;
