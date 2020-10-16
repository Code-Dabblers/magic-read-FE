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
	}
});

function BookCard(props) {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image="{props.thumbnail}" title="Book Thumbnail" />
				<Rating name="read-only" value="{props.rating}" readOnly size="large" />
				<CardContent className={classes.content}>
					<Typography gutterBottom variant="h5" component="h5">
						{props.book_title}
					</Typography>
					<Typography variant="subtitle1" color="textSecondary" component="p">
						{props.author}
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

export default BookCard;
