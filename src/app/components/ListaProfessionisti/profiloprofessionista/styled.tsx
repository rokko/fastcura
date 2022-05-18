import { Button } from "@mui/material";
import { styled } from "@mui/system";

const TotalContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const SecondContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
});

const AvatarStyle = styled("img")({
  height: "50px",
  width: "50px",
  borderRadius: "100%",
});

const ButtonContattaStyle = styled(Button)({
  backgroundColor: "#39B1D9",
  width: "110px",
  height: "30px",
  marginTop: "20px",
  textTransform: "none",
  borderRadius: "30px",
  textDecoration: "none",
  border: "none",
});

const TextContatta = styled("p")({
  color: "#ffffff",
  textDecoration: "none",
});

const DivCentraleStyle = styled("div")({
  marginRight: "20px",
  width: "50px",
  height: "50px",
  backgroundColor: "grey",
  borderRadius: "50%",
});

const TextNomeStyle = styled("p")({
  fontSize: "14px",
  alignSelf: "flex-start",
});

const RatingDivStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  alignItems: "center",
});
export {
  TotalContainer,
  SecondContainer,
  AvatarStyle,
  ButtonContattaStyle,
  TextContatta,
  DivCentraleStyle,
  TextNomeStyle,
  RatingDivStyle,
};
