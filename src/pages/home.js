import React from "react";
import {
  Paper,
  Button,
  Typography,
  makeStyles,
  CssBaseline,
  Container,
  Link,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    marginTop: theme.spacing(15),
  },
  paper: {
    padding: theme.spacing(3, 2, 3),
    borderRadius: "10px",
  },
  heading: {
    fontWeight: 600,
    opacity: 0.8,
    color: "#303F9F",
    padding: ".4rem 1.25rem",
  },
  subheading: {
    fontWeight: 600,
    color: "#303F9F",
    opacity: 0.5,
    padding: "0 1.25rem",
  },
  link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(2),
  },
  gap: {
    margin: theme.spacing(0, 1, 0),
  },
}));

export default function Home({ username, numStoriesRead, numStoriesWritten }) {
  const classes = useStyles();
  return (
    <Container component="article" maxWidth="xs" className={classes.wrapper}>
      <CssBaseline />
      <Paper elevation={4} className={classes.paper} square>
        <Typography component="h6" variant="h6" className={classes.heading}>
          Hello {username || `User`}
        </Typography>
        <Typography
          component="p"
          variant="subtitle2"
          className={classes.subheading}
        >
          Your stories have been read {`0` || numStoriesRead} times
        </Typography>
        <Typography
          component="p"
          variant="subtitle2"
          className={classes.subheading}
        >
          You've read over {`0` || numStoriesWritten} stories
        </Typography>
        <Link className={classes.link}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            <CreateIcon className={classes.gap}></CreateIcon>
            Start Writing
          </Button>
        </Link>
      </Paper>
    </Container>
  );
}
