import { create } from "zustand";

const useUserDataStore = create((set) => ({
  userData: null,
  setUserData: (userData) => set({ userData: userData }),
}));

export { useUserDataStore };
