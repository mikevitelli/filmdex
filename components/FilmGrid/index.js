import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const FilmGrid = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <Paper>xs=12 sm=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default FilmGrid;
