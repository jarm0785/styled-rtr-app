import React, { FC, useCallback, useEffect, useState } from 'react';
import { THEME } from '../../constants/theme';
import { useAppDispatch } from '../../hooks/redux';
import { gobalThemeActions } from '../../store/reducers/globalThemeReducer';
import Switch from '../toggleSwitch/toggleSwitch';

const ThemeToggle: FC = () => {
  const [active, setActive] = useState(false);

  const toggleSwitch = useCallback(() => {
    setActive(!active);
  }, [active]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(gobalThemeActions.setActiveTheme(!active ? THEME.DEFAULT : THEME.DARK));
  }, [active]);

  return (
    <Switch active={ active } toggleSwitch={ toggleSwitch } />
  );
};

export default ThemeToggle;
