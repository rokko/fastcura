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
`;
const ButtonFirstContainer = styled("button")`
  display: flex;
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
  font-weight: 500;
`;

const ContainerOther = styled("div")`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
`;

const SpanTitle = styled("span")`
  font-weight: 700;
`;

const BoxInfo = styled("div")`
  background-color: white;
  max-width: 965px;
  height: 367px;
  display: flex;
  padding: 2rem;
  box-shadow: 0px 3px 34px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  align-items: center;
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
export {
  ContainerFirstImage,
  SpanTitle,
  ButtonFirstContainer,
  TitleFirstContainer,
  ContainerOther,
  BoxInfo,
  TitleSection,
  TextSection,
};
