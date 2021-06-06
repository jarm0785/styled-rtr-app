import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../button/Button';
import { Paragraph, Title } from '../typography/Typography';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  alignItems: center;
  border: ${ (props) => `1px solid ${ props.theme.colors.primary }` };
  border-radius: 10px;
  padding: 4rem;
`;

const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`;

export interface ICardProps {
  title: string;
  body: string;
  actionLabel: React.ReactNode | string;
  isActionDisabled: boolean;
  actionHandler: () => void;
}

const Card: FC<ICardProps> = ({
  title,
  body,
  actionHandler,
  actionLabel,
  isActionDisabled,
}) => (
  <StyledContainer>
    <Title>
      { title }
    </Title>
    <Paragraph>
      { body }
    </Paragraph>
    <Actions>
      <Button onClick={ actionHandler } disabled={ isActionDisabled }>
        { actionLabel }
      </Button>
    </Actions>
  </StyledContainer>
);

export default Card;
