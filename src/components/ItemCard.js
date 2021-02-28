import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";

import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 380,
    margin: "2vw",
  },
  media: {
    height: "50vh",
    paddingTop: "56.25%", // 16:9
    objectFit: "contain",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "teal",
  },
  title: {
    fontFamily: "Prompt",
    fontWeight: "600",
  },
  content: {
    fontFamily: "Prompt",
    fontWeight: "300",
  },
  learnmore: {
    fontFamily: "Prompt",
    fontWeight: "500",
    letterSpacing: 1.5,
  },
}));

export default function ItemCard({
  logo = true,
  ava,
  title,
  subtitle,
  collapse = true,
  image,
  content,
  href,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          logo ? (
            <Avatar src={ava} />
          ) : (
            <Avatar className={classes.avatar}>{ava}</Avatar>
          )
        }
        title={
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        }
        subheader={subtitle}
      />

      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.content}
        >
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          size="small"
          color="primary"
          href={href}
          target="_blank"
          className={classes.learnmore}
        >
          Learn More
        </Button>
        {collapse && (
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        )}
      </CardActions>
      {collapse && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardMedia className={classes.media} image={image} />
        </Collapse>
      )}
    </Card>
  );
}
