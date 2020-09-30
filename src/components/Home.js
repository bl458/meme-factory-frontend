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
import { fetchImages } from "../helper/apiCall";

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

const Home = () => {
  // States
  const [progress, setProgress] = useState(0);
  const [memeData, setMemeData] = useState([]);
  // seed for rand(seed) in backend's mysql query. Will give error if not integer
  const [seed, setSeed] = useState(Math.floor(Math.random() * 9999));
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Style
  const classes = useStyle(progress);

  // Functions
  const stripExt = (fileName) => {
    const dotIdx = fileName.lastIndexOf(".");

    return fileName.substring(0, dotIdx);
  };

  const getDateStr = (itemDate) => {
    if (!itemDate) return;

    return new Date(itemDate).toISOString().substring(0, 10);
  };

  const fetchData = async () => {
    setIsLoading(true);

    setMemeData(await fetchImages(seed, pageNo));
    setPageNo(pageNo + 1);

    setIsLoading(false);
  };

  const onScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.log("you're at the bottom of the page");
      fetchData();
    }
  };

  // Hooks
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    fetchData();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar />

      <Grid container className={classes.memes}>
        <Grid item xs={1} sm={3} />

        <Grid item container xs={10} sm={6}>
          {memeData.map((item, idx) => (
            <Card className={classes.memeCard} key={idx}>
              <CardHeader
                title={stripExt(item.name)}
                subheader={getDateStr(item.createdAt)}
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

      {isLoading && (
        <Box className={classes.spinnerWrap}>
          <CircularProgress className={classes.spinner} value={100} />
        </Box>
      )}
    </>
  );
};

export default Home;
