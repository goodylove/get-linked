import styled from "styled-components";
import { Colors } from "../../constants/Colors";

export const ButtonWrapper = styled.button`
  background: linear-gradient(to right, ${Colors.pink}, ${Colors.purple});
  width: 172px;
  height: 53px;
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 4px;
`;
