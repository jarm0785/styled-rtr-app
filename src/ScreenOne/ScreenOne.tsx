import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router';
import BaseLayout from '../common/components/baseLayout/BaseLayout';
import { SimpleButton } from '../common/components/button/Button';
import Box from '../common/components/layout/Box';
import Flex from '../common/components/layout/Flex';
import ThemeToggle from '../common/components/themeToggle/ThemeToggle';
import { Text } from '../common/components/typography/Typography';
import { ROUTES } from '../common/constants/routes';
import ChuckNorris from './components/ChuckNorris';

const ScreenOne: FunctionComponent = () => {
  const history = useHistory();

  return (
    <BaseLayout
      main={
        <Flex justifyContent="center" alignItems="center" height="100%">
          <ChuckNorris />
        </Flex>
      }
      header={ (
        <Flex
          justifyContent="flex-end"
          alignItems="center"
        >
          <Box mr={ 1 }>
            <Text color="textPrimary" fontSize="1rem">
              Theme Toggle
            </Text>
          </Box>
          <Box>
            <ThemeToggle />
          </Box>
        </Flex>
      ) }
      nav={ (
        <Flex justifyContent="flex-end">
          <SimpleButton onClick={ () => history.push(ROUTES.SECOND_SCREEN) }>
            <Text color="textPrimary" fontSize="1rem">
              { 'Next Page >' }
            </Text>
          </SimpleButton>
        </Flex>
      )}
    />
  );
};

export default ScreenOne;
