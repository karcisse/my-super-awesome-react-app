import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from "components/home";
import DadJokes from "components/dad-jokes/dad-jokes";
import DamnSonHowYouFoundThis from "components/oh-my-god-where-you-landed/oh-my-god-where-you-landed";

export default function Routes () {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/dad-jokes" exact component={DadJokes} />
                <Route path="/oh-my-god-where-you-landed" exact component={DamnSonHowYouFoundThis} />
                <Redirect to="/oh-my-god-where-you-landed" />
            </Switch>
        </Router>
    )
}