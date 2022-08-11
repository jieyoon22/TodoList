import React from 'react';
import { Link, Route } from 'react-router-dom'
import About from './About';
import Home from './Home';
import Member from './Member';
import Todo from './Toto';

function App() {
  return (
    <div>
      <Link to="/">로고가 여기에 들어갑니다.</Link><br />
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/Member" component={Member} />
      <Route path="/Todo" component={Todo} />
    </div>
  )

};

export default App;
