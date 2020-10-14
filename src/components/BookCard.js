import { Card, CardMedia } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import React from "react";

const useStyles = makeStyles({
	root: {
		maxWidth: 210
	},
	media: {
		height: 170
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
					{props.book_title}
					Title
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{props.author}
					Author
				</Typography>
			</CardContent>
		</Card>
	);
}

export default BookCard;
