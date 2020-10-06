import React from 'react';
import './index.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Nav from '../../components/Nav/Nav';

class Root extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}

export default Root;
