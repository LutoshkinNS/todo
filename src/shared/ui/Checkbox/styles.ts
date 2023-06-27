import styled from "styled-components";

export const Checkbox = styled.div`
  position: relative;
  padding-left: 20px;

  input:checked ~ label div {
    background: ${({ theme }) => theme.colors.secondary};
    &::after {
      display: block;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }

  input:indeterminate ~ label div {
    background: ${({ theme }) => theme.colors.secondary};
    &::after {
      display: block;
      border-width: 0 2px 0px 0;
      transform: rotate(90deg);
    }
  }
`;

export const Input = styled.input`
  margin-right: 10px;
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

export const Indicator = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background: transparent;
  top: 4px;
  left: 0;
  border: 1px solid #757575;
  border-radius: 3px;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    display: none;
    top: 1px;
    left: 5px;
    width: 35%;
    height: 70%;
    border: solid ${({ theme }) => theme.colors.fontSecondary};
    border-width: 0 0px 0px 0;
  }
`;
