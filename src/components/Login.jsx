import React from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";
import {Context} from "../index";
import firebase from "firebase/app";

const Login = () => {

    const {auth} = React.useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
    }
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justifyContent={"center"}
            >
                <Grid container style={{
                    width: 400,
                    background: "wheat"
                    }}
                      alignItems={"center"}
                      direction={"column"}
                >
                    <Box p={8}>
                        <Button onClick={login} variant={"outlined"}>
                            Login with Google
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Login;