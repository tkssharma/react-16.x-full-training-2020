import React, { Component } from "react";
import { ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostCreateComponent from './post-create';
class UserContainerComp extends Component {
    state = {
        posts: ''
    }
    componentDidMount() {
        const {userid} = this.props.match.params;
        axios.get(`http://localhost:3000/api/users/${userid}/posts`)
        .then(res => {
           this.setState({
               posts: res.data
           })
        })
    }
    render() {
        return (
            <React.Fragment>
                <ListGroup defaultActiveKey="#link1">
                  {
                      this.state.posts.map((i , index) => {
                          return (
                            <ListGroup.Item action href="#link1">
                                {i.title}
                                {i.content}
                             </ListGroup.Item>
                          )
                      })
                  }
                </ListGroup>
                <PostCreateComponent />
            </React.Fragment>
        );
    }
}

export default UserContainerComp;