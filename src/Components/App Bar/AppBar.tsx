import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  AppBarColor:{
      background: '#003A76'
  }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBarColor}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            QuizFree.Com
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
