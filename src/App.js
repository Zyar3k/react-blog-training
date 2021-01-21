import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Create from "./Create";
import BlogDetails from "./components/BlogDetails";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/create' component={Create} />
            <Route path='/blogs/:id' component={BlogDetails} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
