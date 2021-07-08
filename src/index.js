import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';



firebase.initializeApp({
    apiKey: "AIzaSyANMkeV196q-XNfV8zxs382wh09qGfG1pc",
    authDomain: "real-time-chat-on-react.firebaseapp.com",
    projectId: "real-time-chat-on-react",
    storageBucket: "real-time-chat-on-react.appspot.com",
    messagingSenderId: "711584355310",
    appId: "1:711584355310:web:41baf230682c12bdf434ff",
    measurementId: "G-C6WN7CBFDY"
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();


ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value={{
          firebase, auth, firestore
      }}>
          <App />
      </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
