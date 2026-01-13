import { create } from "zustand";
import { combine } from "zustand/middleware";

const initialState = {
  isOpen: false,
};

const useSigninModalStore = create(
  combine(initialState, (set) => ({
    actions: {
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
    },
  })),
);

export const useOpenSigninModal = () => {
  const open = useSigninModalStore((store) => store.actions.open);
  return open;
};

export const useSigninModal = () => {
  const store = useSigninModalStore();
  return store;
};
