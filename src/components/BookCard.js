import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Rating from '@material-ui/lab/Rating';
import React from 'react';

const useStyles = makeStyles({
	root: {
		maxWidth: "300px"
	},
	media: {
		height: 240
	},
	rating: {
		paddingBottom: "8px"
	},
	typography: {
		paddingLeft: 5
	}
});

export default function BookCard({ thumbnail, rating, book_title, author }) {
	const classes = useStyles();
	/* Example usage - 
	<BookCard
		book_title="Title for the book"
		author="AuthAuth"
		rating={3}
		thumbnail="https://images.unsplash.com/photo-1603005674855-b9f6334b7f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
	/> */
	return (
		<Card className={classes.root}>
			
			<CardMedia className={classes.media} image={thumbnail} title="Book Thumbnail" />
			<CardContent>
				<Rating className={classes.rating} value={rating} readOnly size="large" />
				<Typography className={classes.typography} variant="h5" component="h5">
					{book_title}
				</Typography>
				<Typography className={classes.typography} variant="subtitle1" color="textSecondary" component="p">
					{author}
				</Typography>
			</CardContent>
	
			<CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Read
					</Button>
				</CardActions>
			</CardActionArea>
		</Card>
	);
}