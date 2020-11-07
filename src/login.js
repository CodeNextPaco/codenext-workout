import 'bootstrap';
import './scss/index.scss';
import './scss/login.scss';
import { auth } from './services/firebaseService'
import { gotoHome } from './util/redirect'

//If the user is already logged in redirect to the home page.
auth().onAuthStateChanged(function (newuser) {
    if (newuser) {
        gotoHome();
    }
});
