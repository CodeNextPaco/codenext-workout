// Add several imports
import 'bootstrap';
import './scss/index.scss';
import './scss/login.scss';
import firebase from 'firebase';
import { auth } from './services/firebaseService'
import { gotoHome } from './util/redirect'
import { LoginButtonsComponent } from './components/login_buttons/loginButtons.component';

// Define a function that is execute right after the page is loaded.
window.onload = function () {
    LoginButtonsComponent.init();
};

//If the user is already logged in redirect to the home page.
// See https://firebase.google.com/docs/auth/web/manage-users
firebase.auth().onAuthStateChanged(function (newuser) {
    // If the user exist, meaning if the user is loged in.
    if (newuser) {
        // Redirect to the home page
        gotoHome();
    }
});
