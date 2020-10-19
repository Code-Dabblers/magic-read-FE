import React from "react";
import {
    TextField,
    Button,
    Typography,
    makeStyles,
    FormControl,
    Chip,
    Radio,
    RadioGroup,
    FormControlLabel,
} from "@material-ui/core";
import Dial from "./AddImg";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        marginTop: theme.spacing(7),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    heading: {
        fontWeight: 600,
        color: "#303F9F",
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: "flex",
        flexWrap: "wrap",
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
    root: {
        width: 500,
        "& > * + *": {
            marginTop: theme.spacing(3),
        },
    },
    formControll: {
        margin: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },
    genre: {
        marginBottom: theme.spacing(1),
    },
}));

const names = [
    "Thiller",
    "Horror",
    "Mystery",
    "Bildungsroman",
    "Historical",
    "Fantacy",
    "Romance",
    "Western",
    "Fiction",
    "Science Fiction",
    "Dystopian",
    "Magical Realism",
    "Realist Literature",
];

const AddStory = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState("");

    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };

    const BookTitle = () => (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="BookTitle"
            label="Book Title"
            name="Book Title"
            autoComplete="Book Title"
            autoFocus
            color="primary"
        />
    );

    const BookDescription = () => (
        <TextField
            variant="outlined"
            multiline
            margin="normal"
            required
            rows="3"
            fullWidth
            id="BookDescription"
            label="Book Description"
            name="Book Description"
            autoComplete="Book Description"
            autoFocus
        />
    );

    const Genre = () => (
        <Autocomplete
            className={classes.genre}
            multiple
            id="genre-filled"
            options={names.map((option) => option)}
            freeSolo
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip
                        variant="outlined"
                        label={option}
                        {...getTagProps({ index })}
                    />
                ))
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label="Add Categories"
                    placeholder="Categories"
                />
            )}
        />
    );

    const Tags = () => (
        <Autocomplete
            multiple
            id="tags-filled"
            options={names.map((option) => option)}
            freeSolo
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip
                        variant="outlined"
                        label={option}
                        {...getTagProps({ index })}
                    />
                ))
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label="Add Tags"
                    placeholder="Tags"
                />
            )}
        />
    );

    const UploadOptions = () => (
        <form>
            <FormControl component="fieldset" className={classes.formControll}>
                <RadioGroup
                    style={{
                        display: "flex",
                        flexWrap: "nowrap",
                        flexDirection: "row",
                    }}
                    aria-label="quiz"
                    name="quiz"
                    value={value}
                    onChange={handleRadioChange}
                >
                    <FormControlLabel
                        value="best"
                        control={<Radio />}
                        label="Upload Publicly"
                    />
                    <FormControlLabel
                        value="worst"
                        control={<Radio />}
                        label="Upload Privately"
                    />
                </RadioGroup>
            </FormControl>
        </form>
    );

    const UploadButton = () => (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
        >
            NewStory
        </Button>
    );

    return (
        <div className={classes.wrapper}>
            <Typography className={classes.heading} component="h3" variant="h4">
                Add story info
            </Typography>
            <form className={classes.form} noValidate>
                {BookTitle()}
                {BookDescription()}
                {Genre()}
                {Tags()}
                <Dial />
                {UploadOptions()}
                {UploadButton()}
            </form>
        </div>
    );
};

export default AddStory;
