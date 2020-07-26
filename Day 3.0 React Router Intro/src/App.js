import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import HomeComponent from './home';
import TeamComponent from './team';
import TeamChildComponent from './team-child';
import Login from './login';
import HeaderComp from './header';
import PrivateRoute from './private';

const Item = (props) => {
  console.log(props);
  return <h1>Hello world</h1>
}
const App = (props) => {
  const data = { name: 'tks'}
  return (
    <Router>
      <>
        <HeaderComp></HeaderComp>
        <Switch>
          <Route exact path="/" component={HomeComponent}></Route>
          <Route exact path='/teams' component={TeamComponent}></Route>
          <Route exact path='/teams/:teamname' component={TeamChildComponent}></Route>
          <Route exact path="/items" render = {(props) => <Item {...props} data={data} />}/>
          <Route path="/login" component={Login}/>}/>
          <PrivateRoute 
             path="/admin" 
             Component={HomeComponent} 
             isAuthenticated={false}
          />
          <Route component={() => 'NOT FOUND'}></Route>
        </Switch>
      </>
    </Router>
  )
}
export default App;

