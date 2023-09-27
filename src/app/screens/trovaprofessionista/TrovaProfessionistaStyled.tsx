import { styled } from "@mui/system";

const BoxInfo = styled("div")`
  background-color: white;
  width: 965px;
  max-width: 965px;
  height: 367px;
  display: flex;
  padding: 2rem;
  box-shadow: 0px 3px 34px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 270px;
    height: 367px;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
`;

const NewBox = styled("div")`
  height: 367px;
  width: 337px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 3px 34px 0px rgba(0, 0, 0, 0.08);
  display: inline-flex;
  padding: 37px 15px 19px 15px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 6px;
`;

const BoxInfo2 = styled("div")`
  width: 965px;
  height: 367px;
  display: flex;
  background-color: white;
  box-shadow: 0px 3px 34px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 327px;
    height: 367px;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
`;

const CercaContainter = styled("div")`
  height: 624px;
  max-height: 624px;
  min-height: 624px;
  background-color: #39b1d9;
  position: relative;
  padding: 3rem;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-content: center;
    align-items: center;
    margin-top: 5rem;
  }
`;

const Immagini = styled("img")`
  width: auto;
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const ContainerTrova = styled("div")`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  background-color: #f6f6f6;
  @media (max-width: 768px) {
    padding: 19px;
    flex-direction: column;
  }
`;

const ContainerProfessionista = styled("div")`
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
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
  @media (max-width: 768px) {
    height: 27px;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 23px;
    line-height: 27px;
    /* identical to box height */

    text-align: center;

    /* Black */

    color: #273237;

    /* Inside auto layout */
  }
`;
const TextSection = styled("p")`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #a6a6a6;
  @media (max-width: 768px) {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;

    /* Dark Grey */

    color: #a6a6a6;
  }
`;
const TitleTop = styled("p")`
  font-weight: 400;
  font-size: 60px;
  line-height: 70px;
  color: #ffffff;
  text-align: left;
  @media (max-width: 768px) {
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 41px;

    color: #ffffff;
  }
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
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

const ContainerTitleProfessionista = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 7rem;
  gap: 20rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;
const NewTesto = styled("p")`
  font-family: Roboto;
  font-size: 23px;
  color: black;
  font-weight: 900;
`;

const NewTestoUnder = styled("p")`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #a6a6a6;
  font-weight: 400;
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
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const ButtonTwo = styled("button")`
  width: 310px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 19px;
  gap: 10px;
  background: #ffffff;
  border-radius: 40px;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: #39b1d9;
  border: none;

  /* Inside auto layout */

  @media (max-width: 768px) {
    height: 50px;
  }
`;

export {
  Immagini,
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
  NewBox,
  NewTesto,
  NewTestoUnder,
};
