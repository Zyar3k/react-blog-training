import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Create from "./Create";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/create' component={Create} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
