import styled from '@emotion/styled';
import { theme } from '../../utils/theme';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.space.secondary}px;
  font-size: ${theme.typography.text};
  margin-bottom: ${theme.space.main * 2}px;
`;

export const Input = styled.input`
  font-size: ${theme.typography.text};
  padding: ${theme.space.secondary}px;
  color: ${theme.colors.text};
`;

export const Label = styled.label`
  font-size: ${theme.typography.title};
  color: ${theme.colors.text};
  padding-bottom: ${theme.space.secondary}px;
  display: flex;
  flex-direction: column;
  line-height: 1.8;
`;

export const Button = styled.input`
  font-size: ${theme.typography.title};
  width: 200px;
  padding: ${theme.space.secondary}px;
  cursor: pointer;
  box-shadow: 1px 3px 5px ${theme.colors.button};
  border: none;
  border-radius: 5px;
  background-color: ${theme.colors.button};

  margin-top: ${theme.space.secondary}px;
  &:hover,
  &:focus {
    background-color: ${theme.colors.buttonHover};
  }
`;

export const ErrorInput = styled.p`
  margin: 0;
  padding-top: 5px;
  font-size: 12px;
  color: orangered;
`;
