const firstScreenSelectors = {
  getIsLoading: (state: { secondScreen: { isLoading: boolean; }; }) => state.secondScreen.isLoading,
};

export default firstScreenSelectors;
