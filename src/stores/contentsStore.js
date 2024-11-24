import { create } from "zustand";

const useContentsStore = create((set) => ({
  contents: null,
  setContents: (contents) => set({ contents: contents }),
}));

export default useContentsStore;
