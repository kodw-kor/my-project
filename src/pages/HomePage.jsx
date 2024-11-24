import { Container, Stack } from "@mui/material";
import images from "../assets";
import StonesContainer from "../components/StonesContainer";
import { useEffect, useState } from "react";
import { getContent, getUserData } from "../apis/firebase";
import { loadUserData } from "../utils/storage";
import { useUserDataStore } from "../stores/userDataStore";
import useContentsStore from "../stores/contentsStore";

const HomePage = () => {
  const setUserData = useUserDataStore((state) => state.setUserData);
  const userData = useUserDataStore((state) => state.userData);
  const contents = useContentsStore((state) => state.contents);
  const setContents = useContentsStore((state) => state.setContents);

  useEffect(() => {
    getContent().then((e) => {
      setContents(e);
    });
    getUserData(loadUserData()?.uid).then((e) => {
      setUserData(e);
    });
  }, []);
  if (!userData || !contents) {
    return null;
  }
  const currentLessons = contents[userData.currentUnit];

  const stoneInfos = [
    { top: 0, left: 300 },
    { top: 0, left: 600 },
    { top: 0, left: 900 },
    { top: 180, right: 300 },
    { top: 180, right: 650 },
    { top: 280, left: 140 },
    { top: 400, left: 400 },
    { top: 400, left: 700 },
    { top: 400, right: 100 },
  ].map((e, i) => {
    if (currentLessons.lessonList[i]) {
      return { ...e, path: currentLessons.lessonList[i] };
    }
    return e;
  });

  const getCurrentPosition = () => {
    return contents[userData.currentUnit].lessonList.findIndex(
      (e) => e === userData.currentLesson
    );
  };

  return (
    <Container sx={{ height: "100%" }} maxWidth="xl">
      <Stack
        sx={{ height: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <span style={{ position: "relative" }}>
          <img
            id="rail-image-1"
            style={{ width: "1200px" }}
            src={images.mainRail}
          />

          <StonesContainer
            stoneInfos={stoneInfos}
            currentPosition={getCurrentPosition()}
          />
        </span>
      </Stack>
    </Container>
  );
};

export default HomePage;
