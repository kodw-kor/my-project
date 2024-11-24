import { Box } from "@mui/material";
import images from "../assets";
import { useNavigate } from "react-router-dom";

const StonesContainer = ({ currentPosition, stoneInfos }) => {
  const targetStone = stoneInfos[currentPosition];
  const navigate = useNavigate();
  return (
    <>
      <img
        id="stone-marker"
        style={{
          zIndex: 100,
          position: "absolute",
          left: targetStone?.left ? targetStone?.left + 30 : undefined,
          right: targetStone?.right ? targetStone?.right + 30 : undefined,
          top: targetStone?.top - 40,
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/" + stoneInfos[currentPosition]?.path);
        }}
        src={images.marker}
      />
      {stoneInfos.map(({ top, left, right }, i) => (
        <Box
          id={"stone-" + i}
          key={i}
          sx={{ position: "absolute", top, left, right }}
        >
          <img
            style={{ width: "130px" }}
            src={currentPosition > i ? images.grayStone : images.yellowStone}
          />
        </Box>
      ))}
    </>
  );
};

export default StonesContainer;
