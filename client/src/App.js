import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      {/* App Header */}
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.headerContainer}>
          <Typography variant="h4" align="left" className={classes.headerText}>
            Your Own Time Capsule
          </Typography>
          <img className={classes.image} src={memories} alt="icon" height="60" />
        </div>
        <Typography variant="subtitle1" align="center" className={classes.subHeaderText}>
          Preserve memories, messages, and moments for the future.
        </Typography>
      </AppBar>

      {/* Main Content */}
      <Container className="main-content">
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <div className={classes.postCard}>
              <Posts setCurrentId={setCurrentId} />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.formCard}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default App;
