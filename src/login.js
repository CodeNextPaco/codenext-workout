import 'bootstrap';
import './scss/index.scss';
import './scss/login.scss';
import firebase from 'firebase';
import { auth } from './services/firebaseService'
import { gotoHome } from './util/redirect'
//TODO (8.1) Import the component.

//TODO (8.2) Define a function that is called after the page is loaded.
//TODO (8.3) Load the LoginButtonComponent once the page is loaded.


//If the user is already logged in redirect to the home page.
firebase.auth().onAuthStateChanged(function (newuser) {
    if (newuser) {
        gotoHome();
    }
});
