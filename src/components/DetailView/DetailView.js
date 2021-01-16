import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import config from "../../App.config";
import imdbNoImage from '../../public/img/imdb-no-image.jpg';

const DetailView = (props) => {

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const getModalStyle = () => {
    return {
      top: '15%',
      left: '30%',
    };
  }

  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();
  const previewImg = (!props.item.poster_path) ? imdbNoImage : `${config.PREVIEW_URL}${props.item.poster_path}`;

  return (
    <div className={classes.paper} style={modalStyle} >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.item.title}
            height="140"
            image={previewImg}
            title={props.item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.item.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={props.closeModalFn}>
            Close
        </Button>
        </CardActions>
      </Card>
    </div>
  )
};

export default DetailView;
