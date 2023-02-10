import styled from '@emotion/styled';
import { theme } from '../utils/theme';

export const WrapperPhonebook = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding-left: ${theme.space.main * 2}px;
`;

export const Title = styled.h1`
  padding-top: ${theme.space.main}px;
  padding-bottom: ${theme.space.secondary}px;
  margin: 0;
  color: ${theme.colors.heading};
`;

export const TitleContacts = styled.h2`
  padding-bottom: ${theme.space.secondary * 2}px;
  margin: 0;
  color: ${theme.colors.main};
`;

export const WrapperContacts = styled.ul`
  margin: 0;
  padding: 0;
`;
