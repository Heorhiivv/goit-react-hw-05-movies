import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  list-style-type: none;
  text-decoration: none;
  gap: 16px;
`;

export const CardWrapper = styled.li`
  border: 1px solid black;
  border-radius: 4px;
`;

export const MovieName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
