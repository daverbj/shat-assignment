import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";
import Login from "./components/Login";
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/login" render={(props) => <Login {...props} title="Navigate elsewhere" />} />
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
