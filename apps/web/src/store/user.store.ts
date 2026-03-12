import { create } from "zustand";

export type PlanTier = "free" | "pro" | "enterprise";

export type UserProfile = {
  id: string;
  name: string;
  email: string;
};

export type UserStore = {
  user: UserProfile | null;
  address: `0x${string}` | null;
  plan: PlanTier;
  setUser: (user: UserProfile | null) => void;
  setAddress: (address: `0x${string}` | null) => void;
  setPlan: (plan: PlanTier) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  address: null,
  plan: "free",
  setUser: (user) => set({ user }),
  setAddress: (address) => set({ address }),
  setPlan: (plan) => set({ plan }),
}));
