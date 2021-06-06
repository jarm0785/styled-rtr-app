import { IStore } from '../store';

const firstScreenSelectors = {
  getIsLoading: (state: IStore) => state.firstScreen.isLoading,
  getRandomJoke: (state: IStore) => state.firstScreen.data?.value ?? 'Click to fetch a new joke.',
};

export default firstScreenSelectors;
