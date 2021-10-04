import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Tutorials from "./components/Tutorials/Tutorials";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Exercises from "./components/Exercises/Exercises";
import NotFound from "./components/NotFound/NotFound";
import Reference from "./components/Reference/Reference";
import TutorialDetails from "./components/TutorialDetails/TutorialDetails";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/tutorials">
          <Tutorials></Tutorials>
        </Route>
        <Route path="/exercises">
          <Exercises></Exercises>
        </Route>
        <Route path="/reference">
          <Reference></Reference>
        </Route>
        <Route path="/tutorial/:tutorialId">
          <TutorialDetails></TutorialDetails>
        </Route>
        <Route path="/home/:tutorialId">
          <TutorialDetails></TutorialDetails>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
