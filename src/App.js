import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

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
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
