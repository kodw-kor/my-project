import { Box } from "@mui/material";
import images from "../assets";

const StonesContainer = () => {
  return (
    <>
      <Box sx={{ position: "absolute", top: 0, left: 300 }}>
        <img style={{ width: "130px" }} src={images.grayStone} />
      </Box>
      <Box sx={{ position: "absolute", top: 0, left: 600 }}>
        <img style={{ width: "130px" }} src={images.grayStone} />
      </Box>
      <Box sx={{ position: "absolute", top: 0, left: 900 }}>
        <img style={{ width: "130px" }} src={images.grayStone} />
      </Box>
      <Box sx={{ position: "absolute", top: 180, right: 300 }}>
        <img style={{ width: "130px" }} src={images.yellowStone} />
      </Box>
      <Box sx={{ position: "absolute", top: 180, right: 700 }}>
        <img style={{ width: "130px" }} src={images.yellowStone} />
      </Box>
      <Box sx={{ position: "absolute", top: 280, left: 140 }}>
        <img style={{ width: "130px" }} src={images.yellowStone} />
      </Box>
      <Box sx={{ position: "absolute", top: 400, left: 400 }}>
        <img style={{ width: "130px" }} src={images.yellowStone} />
      </Box>
      <Box sx={{ position: "absolute", top: 400, left: 700 }}>
        <img style={{ width: "130px" }} src={images.yellowStone} />
      </Box>
      <Box sx={{ position: "absolute", top: 400, right: 100 }}>
        <img style={{ width: "130px" }} src={images.yellowStone} />
      </Box>
    </>
  );
};

export default StonesContainer;
