import React, { Component } from "react";
import {
  withStyles,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Grid,
  TextField,
  Button,
  FormControl
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import ACTIONS from "../modules/action";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  }
});

class ToDO extends Component {
  state = {};

  generate = () => {
    return this.props.items.map(item => (
      <ListItem key={item.id}>
        <ListItemText primary={item.description} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={this.handleDelete}
            value={item.id}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  };

  handleSubmit = event => {
    // console.log(this.state.item);
    this.setState({ item: "" });
    if (this.state.item !== "") {
      // add the item to the store
      this.props.createItem(this.state.item);
    }
    event.preventDefault();
  };

  handleDelete = event => {
    // delete the item from the store
    this.props.deleteItem(event.target.value);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <FormControl>
              <TextField
                label="New Task"
                id="margin-dense"
                value={this.state.item}
                className={classes.textField}
                margin="dense"
                name="item"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl>
              <Button>Add</Button>
            </FormControl>
          </form>
        </div>
        <div>
          <Grid item container justify="space-evenly" alignItems="center">
            <div className={classes.demo}>
              <List dense={false}>{this.generate()}</List>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  createItem: item => dispatch(ACTIONS.createItem(item)),
  deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ToDO));
