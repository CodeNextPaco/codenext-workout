import 'bootstrap';
import './scss/index.scss';
import './scss/login.scss';
import 'firebase/auth';
import { auth } from './services/firebaseService'
import { gotoHome } from './util/redirect'

//If the user is already logged in redirect to the home page.
firebase.auth().onAuthStateChanged(function (newuser) {
    if (newuser) {
        gotoHome();
    }
});
