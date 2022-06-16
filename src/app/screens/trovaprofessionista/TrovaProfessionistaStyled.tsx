import { styled } from "@mui/system";

const BoxInfo = styled("div")`
  max-width: 965px;
  height: 367px;
  display: flex;
  padding: 2rem;
  box-shadow: 0px 3px 34px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 340px;
  }
`;

const BoxInfo2 = styled("div")`
  width: 965px;
  height: 367px;
  display: flex;
  padding: 2rem;
  box-shadow: 0px 3px 34px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 340px;
  }
`;

const CercaContainter = styled("div")`
  height: 624px;
  max-height: 624px;
  min-height: 624px;
  background-color: #39b1d9;
  padding: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContainerTrova = styled("div")`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContainerProfessionista = styled("div")`
  height: auto;
  width: 100%;
`;

const Left = styled("div")`
  width: 50%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Right = styled("div")`
  width: 50%;
`;

const TitleSection = styled("p")`
  color: #273237;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
`;
const TextSection = styled("p")`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #a6a6a6;
`;
const TitleTop = styled("p")`
  font-weight: 400;
  font-size: 60px;
  line-height: 70px;
  color: #ffffff;
  text-align: left;
`;

const SpanTop = styled(`span`)`
  font-weight: 700;
`;

const BoxDescription = styled("div")`
  width: 50%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const ContainerTitleProfessionista = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 7rem;
  gap: 40rem;
  justify-content: center;
`;

const TitleOne = styled("p")`
  max-width: 300px;
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 50px;
  text-align: left;
  /* Black */

  color: #273237;
`;

const ButtonTwo = styled("button")`
  width: 237px;
  height: 21px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  background-color: #ffffff;
  border-radius: 40px;
  color: #39b1d9;
  flex: none;
  order: 0;
  flex-grow: 0;
  border: none;
`;

export {
  BoxInfo,
  ContainerTrova,
  CercaContainter,
  ContainerProfessionista,
  Left,
  Right,
  TitleTop,
  SpanTop,
  TitleSection,
  TextSection,
  BoxDescription,
  ContainerTitleProfessionista,
  TitleOne,
  ButtonTwo,
  BoxInfo2,
};
