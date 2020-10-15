import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import React from "react";

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	},
	media: {
		height: 140
	}
});

function BookCard(props) {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image="{props.book_title}" title="Book Thumbnail" />
			</CardActionArea>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{/* {props.book_title} */}
					Title
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{/* {props.author} */}
					Author
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="medium" color="primary">Read</Button>
			</CardActions>
		</Card>
	);
}

export default BookCard;
