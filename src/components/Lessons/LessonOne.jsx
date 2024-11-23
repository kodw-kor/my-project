import { Box, Stack, Typography } from "@mui/material";
import images from "../../assets";
import Exercise from "../Exercise";

const LessonOne = () => {
  return (
    <Stack>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="h4" fontWeight="bold">
          이건 예시 수업 제목입니다.
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography
          variant="paragraph"
          fontSize="0.8rem"
          fontStyle={{ color: "gray" }}
        >
          평균 독서 시간 5 분 · 질문 3개
        </Typography>
      </Box>
      <Typography variant="paragraph" fontSize="1rem">
        대통령은 조국의 평화적 통일을 위한 성실한 의무를 진다. 제1항의 지시를
        받은 당해 행정기관은 이에 응하여야 한다. 국회는 헌법 또는 법률에 특별한
        규정이 없는 한 재적의원 과반수의 출석과 출석의원 과반수의 찬성으로
        의결한다. 가부동수인 때에는 부결된 것으로 본다.
      </Typography>
      <Box sx={{ margin: "10px 0px 10px 0px" }}>
        <img style={{ width: "100%" }} src={images.dummyRectangle} />
      </Box>
      <Box marginBottom="20px">
        <Typography variant="paragraph" fontSize="1rem">
          재의의 요구가 있을 때에는 국회는 재의에 붙이고, 재적의원과반수의
          출석과 출석의원 3분의 2 이상의 찬성으로 전과 같은 의결을 하면 그
          법률안은 법률로서 확정된다.
        </Typography>
      </Box>
      <Exercise
        question="법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는?"
        answers={["True", "False", "fiowejiofw"]}
        correctIndex={2}
        textIfCorrect={"정답일때 나오는 텍스트 입니다!"}
        textIfWrong={
          "오답일때 나오는 텍스트 입니다. 여기엔 정답과 해답/해설도 적혀있습니다!"
        }
      />
    </Stack>
  );
};

export default LessonOne;
