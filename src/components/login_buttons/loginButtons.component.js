import { auth } from './../../services/firebaseService'
import { LoginButtonComponent } from './../login_button/loginButton.component';
import { gotoHome } from './../../util/redirect'

export const LoginButtonsComponent = {

    // Initialize a list of login buttons
    init() {
        // Specifies the root element in which the new HTML will be added.
        this.appElement = document.querySelector('#loginButtons');

        // Define Facebook as sign in provider
        let provider = new auth.FacebookAuthProvider();
        provider.addScope('user_birthday');
        this.facebookButton = {
            id: 'facebook-login',
            image: 'fa-facebook-f',
            provider: provider,
        };
        
        // Define Google as sign in provider
        provider = new auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        this.googleButton = {
            id: 'google-login',
            image: 'fa-google',
            provider: provider,
        };

        // Define Github as sign in provider
        provider = new auth.GithubAuthProvider();
        provider.addScope('repo');
        this.githubButton = {
            id: 'github-login',
            image: 'fa-github-alt',
            provider: provider,
        }
        // Render the three login buttons.
        this.render();
    },

    // Create 3 different login buttons.
    render() {
        let loginButtonsViewHTML = LoginButtonComponent.render(this.facebookButton);
        loginButtonsViewHTML += LoginButtonComponent.render(this.githubButton);
        loginButtonsViewHTML += LoginButtonComponent.render(this.googleButton);
        this.appElement.innerHTML = loginButtonsViewHTML;
        this.afterRender();
    },

    // Add the desired events for each provider.
    afterRender() {
        LoginButtonComponent.afterRender(this.facebookButton, (successMsg) => {
            console.log("Facebook: " + successMsg);
            // After successful log in go to home page.
            gotoHome();
        });
        LoginButtonComponent.afterRender(this.githubButton, (successMsg) => {
            console.log("Github: " + successMsg);
            // After successful log in go to home page.
            gotoHome();
        });
        LoginButtonComponent.afterRender(this.googleButton, (successMsg) => {
            console.log("Google: " + successMsg);
            // After successful log in go to home page.
            gotoHome();
        });
    },
}
