import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Redirect} from "react-router";

// components
import ListOfPostsContainer from "./posts/ListOfPostsContainer";
import HeaderContainer from "./header/HeaderContainer";

const App = () => (
    <div>
        <header>
           <HeaderContainer />
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
