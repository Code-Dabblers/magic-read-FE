import React from "react";
import {
    TextField,
    Button,
    Typography,
    makeStyles,
    Container,
    CssBaseline,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        marginTop: theme.spacing(15),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    heading: {
        fontWeight: 600,
        color: "#3F51B5",
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export default function Login() {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.wrapper}>
                <Typography
                    className={classes.heading}
                    component="h3"
                    variant="h4"
                >
                    Login to your account
                </Typography>
                <form className={classes.form} noValidate>
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Login
                    </Button>
                </form>
            </div>
        </Container>
    );
}
