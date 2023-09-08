import './styles.css';
import React, { Fragment, useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    border: '3px solid black',
    backgroundColor: '#A0C3CC',
    borderRadius: '15px',
    margin: 'auto',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    paddingTop: '8px',
    overflow: 'hidden', // Hide any content that overflows the container
    transition: 'max-height 1.3s ease', // Add a transition for max-height
    maxHeight: '150px',
    '&:hover': {
      maxHeight: '300px',
    },
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transformOrigin: 'center', // Set the transformation origin to the center
    transition: 'transform 0.3s ease',
  },
  cardContentHovered: {
    transform: 'scale(1.05)', // Scale up the content on hover
  },
  iconButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0',
    paddingTop: '11px',
    paddingLeft: '11px',
    '&:hover': {
      backgroundColor: '#A0C3CC',
    },
  },
  icon: {
    transform: 'scale(1.3)',
    color: 'black',
  },
  icons: {
    transform: 'scale(2)',
    color: 'black',
    '&:hover': {
      color: 'red',
    },
  },
}));

export default function HomeIcons(props) {
  const [hoverRef, isHovered] = useHover();
  const [open, setOpen] = useState(false);

  function useHover() {
    const [value, setValue] = useState(false);

    const ref = useRef(null);

    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);

    useEffect(() => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    });
    return [ref, value];
  }

  function DescriptionDisplay() {
    return (
      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Ubuntu',
          color: 'black',
        }}
      >
        <h2 style={{ fontFamily: 'Ubuntu' }}>{props.homeIcons.details}</h2>
      </div>
    );
  }

  function TextDisplay() {
    return (
      <h1
        style={{
          color: 'black',
          fontSize: '30px',
          fontFamily: 'Ubuntu',
        }}
      >
        {props.homeIcons.name}
      </h1>
    );
  }

  const classes = useStyles();

  return (
    <Fragment>
      <Card className={classes.root} ref={hoverRef}>
        <CardContent className={classes.cardContent}>
          {isHovered ? null : TextDisplay()}
          <IconButton
            component={Link}
            to={props.homeIcons.to}
            className={classes.iconButton}
          >
            {isHovered ? (
              <props.homeIcons.icon className={classes.icons} />
            ) : (
              <props.homeIcons.icon
                className={classes.icon}
                sx={{ paddingBottom: '0px' }}
              />
            )}
          </IconButton>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div>{isHovered ? DescriptionDisplay() : null}</div>
        </CardActions>
      </Card>
    </Fragment>
  );
}
