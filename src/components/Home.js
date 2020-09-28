import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  IconButton,
  Grid,
  CircularProgress,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

import Navbar from "./Navbar";

const useStyle = makeStyles((props) => {
  return {
    memes: {
      marginTop: props.spacing(4),
    },
    memeCard: {
      width: "100%",
      marginBottom: props.spacing(4),
    },
    spinnerWrap: {
      position: "relative",
    },
    spinner: {
      marginLeft: "50%",
    },
  };
});

const MEME_DATA = [
  {
    name: "It wasnt me",
    url:
      "https://memefactorynew.s3.ap-northeast-2.amazonaws.com/user/It+wasnt+me.jpg",
    width: 200,
    height: 200,
  },
  {
    name: "Forever alone computer",
    url:
      "https://memefactorynew.s3.ap-northeast-2.amazonaws.com/user/forever_alone_computer.jpg",
    width: 200,
    height: 200,
  },
  {
    name: "Freddie girl",
    url:
      "https://memefactorynew.s3.ap-northeast-2.amazonaws.com/user/freddie_girl.jpg",
    width: 200,
    height: 200,
  },
];

const Home = () => {
  const [progress, setProgress] = useState(0);

  const classes = useStyle(progress);

  const onScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.log("you're at the bottom of the page");
      //show loading spinner and make fetch request to api
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar />

      <Grid container className={classes.memes}>
        <Grid item xs={1} sm={3} />

        <Grid item container xs={10} sm={6}>
          {MEME_DATA.map((item, idx) => (
            <Card className={classes.memeCard} key={idx}>
              <CardHeader
                title={item.name}
                subheader="September 14, 2020"
                // avatar={<AccountCircleIcon fontSize="large" />}
              />

              <img src={item.url} alt="" style={{ width: "100%" }} />

              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </Grid>

        <Grid item xs={1} sm={3} />
      </Grid>

      <Box className={classes.spinnerWrap}>
        <CircularProgress className={classes.spinner} value={100} />
      </Box>
    </>
  );
};

export default Home;
