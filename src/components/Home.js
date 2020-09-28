import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

import Navbar from "./Navbar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  memeCard: {
    width: "100%",
    marginBottom: theme.spacing(4),
  },
}));

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
  const classes = useStyle();

  return (
    <>
      <Navbar />
      <Grid container className={classes.root}>
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
    </>
  );
};

export default Home;
