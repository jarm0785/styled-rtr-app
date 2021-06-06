import { IStore } from '../store';

const globalThemeSelectors = {
  getTheme: (state: IStore) => state.globalTheme.theme,
  getActiveTheme: (state: IStore) => state.globalTheme.activeTheme,
};

export default globalThemeSelectors;
