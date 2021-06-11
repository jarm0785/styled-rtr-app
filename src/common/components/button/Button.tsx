import styled from 'styled-components';

export const Button = styled.button`
  padding: 14px 16px;
  border-radius: 26px;
  cursor: pointer;
  display: block;
  width: 100%;
  max-width: 220px;
  border: 1px solid ${ (props) => props.theme.button.borderColor };
  color: ${ (props) => props.theme.button.color };
  text-transform: capitalize;
  background-color: unset;

  &:hover {
    background-color: ${ (props) => props.theme.button.hoverBackgroundColor };
    border-color: ${ (props) => props.theme.button.borderColor };
    color: ${ (props) => props.theme.button.hoverColor };
  }
`;

export const SimpleButton = styled(Button)`
  border: none;
  &:hover {
    background-color: 'unset';
  }
`;
