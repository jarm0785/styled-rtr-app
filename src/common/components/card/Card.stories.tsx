import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Card, { ICardProps } from './Card';
import { IExtendedArgs } from '../../../stories/interface/IExtendedArgs';
import ThemeKnob from '../../../stories/theme/ThemeKnob';
import Box from '../layout/Box';
import { THEME } from '../../constants/theme';
import { Text } from '../typography/Typography';

export default {
  title: 'Common/Card',
  component: Card,
  argTypes: { onClick: { action: 'Fetch:' } }
} as Meta;

const Template: Story<IExtendedArgs<ICardProps>> = (args) =>
  <ThemeKnob theme={ args.theme }>
    <Box>
      <Card { ...args.storyProps } />
    </Box>
  </ThemeKnob>;

export const Default = Template.bind({ });
Default.args = {
  market: THEME.DEFAULT,
  storyProps: {
    title: 'Sample Title',
    body: '',
    actionHandler: () => { },
    actionLabel: (
      <Text fontSize="1rem" color="primary">
        Get a Joke
      </Text>
    ),
    isActionDisabled: false,
  },
};
