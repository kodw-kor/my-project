import { Box, Stack, Typography } from "@mui/material";
import images from "../assets";

const HomePage = () => {
  return (
    <Box
      sx={{
        paddingLeft: "80px",
        paddingRight: "80px",
      }}
    >
      <Stack alignItems="center">
        <Box sx={{ marginTop: "100px" }}>
          <Typography fontSize="100px" fontWeight="bold" color="#33374D">
            nextstop
          </Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <Typography fontSize="40px" fontWeight="bold" color="#33374D">
            all aboard for your journey to CS success!
          </Typography>
          <img
            style={{ position: "absolute", top: 0, right: 0 }}
            width="300px"
            src={images.mainTextCircle}
          />
        </Box>
        <Stack alignItems="center" sx={{ marginTop: "50px" }}>
          <Typography fontSize="20px" fontWeight="bold" color="#33374D">
            LEARN MORE
          </Typography>
          <img width="130px" src={images.learnMoreButton} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomePage;
