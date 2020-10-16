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
		maxWidth: 345
	},
	media: {
		height: 240
	},
	rating: {
		paddingLeft: 15
	},
	typography: {
		paddingLeft: 5
	}
});

export default function BookCard({ thumbnail, rating, book_title, author }) {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={thumbnail} title="Book Thumbnail" />
				<Rating className={classes.rating} name="read-only" value={rating} readOnly size="large" />
				<CardContent>
					<Typography className={classes.typography} gutterBottom variant="h5" component="h5">
						{book_title}
					</Typography>
					<Typography className={classes.typography} variant="subtitle1" color="textSecondary" component="p">
						{author}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Read
				</Button>
			</CardActions>
		</Card>
	);
}