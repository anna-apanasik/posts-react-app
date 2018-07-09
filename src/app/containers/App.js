import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Redirect} from "react-router";

// components
import Header from "../components/header/Header";
import ListOfPostsContainer from "./posts/ListOfPostsContainer";

const App = () => (
    <div>
        <header>
            <Header/>
        </header>
        <div>
            <Switch>
                <Route exact path='/' render={() => (<Redirect to="/posts"/>)}/>
                <Route path='/posts' component={ListOfPostsContainer} />
            </Switch>
        </div>
    </div>
);

export default App;
