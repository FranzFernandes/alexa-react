import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1,
        width:  '100%',
    },
    title: {
        textAlign: 'center'
    },
    text: {
        textAlign: 'center',

    }
});

class Home extends React.Component {
  render() {
      const {classes} = this.props;
    return (
      <div className={classes.root}>
          <Typography type="Title">
          <div className={classes.title}>
                <h1 class="text-primary text-center">Dit is mijn pagina</h1>
          </div>
          </Typography>
          <Typography type="body1">
          <div className={classes.text}>
          Projecten waar ik op dit moment aan werk/aan moet werken:
            <ul>
                <li>Deze website</li>
                <li>Android app (Link hiernaartoe)</li>
                <li>Misschien nog meer?</li>
            </ul>
          </div>
          </Typography>
      </div>
    )
  };
}
export default withStyles(styles)(Home);