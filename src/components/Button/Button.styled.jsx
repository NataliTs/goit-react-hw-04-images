import styled from 'styled-components';

export const MoreBtn = styled.button`
  padding: 8px 1px;
  margin: 0 auto 16px auto;
  border-radius: 3px;
  background-color: ${p => p.theme.colors.backgroundColor};
  text-align: center;
  display: block;
  color: ${p => p.theme.colors.white};
  border: 0;
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: ${p => p.theme.boxShadow};
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.acentBgcolor};
  }
`;
