import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding:theme.spacing(1),
    textAlign:'center',
    color:theme.palette.text.secondary,
  }
}));

function App() {
  
  const classes = useStyles();

  function FormRow(props){
    return(
      <React.Fragment>
         <Grid item  xs={4}>
            <Paper className={classes.paper}>{props.name}</Paper>
         </Grid>
         <Grid item xs={4}>
            <Paper className={classes.paper}>{props.firstName}</Paper>
         </Grid>
         <Grid item xs={4}>
            <Paper className={classes.paper}>{props.lastName}</Paper>
         </Grid>
      </React.Fragment>
    )
  }
  function formatDate(date){
    return date.toLocaleDateString();
  }
  function Comment(props){
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    )
  }
  const comment = {
    date:new Date(),
    text: 'I hope you enjoy learning React',
    author:{
      name:'Hello Kitty',
      avatarUrl:'https://placekitten.com/g/64/64',
    }
  }
  const numbers = [1,2,3,4,8];
  const listItems = numbers.map((number)=>
    <li>{number}</li>
  );
  return (
    <div className={classes.root}>
      <Comment date={comment.date} text={comment.text} author={comment.author} />
      <ul>
        {listItems}
      </ul>
      <Grid container item xs={12} spacing={3}>
        <FormRow name="Sara" firstName="sa" lastName="ra" />
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <FormRow name="Zoe" firstName="aa" lastName="ab" />
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <FormRow name="wang" firstName="ab" lastName="ac" />
      </Grid>
    </div>
  );
}

export default App;
