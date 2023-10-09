import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 30px;
  margin-left: 20px;
  flex-wrap: wrap;
`;
export const Contact = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const ListItem = styled.li`
  font-size: 18px;
  font-weight: bold;
`;

export const Button = styled.button`
  display: flex;
  height: 17px;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  border-radius: 4px;
  border: 1px solid black;

  &:hover {
    background-color: #a580d5;
    color: white;
  }
`;
