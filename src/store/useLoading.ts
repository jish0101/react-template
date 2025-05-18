import { create } from "zustand";

type LoadingState = {
  isLoading: boolean;
  setIsLoading: (newValue: boolean) => void;
};

const useLoading = create<LoadingState>((set) => ({
  isLoading: false,
  setIsLoading: (newValue) =>
    set((state) => ({
      ...state,
      isLoading: newValue,
    })),
}));

export default useLoading;
