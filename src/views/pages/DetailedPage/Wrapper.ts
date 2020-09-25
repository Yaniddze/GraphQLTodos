import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 10px;
  
  & > div:first-child {
    display: flex;
  }
  
  & > div:first-child > * {
    margin-left: auto;
    margin-right: auto;
  }
`;
