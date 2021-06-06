import styled from 'styled-components';
import { flexbox, FlexboxProps } from 'styled-system';
import Box, { IBoxProps } from './Box';

const Flex = styled(Box)<FlexboxProps & IBoxProps>`
  ${ flexbox }
  display: flex,
`;

export default Flex;
