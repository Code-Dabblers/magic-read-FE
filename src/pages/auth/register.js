import React from "react";
import {
  makeStyles,
  Grid,
  TextField,
  Typography,
  Container,
  CssBaseline,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  heading: {
    fontWeight: 600,
    color: "#303F9F",
  },
  submit: {
    margin: theme.spacing(3, 0, 5),
    width: "95%",
  },
  gap: {
    margin: theme.spacing(1),
  },
}));
export default function Register() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm" className={classes.wrapper}>
      <CssBaseline></CssBaseline>
      <Typography className={classes.heading} component="h3" variant="h4">
        Create your account
      </Typography>
      <form noValidate>
        {/* first container  */}
        <Grid container spacing={1} justify="center" alignItems="center">
          <Grid item sm={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm className={classes.gap}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="name"
                  label="Name"
                  type="name"
                  id="name"
                  autoComplete="current-name"
                />
              </Grid>
              <Grid item xs={12} sm className={classes.gap}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm className={classes.gap}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12} sm className={classes.gap}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="password"
                  id="confirm_password"
                  label="Confirm password"
                  name="confirm_password"
                  autoComplete="current-password"
                  autoFocus
                />
              </Grid>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </Grid>
      </form>
    </Container>
  );
}
