import { useContext } from "react";
import categoryProvider from "../contextAPi/context.category";
import "./categoryPage.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    minWidth: 175,
    marginTop: "15px",
    boxShadow: '10px 10px 5px grey',
    border: '1px solid #018CFF'
  },
  ButtonColor:{
    color: '#005194'
  }
});
const CategoryPage = () => {
  const classes = useStyles();

  let QuizList: string[] = useContext(categoryProvider);
  return (
    <div className="category-main-container">
      <h1 style={{
        textAlign: 'center',
        fontFamily: 'cursive',
        color: 'lightcoral'
      }}>Select Category</h1>
      {QuizList.map((ele: string, ind: number) => {
        return (
          <Card className={classes.root} key={ind}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {ele}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/category/${ele}`}><Button className={classes.ButtonColor} size="small">Start Quiz</Button></Link>
              
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default CategoryPage;
