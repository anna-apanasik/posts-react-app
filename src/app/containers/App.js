import React from 'react';
import {Route, Switch} from "react-router-dom";

const App = () => (
    <div>
        <header>

        </header>
        <div>
            <Switch>
                <Route exact path='/' />
            </Switch>
        </div>
    </div>
);

export default App;
