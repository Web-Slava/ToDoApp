import  React  from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import  Avatar  from '@material-ui/core/Avatar';
import avatar from './../assets/avatar.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    sizeAvatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
  }));

function HeaderComponent() {
    const classes = useStyles();

    return(
        <AppBar position="relative">
            <Grid container>
                <Grid item
                      xs={6}
                >
                    <div style={{
                            width: '450px',
                            margin: '30px auto'
                        }}
                    >
                        <Typography variant="h2">
                            ToDo Aplication
                        </Typography>
                        <Typography variant="subtitle2"
                                    align="right"
                        >
                            by myself:)
                        </Typography>
                    </div>
                </Grid>
                <Grid item
                      xs={6}
                      container
                      justify="center"
                      alignItems="center"
                >
                    <Avatar 
                        alt="Remy Sharp" 
                        src={avatar}
                        className={classes.sizeAvatar}
                    />
                </Grid>
            </Grid>


        </AppBar>
    );

}

export default HeaderComponent;