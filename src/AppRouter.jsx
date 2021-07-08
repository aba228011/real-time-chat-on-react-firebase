import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {privateRoutes, publicRoutes} from "./routes";
import {CHAT_ROUTE, LOGIN_ROUTE} from "./utils/consts";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";

const AppRouter = () => {
    const {auth} = React.useContext(Context);
    const [user] = useAuthState(auth);

    return user ?
        (
            <Switch>
                {privateRoutes.map(route => <Route key={route.path} path={route.path} component={route.Component} exact={true}/>)}
                <Redirect to={CHAT_ROUTE}/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(route => <Route key={route.path} path={route.path} component={route.Component} exact={true}/>)}
                <Redirect to={LOGIN_ROUTE}/>
            </Switch>
        )
}

export default AppRouter;