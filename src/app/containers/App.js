import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Redirect} from 'react-router';
import Particles from 'react-particles-js';

import ListOfPostsContainer from './posts/ListOfPostsContainer';
import HeaderContainer from './header/HeaderContainer';
import constants from './constants';
import '../styles/AppStyles.scss';

const App = () => (
    <div>
        <header>
            <HeaderContainer/>
        </header>
        <div>
            <Particles
                params={constants.paramsParticles}
                style={constants.stylesParticles}/>
            <Switch>
                <Route exact path='/' render={() => (<Redirect to="/posts"/>)}/>
                <Route path='/posts' component={ListOfPostsContainer}/>
            </Switch>
        </div>
    </div>
);

export default App;