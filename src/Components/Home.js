import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import nikeHeo from "./images/nikeHeo.png";
import nike from "./images/nike.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#ffd615",
    height: "100vh",
    justifyContent: "space-between",
    overflow: "auto",
  },
  heading: {
    fontSize: "4em",
    position: "relative",
    top: "120px",
    left: "60px",
  },
  image: {
    height: "700px",

    border: "none",
  },
  btn: {
    borderColor: "#ffd615",
    color: "black",
    border: "1px solid black !important",
    marginTop: "250px",
    marginLeft: "-250px",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.heading}>JUST DO IT.</h1>

        <img
          src={nike}
          alt={nike}
          height="150px"
          style={{ margin: "80px 0 0 30px", float: "left" }}
        ></img>
        <Button variant="outlined" color="primary" className={classes.btn}>
          <Link to="product" style={{ textDecoration: "none", color: "black" }}>
            BROWSE STORE
          </Link>
        </Button>
      </div>

      <img src={nikeHeo} alt={nikeHeo} className={classes.image} />
    </div>
  );
}
