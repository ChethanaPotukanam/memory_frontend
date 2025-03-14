import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  appBarSearch:{
    borderRadius: 4,
    marginBottom: "1.4rem",
    display: "flex",
    padding: "16px",
    gap: "1rem",
  },
  pagination:{
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px", 
  },
  gridContainer:{
    [theme.breakpoints.down("xs")]:{
      flexDirection: "column-reverse",
    },
  },
}));
