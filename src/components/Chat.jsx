import React from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, TextField} from "@material-ui/core";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./common/Loader";
import firebase from "firebase/app";

const Chat = () => {
    const {auth, firestore} = React.useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = React.useState("")
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue("")
    }
    const keyPress = (e) => {
        if (e.keyCode === 13) {
            firestore.collection('messages').add({
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                text: value,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            setValue("")
        }
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50, marginTop: 15}}
                  justifyContent={"center"}>
                <div style={{
                    width: '80%',
                    height: '70vh',
                    border: '1px solid gray',
                    overflowY: "auto"
                }}>
                    {
                        messages.map(message =>
                            <div style={{
                                margin: 20,
                                border: user.uid === message.uid ? "1px solid black" : "1px solid yellow",
                                marginLeft: user.uid === message.uid ? "auto" : "10px",
                                padding: 10,
                                width: "fit-content"
                            }}
                                 key={message.createdAt}
                            >
                                <Grid container alignItems={"center"}>
                                    <Avatar src={message.photoURL}/>
                                    <div style={{marginLeft: 5, color: "green"}}><b>{message.displayName}</b></div>
                                </Grid>
                                <div style={{marginTop: 10}}>{message.text}</div>
                            </div>)
                    }


                </div>
                <Grid container style={{width: "80%"}} justifyContent={"space-between"}>
                    <TextField
                        variant={"outlined"}
                        style={{width: "80%"}}
                        placeholder={"Your message after press Enter"}
                        size={"medium"}
                        onChange={e => setValue(e.target.value)}
                        value={value}
                        onKeyDown={keyPress}
                    />
                    <Button
                        variant={"outlined"}
                        style={{width: "15%", height: '40px'}}
                        color={"default"}
                        onClick={sendMessage}
                    >Send</Button>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Chat;