import React, {Component} from "react";
import {
  TextField,
  Button,
  Typography,
  makeStyles,
  Container,
  CssBaseline,
  Input,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  Chip,
  useTheme,
  Radio,
  RadioGroup,
  FormControlLabel,
  
} from "@material-ui/core";
import Dial from './AddImg'


import Autocomplete from '@material-ui/lab/Autocomplete';
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
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
    root: {
        width: 500,
        '& > * + *': {
          marginTop: theme.spacing(3),
        },
      },
      formControll: {
        margin: theme.spacing(3)
      },
      button: {
        margin: theme.spacing(1, 1, 0, 0)
      }
  }));
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  

const names = [
    'Thiller',
    'Horror',
    'Mystery',
    'Bildungsroman',
    'Historical',
    'Fantacy',
    'Romance',
    'Western',
    'Fiction',
    'Science Fiction',
    'Dystopian',
    'Magical Realism',
    'Realist Literature'

  ];
  

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }


export default function NewStory() {

    const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const [value, setValue] = React.useState("");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
   
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.wrapper}>
        <Typography className={classes.heading} component="h3" 

variant="h4">
          Add story info
        </Typography>
        <form className={classes.form} noValidate>
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
            color='primary'
          />
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
           <FormControl className={classes.formControl}>
        <InputLabel id="genre-label">Genre</InputLabel>
        <Select
          labelId="genre-label"
          id="genre"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, 

personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          
      <Autocomplete
        multiple
        id="tags-filled"
        options={names.map((option) => option)}
        
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index 

})} />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Add Tags" 

placeholder="Tags" />
        )}
      />

<Dial />

 
<form>
      <FormControl
        component="fieldset"
        className={classes.formControll}
      >
        <RadioGroup 
        style={{display: 'flex',
            flexWrap : 'nowrap',
            flexDirection: 'row',}}
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            NewStory
          </Button>
        </form>
      </div>
    </Container>
  );
}
