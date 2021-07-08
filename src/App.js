import './App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./AppRouter";
import React from "react";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/common/Loader";

function App() {
    const {auth} = React.useContext(Context);
    const [user, loading] = useAuthState(auth);

    if(loading){
        return <Loader/>
    }

    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
