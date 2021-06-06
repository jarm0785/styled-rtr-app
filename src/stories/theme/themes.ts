import { defaultTheme } from '../../common/theme/theme';
import { darkTheme } from '../../common/theme/darkTheme';
import { ICustomTheme, ThemeType } from '../../common/interface/ITheme';

const themes: { customThemes: Record<ThemeType, { theme: ICustomTheme }> } = {
  customThemes: {
    default: {
      theme: defaultTheme,
    },
    dark: {
      theme: darkTheme,
    },
  }
};

export default themes;
