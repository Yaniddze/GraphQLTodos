import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  color: black;
  border: 1px solid ${(props): string => props.theme.colors.dim};
  transition: 0.2s box-shadow ease;
  
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19);
  }
  
  & > div:first-child {
    display: flex;
  }
  
  & > div:first-child > * {
    margin-left: auto;
    margin-right: auto; 
  }
  
  @media(min-width:700px) {
    & {
      display: flex;
    }
    
    & > div:first-child {
      display: block;
    }
    
    & > div:last-child {
      margin-left: 10px;
    }
  }
`;
