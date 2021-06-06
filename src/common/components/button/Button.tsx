import styled from 'styled-components';

export const Button = styled.button`
  padding: 14px 16px;
  border-radius: 26px;
  cursor: pointer;
  display: block;
  width: 100%;
  max-width: 220px;
  border: 1px solid ${ ({ theme }) => theme.button.borderColor };
  color: ${ ({ theme }) => theme.button.color };
  text-transform: capitalize;
  background-color: unset;

  &:hover {
    background-color: ${ ({ theme }) =>
    theme.button.hoverBackgroundColor };
    border-color: ${ ({ theme }) => theme.button.borderColor };
  }
`;

export const SimpleButton = styled(Button)`
  border: none;
`;
