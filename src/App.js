import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/homePage/Home";
import Intro from "./page/introPage/Intro";
import Area from "./page/introPage/Area";
import  History  from "./page/introPage/History";
import Notices from "./page/noticesPage/Notices";
import Site from "./page/sitePage/Site";
import Food from "./page/foodPage/Food";
import Router_c from "./component/router";


export default function App() {
  return (
    <Router>
      <div className="App">
      <Router_c/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/intro" component={Intro} />
          <Route path="/notices" component={Notices} />
          <Route path="/site" component={Site} />
          <Route path="/food" component={Food} />
          <Route path ="/area" component={Area}/>
          <Route path ="/history" component={History}/>
        </Switch>
      </div>
    </Router>
  );
}
