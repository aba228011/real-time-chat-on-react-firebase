import React from 'react';
import {AppBar, Avatar, Button, Grid, Toolbar} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = React.useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <AppBar color={"default"} position="static">
            <Toolbar variant={"dense"}>
                {
                    user?.photoURL ?
                        <Grid container alignItems={"center"} justifyContent={"space-between"}>
                            <div>
                                <Avatar src={user.photoURL}/>
                                <div>{user.displayName}</div>
                            </div>
                            <div>
                                <Button onClick={() => auth.signOut()} variant={"outlined"}>Out</Button>
                            </div>
                        </Grid> :
                        <Grid container justifyContent={"flex-end"}>
                            <NavLink to={LOGIN_ROUTE}>
                                <Button variant={"outlined"}>Login</Button>
                            </NavLink>
                        </Grid>
                }
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;