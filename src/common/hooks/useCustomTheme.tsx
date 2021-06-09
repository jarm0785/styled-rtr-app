import { useSelector } from 'react-redux';
import { ICustomTheme } from '../interface/ITheme';
import type { ThemeType } from '../interface/ITheme';
import globalThemeSelectors from '../store/selectors/globalThemeSelectors';


export default function useCustomTheme(): { theme: Record<ThemeType, ICustomTheme>, activeTheme: ThemeType } {
  const theme = useSelector(globalThemeSelectors.getTheme);
  const activeTheme = useSelector(globalThemeSelectors.getActiveTheme);

  return { theme, activeTheme };
}
