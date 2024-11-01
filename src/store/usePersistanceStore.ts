import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {mmkvStorage} from '../storage/storage';

type CountStoreState = {count: number};
type CountStoreActions = {
  increment: (nextCount: CountStoreState['count']) => void;
  decrement: (nextCount: CountStoreState['count']) => void;
  reset: () => void;
};

type CountStore = CountStoreState & CountStoreActions;

export const usePersistanceStore = create<CountStore>()(
  persist(
    set => ({
      count: 0,
      increment: count => set({count: count + 1}),
      decrement: count => set({count: count - 1}),
      reset: () => set({count: 0}),
    }),
    {
      name: 'example-store',
      storage: createJSONStorage(() => mmkvStorage),
    },
  ),
);
