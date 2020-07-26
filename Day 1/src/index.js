import React from "react";
import ReactDOM from "react-dom";


class Hello extends React.Component {
  constructor(props){
    super(props);
  }
  handleChange(){
    // this object
  }
  addNewName(){
     // this object 
  }
  render() {
    console.log(this.props.names);
    const names = this.props.names.map(i => {
       return <li key={i.name}>{i.name} {i.profile}</li>
    })
    return (
       <React.Fragment> 
         <input onChange={this.handleChange} type="text" name="username" />
         <button onChange={this.addNewName}>Add New Name</button>
         <ul>{names}</ul>
       </React.Fragment>
    );
  }
}


const names = [
  {
    name: 'tks',
    profile: 'JS Dev'
  },
  {
    name: 'tks1',
    profile: 'JS Dev'
  },
  {
    name: 'tks2',
    profile: 'JS Dev'
  }
]

ReactDOM.render(<Hello names={names} />, document.getElementById('app'));
