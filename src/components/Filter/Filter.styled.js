import styled from '@emotion/styled';
import { theme } from '../../utils/theme';

export const FilterWrapper = styled.label`
  margin-bottom: ${theme.space.secondary}px;
  font-size: ${theme.typography.text};
  color: ${theme.colors.text};
  font-style: italic;
`;

export const FilterInput = styled.input`
  font-size: ${theme.typography.text};
  padding: ${theme.space.secondary}px;
  color: ${theme.colors.text};
  margin-left: ${theme.space.secondary * 2}px;
  font-style: italic;
`;
