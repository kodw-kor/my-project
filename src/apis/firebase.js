import { db } from "../configs/firebase";
import { setDoc, getDocs, collection, getDoc, doc } from "firebase/firestore";
import { loadUserData } from "../utils/storage";

const getContent = async () => {
  const querySnapshot = await getDocs(collection(db, "contents"));
  const obj = {};
  querySnapshot.docs.forEach((e) => {
    obj[e.id] = e.data();
  });
  return obj;
};

const getUserData = async (uid) => {
  const docRef = doc(db, "user-data", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    const initalValue = {
      badgeCount: 0,
      currentLesson: "lesson1",
      currentUnit: "unit1",
    };
    await setDoc(docRef, initalValue);
    return initalValue;
  }
};

const setCurrentLessonData = async (currentLesson) => {
  const docRef = doc(db, "user-data", loadUserData()?.uid);
  const initalValue = {
    currentLesson: currentLesson,
  };
  await setDoc(docRef, initalValue, { merge: true });
};

const setCurrentUnitData = async (currentUnit) => {
  const docRef = doc(db, "user-data", loadUserData()?.uid);
  const initalValue = {
    currentUnit: currentUnit,
  };
  await setDoc(docRef, initalValue, { merge: true });
};

export { getContent, getUserData, setCurrentLessonData, setCurrentUnitData };
