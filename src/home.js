import 'bootstrap';
import './scss/index.scss';
import './scss/login.scss';
import firebase from 'firebase';
import { auth } from './services/firebaseService'
import { gotoIndex } from './util/redirect'

// Make the page visible only when the user is logged in.
firebase.auth().onAuthStateChanged(function (newuser) {
    if (newuser) {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(function () {
                return;
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.error(errorCode, errorMessage);
            });


        const logOutBtn = document.getElementById('btnLogOut');
        logOutBtn.addEventListener('click', event => {
            firebase.auth().signOut().then(function () {
                gotoIndex();
            }).catch(function (error) {
                console.error("Unable to logout.", error);
            });
        });

    } else {
        gotoIndex();
    }
});
