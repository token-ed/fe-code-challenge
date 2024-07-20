import { About } from "@components/about/about";
import { Menu } from "@components/menu/menu";
import { Search } from "@processes/professionals";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import css from "./app.scss";

export const App: React.FC = () => (
    <Router>
        <div className={css.container}>
            <Menu />
            <Switch>
                <Route path="/" exact component={About} />
                <Route path="/search-professionals" component={Search} />
            </Switch>
        </div>
    </Router>

)