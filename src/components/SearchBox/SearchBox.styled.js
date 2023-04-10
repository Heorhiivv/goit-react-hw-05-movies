import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';
import { Field } from 'formik';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled(Field)`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
`;
export const Button = styled.button`
  padding: 8px 16px;
  margin-left: 12px;
  border-radius: 4px;
  text-decoration: none;
  background-color: #ffffff;
  color: black;
  font-weight: 500;

  &:hover {
    color: white;
    background-color: orangered;
  }
`;
