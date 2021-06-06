import { ThemeType } from '../../common/interface/ITheme';

export interface IExtendedArgs<T> {
  theme: ThemeType;
  storyProps: T;
}
