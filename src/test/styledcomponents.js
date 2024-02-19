import styled from "styled-components";

import CygreBlack from "../assets/fonts/Cygre-Black.ttf";
import CygreExtraBold from "../assets/fonts/Cygre-ExtraBoldIt.ttf";
import Gilory from "../assets/fonts/Gilroy-Medium.ttf";

export const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const ColumnDivQuest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  margin-top: 10%;
  margin-bottom: 15%;
`;
export const NamedQuest = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
`;
export const InputTask = styled.input`
  font-size: 2rem;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  cursor: pointer;
  background-color: #e145a3;
  accent-color: green;
  border-color: white;
`;
export const TextQuest = styled.a`
  color: #b4d21c;
  font-family: ${CygreExtraBold};
  font-size: 2rem;
  font-style: italic;
  font-weight: 800;
  line-height: italic;
  letter-spacing: 0.05em;
`;
export const DivQuest = styled.div`
  width: 40%;
  margin-right: 60%;
`;
export const Answer = styled.label`
  color: #696969;
  text-align: justify;
  font-family: ${Gilory};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const IconsBackRed = styled.img`
  width: 171.455px;
  height: 173px;
  top: 10%;
  left: 5%;
  z-index: 1;
  position: fixed;
`;
export const IconsBackGrenn = styled.img`
  width: 40%;
  height: 70%;
  top: 10%;
  right: 0;
  z-index: 0;
  filter: blur(40px);
  position: fixed;
`;
export const TextMain = styled.a`
  color: #4a860b;
  font-family: ${CygreBlack};
  font-size: 4em;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;
export const AboutText = styled.a`
  color: #b4d21c;
  font-family: ${CygreExtraBold};
  font-size: 2em;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  left: 20%;
  margin-right: 40%;
  margin-bottom: 10%;
`;
