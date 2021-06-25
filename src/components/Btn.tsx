import React from 'react';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

interface BtnProps {
  text?: string;
  className?: string;
  isIcon?: boolean;
  icon?: {};
  simpleBtn?: boolean;
  leftIconTextBtn?: boolean;
  rightIconTextBtn?: boolean;
  classes?: {};
}

class Btn extends React.Component<BtnProps> {
  render() {
    const simpleBtn = this.props.simpleBtn;
    const iconBtn = this.props.isIcon;
    const leftIconTextBtn = this.props.leftIconTextBtn;
    const rightIconTextBtn = this.props.rightIconTextBtn;

    let button;

    if (simpleBtn) {
      button = (
        <Button  variant="contained" classes={this.props.classes}>
          {this.props.text}
        </Button>
      );
    }

    if (iconBtn) {
      button = (
        <IconButton classes={this.props.classes}>
          {this.props.icon}
        </IconButton>
      );
    }

    if (leftIconTextBtn) {
      button = (
        <Button
          variant="contained"
          startIcon={this.props.icon}
          classes={this.props.classes}
        >
          {this.props.text}
        </Button>
      );
    }

    if (rightIconTextBtn) {
      button = (
        <Button
          variant="contained"
          endIcon={this.props.icon}
          classes={this.props.classes}
        >
          {this.props.text}
        </Button>
      );
    }

    return <>{button}</>;
  }
}

export default Btn;
