import { makeStyles } from "@mui/styles";

export default makeStyles({
  container: {
    display: "flex",
    alignItems: "stretch",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9 aspect ratio
    backgroundColor: "rgba(0,0,0,0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  title: {
    padding: "0 16px",
  },
  actionArea: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px",
  },
});
