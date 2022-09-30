import { styled } from "@mui/system";

const ContainerFirstImage = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleFirstContainer = styled("p")`
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 70px;
  text-align: center;
  color: #39b1d9;
  @media (max-width: 768px) {
    font-size: 38px;
    margin-top: 5rem;
  }
`;

const Immagini = styled("img")`
  width: auto;
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const ImmagineMoney = styled("img")`
  border-radius: 10px;
  width: 300px;
  @media (max-width: 768px) {
    width: 70%;
  }
`;
const ButtonFirstContainer = styled("button")`
  display: flex;
  font-size: 22px;
  margin-top: 50px;
  margin-bottom: 41px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 19px;
  gap: 10px;
  color: white;
  width: 308px;
  height: 50px;
  border: none;
  background: #39b1d9;
  border-radius: 40px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 15px;
    width: 308px;
    height: 50px;
  }
`;

const ContainerOther = styled("div")`
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  height: 100%;
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SpanTitle = styled("span")`
  font-weight: 700;
`;

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
  color: white;
  font-weight: 400;
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 270px;
    height: 500px;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
`;

const ButtonSection = styled("button")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 19px;
  gap: 10px;
  width: 310px;
  height: 50px;
  border: none;
  background: #39b1d9;
  font-size: 22px;
  border-radius: 40px;
  color: white;
  font-weight: bold;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 13px 19px;
    gap: 10px;
    font-size: 15px;
    width: 308px;
    height: 50px;

    background: #39b1d9;
    border-radius: 40px;
  }
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

    /* Dark Grey */
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

const TextFinal = styled("p")`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  /* Black */

  color: #273237;
`;

const TitleFinal = styled("p")`
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 39px;
  text-align: center;

  /* Black */

  color: #273237;
`;
const BoxDescription2 = styled("div")`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;
const FinalButton = styled("button")`
  width: 300px;
  height: 50px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  border-radius: 20px;
  /* identical to box height */

  color: #39b1d9;
  background-color: white;
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 13px 19px;
    gap: 10px;
    width: 308px;
    height: 50px;
    background: #ffffff;
    border-radius: 40px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    color: #39b1d9;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;
export {
  ImmagineMoney,
  ContainerFirstImage,
  SpanTitle,
  ButtonFirstContainer,
  TitleFirstContainer,
  ContainerOther,
  BoxInfo,
  TitleSection,
  TextSection,
  ButtonSection,
  FinalButton,
  TextFinal,
  TitleFinal,
  Immagini,
  BoxDescription2,
};
