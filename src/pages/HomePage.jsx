import { Container, Stack } from "@mui/material";
import images from "../assets";
import StonesContainer from "../components/StonesContainer";

const HomePage = () => {
  return (
    <Container sx={{ height: "100%" }} maxWidth="xl">
      <Stack
        sx={{ height: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <span style={{ position: "relative" }}>
          <StonesContainer />
          <img style={{ width: "1200px" }} src={images.mainRail} />
        </span>
      </Stack>
    </Container>
  );
};

export default HomePage;
