// Add several imports
import 'bootstrap';
import './scss/index.scss';
import './scss/login.scss';
import firebase from 'firebase';
import { auth } from './services/firebaseService'
import { gotoHome } from './util/redirect'
import { LoginButtonComponent } from './components/login_button/loginButton.component';

// Define a function that is execute right after the page is loaded.
window.onload = function () {
    // Define a Firebase Provider that will be used to sign in.
    let provider = new auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const model = {
        id: 'googleBtn',
        image: 'fa-google',
        provider: provider
    };
    // Grab from the login.html the element with id loginButtons
    const divElement = document.getElementById("loginButtons");
    // Add the following HTML string to the loginButtons HTML element.
    divElement.innerHTML = LoginButtonComponent.render(model);
    // Once the new HTML content is part of the page add the required listeners.
    LoginButtonComponent.afterRender(model);
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
