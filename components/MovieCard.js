import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from "next/image";
import Link from "next/link";
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const useStyles = makeStyles({
  root: {
    maxWidth: 310,
    transition: "transform 0.15s ease-in-out"
  },
  cardHovered: {
    transform: "scale3d(1.15, 1.15, 1)"
  }
});

export default function MovieCard({ movie }) {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();
  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  

  return (
    <Card sx={{ maxWidth: 200, maxHeight: 300, mb:3 ,mr:2 }} className={classes.root} 
    classes={{root: state.raised ? classes.cardHovered : ""}}
    onMouseOver={()=>setState({ raised: true, shadow:3})} 
    onMouseOut={()=>setState({ raised:false, shadow:1 })} 
    raised={state.raised} zdepth={state.shadow}>
      <CardActionArea>
      <Link href={`/movie/${movie.id}`} passHref>
        <CardMedia
          component="img"
          height="300"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        </Link>
        {/* <CardActions sx={{ mb: 5 }} disableSpacing> */}
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton> */}
          {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
        {/* </CardActions> */}
          {/* <CardContent>
            <Typography paragraph>
                {movie.overview}
            </Typography>
            <Typography>
                Genres:
            </Typography>
            <Typography>
                Release Date:
            </Typography>
          </CardContent> */}
        </CardActionArea>
      </Card>
  );
}