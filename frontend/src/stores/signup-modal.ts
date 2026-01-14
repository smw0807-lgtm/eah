import { create } from "zustand";
import { combine } from "zustand/middleware";

const initialState = {
  isOpen: false,
};

const useSignupModalStore = create(
  combine(initialState, (set) => ({
    actions: {
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
    },
  })),
);

export const useOpenSignupModal = () => {
  const open = useSignupModalStore((store) => store.actions.open);
  return open;
};

export const useSignupModal = () => {
  const store = useSignupModalStore();
  return store;
};
