import React, { FunctionComponent } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ScreenOne from '../../../ScreenOne/ScreenOne';
import { ROUTES } from '../../constants/routes';
import loadable from '@loadable/component';

// Code-Splitting is supported using this pattern;
const SecondScreen = loadable(() => import('../../../ScreenTwo/screenTwo'));

const WidgetRouter: FunctionComponent = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact={ true }
          path={ ROUTES.FIRST_SCREEN }
          component={ ScreenOne }
        />
        <Route
          exact={ true }
          path={ ROUTES.SECOND_SCREEN }
          component={ SecondScreen }/>
        <Redirect from={ ROUTES.INDEX } to={ ROUTES.FIRST_SCREEN }/>
      </Switch>
    </BrowserRouter>
  );
};

export default WidgetRouter;
