/* eslint-disable no-empty-pattern */
import React from "react";
import Btn from "./components/Btn";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import Demo from "./Demo";

const btnText = "Send";

const useStyles = makeStyles({
  root: {
    width: "100px",
    height: "40px",
    borderRadius: "20px",
    color: "#fff",
    fontSize: "14px",
    fontWeight: 500,
    border: "none",
    backgroundColor: "#669ae8",
    "&:hover": {
      background: "#597eb6",
    },
  },
  rootTwo: {
    width: "100px",
    height: "40px",
    borderRadius: "20px",
    color: "#fff",
    fontSize: "14px",
    fontWeight: 500,
    border: "none",
    backgroundColor: "#122",
    "&:hover": {
      background: "#1098",
    },
  },
  skyBlueColor: {
    color: "#669ae8",
  },
  label: {
    textTransform: "capitalize",
  },
});

const handleClick = () => {
  alert("Clicked!!!!!!!!!!!")
};


export const Home: React.FC = ({}) => {
  const classes = useStyles();

  return (
    <>
      <div>
        <div>
          <h1>cropper Js</h1>
          <Demo />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <h1>Colorful Custom Button Components</h1>
        <hr />
        <h4>Button With Icon</h4>
        <Btn
          classes={{
            root: classes.skyBlueColor,
          }}
          isIcon={true}
          icon={<PlayCircleFilledIcon fontSize="large" />}
        />
        <hr />
        <h4>Normal Button</h4>
        <Btn
          text={btnText}
          simpleBtn={true}
          classes={{
            root: classes.root,
            label: classes.label,
          }}
        />
        <hr />
        <h4>Left Icon & Text Button</h4>
        <Btn
          text={btnText}
          classes={{
            root: classes.rootTwo,
            label: classes.label,
          }}
          leftIconTextBtn={true}
          icon={<DeleteIcon />}
        />
        <hr />
        <h4>Right Icon & Text Button</h4>
        <Btn
          text={btnText}
          classes={{
            root: classes.root,
            label: classes.label,
          }}
          rightIconTextBtn={true}
          icon={<DeleteIcon />}
        />
      </div>
    </>
  );
};
