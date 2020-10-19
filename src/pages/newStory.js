import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import AddStory from "../components/AddStory";

const NewStory = () => {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <AddStory />
        </Container>
    );
};

export default NewStory;
