import { styled } from "@mui/system";
import { Field } from "formik";
const ContainerGenerale = styled("div")`
  display: flex;
  width: 100%;
  position: relative;
  height: auto;
`;

const ButtonContinuaReg = styled("button")`
  margin-top: 5vh;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 19px;
  gap: 10px;

  position: relative;
  width: 308px;
  height: 47px;
  color: white;
  background: #39b1d9;
  border-radius: 40px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ContainerMeta = styled("div")`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  width: 50%;
  overflow: hidden;
  display: flex;
`;

const InputSelect = styled("select")`
  border: none;
  width: 308px;
  height: 48px;

  background: rgba(226, 226, 226, 0.3);
  border-radius: 10px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const TestoLabel = styled("p")`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: left;

  /* Blue */

  color: #39b1d9;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const TitleRegistrazione = styled("p")`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 50px;
  line-height: 100%;
  text-align: left;
  /* or 50px */

  /* Black */

  color: #273237;
`;
const TestoErrore = styled("p")`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #e93323;
`;
const InputVariabile = styled(Field)`
  border: none;
  width: 308px;
  height: 48px;

  background: rgba(226, 226, 226, 0.3);
  border-radius: 10px;

  /* Inside auto layout */
`;
const ContenitoreSezione = styled("div")`
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TestoSotto = styled("p")`
  margin-top: -5vh;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  /* or 24px */

  /* Black */

  color: #273237;
  text-align: left;
`;

const LabelCheck = styled("label")`
  text-align: left;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  /* Black */

  color: #273237;
`;

export {
  LabelCheck,
  ContainerGenerale,
  ContainerMeta,
  TitleRegistrazione,
  TestoSotto,
  TestoLabel,
  InputVariabile,
  InputSelect,
  ContenitoreSezione,
  ButtonContinuaReg,
  TestoErrore,
};
