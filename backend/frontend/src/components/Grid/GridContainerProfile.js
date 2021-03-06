import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


const styles = {
  grid: {
    backgroundImage: 'url(https://html-color.org/1B245B.jpg)',
    backgroundSize: "cover"
  }
};

const useStyles = makeStyles(styles);

export default function GridContainerProfile(props) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridContainerProfile.defaultProps = {
  className: ""
};

GridContainerProfile.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
