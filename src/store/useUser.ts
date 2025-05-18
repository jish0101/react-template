import type { User } from "@/types/user";
import { create } from "zustand";

type UserState = {
  user: User | null;
  isLoggedIn: boolean;
  clearUser: () => void;
  setUser: (user: User) => void;
  updateUser: (updatedFields: Partial<User>) => void;
};

const useUser = create<UserState>((set) => ({
  user: {
    id: "1",
    name: "Joy",
    role: "ADMIN",
    email: "joy@gmail.com",
  },
  isLoggedIn: false,

  setUser: (user) => set({ user, isLoggedIn: true }),

  clearUser: () => set({ user: null, isLoggedIn: false }),

  updateUser: (updatedFields) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...updatedFields } : null,
    })),
}));

export default useUser;
