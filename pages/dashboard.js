import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
// import FilmCard from "../components/FilmCard";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/client";
import Login from "./auth/login";
import Home from "./index";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  galleryTile: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(8),
    height: "30vh",
    justifyContent: "center",
  },
  panel: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    height: "60vh",
    margin: "5%",
  },
  userPanel: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(8),
    height: "20vh",
    margin: "5%",
  },
  userPanelGrid: {},
  filmGalleryCard: {
    margin: "5%",
    padding: "2rem",
    justifyContent: "center",
    textAlign: "center",
    color: "inherit",
    textDecoration: "none",
    borderRadius: "10px",
  },
  title: { justifyContent: "center" },
}));

export async function getStaticProps() {
  const res = await fetch(`https://filmapi.vercel.app/api/films`);

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { films: JSON.parse(JSON.stringify(data)) },
  };
}

export default function Dashboard({ films }) {
  const [session, loading] = useSession();
  const [content, setContent] = useState();
  const classes = useStyles();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/userData");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return <Home />;
  }

  function getTimestamp(x) {
    let timeStamp = x;
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    let newTime = timeStamp.toLocaleDateString("en-US", options);
    return newTime;
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Paper className={classes.userPanel}>
            <h3>User Image Area</h3>
            <h3>{content}</h3>
          </Paper>
          <Paper className={classes.panel}>
            <h3>User Information Panel</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          {films.map((film, x) => (
            <Paper className={classes.filmGalleryCard} key={film._id} {...film}>
              <h3>Film Gallery Tile #{x + 1}</h3>
              <h4>{film.name}</h4>
              <h4>{film.brand}</h4>
              <h4>Created at: {getTimestamp(new Date())}</h4>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
