import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router';
import BaseLayout from '../common/components/baseLayout/BaseLayout';
import { SimpleButton } from '../common/components/button/Button';
import Box from '../common/components/layout/Box';
import Flex from '../common/components/layout/Flex';
import ThemeToggle from '../common/components/themeToggle/ThemeToggle';
import { Text, Title } from '../common/components/typography/Typography';
import { ROUTES } from '../common/constants/routes';

const ScreenTwo: FunctionComponent = () => {
  const history = useHistory();

  return (
    <BaseLayout
      main={
        <Title>Second Page</Title>
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
        <Flex justifyContent="flex-start">
          <SimpleButton onClick={ () => history.push(ROUTES.FIRST_SCREEN) }>
            <Text color="textPrimary" fontSize="1rem">
              { '< Previous Page' }
            </Text>
          </SimpleButton>
        </Flex>
      )}
    />
  );
};

export default ScreenTwo;
