# Workout

### Exercise Two: Set up Firebase Authentication
1. Create a new [button](https://getbootstrap.com/docs/4.5/components/buttons/#outline-buttons) using Bootstrap. Try it out on the [login.html](https://github.com/encomp/codenext-workout/blob/03-branch/src/public/login.html#L46)
   ```html
   <button type="button" class="btn btn-outline-light">
       <span class="fab" aria-hidden="true">Login</span>
   </button>
   ```
2. Use [Font Awesome](https://fontawesome.com/icons?d=gallery&q=google) to add an image to the button.
   ```html
   <button type="button" class="btn btn-outline-light">
       <span class="fab fa-google" aria-hidden="true"></span>
   </button>
   ```
3. Define a new on the [login.scss](https://github.com/encomp/codenext-workout/blob/03-branch/src/scss/login.scss#L1) style called ```btn-floating``` to make the button round.
   ```css
   .btn-floating  {
        border-radius: 50%;
        width: 47px;
        height: 47px;
   }
   ```
4. Finally add the style to the button as follows:
   ```html
   <button type="button" class="btn btn-outline-light btn-floating">
       <span class="fab fa-google" aria-hidden="true"></span>
   </button>
   ```
5. Let's create a new component that can be reused. These component will consist of two parts:
   * A Template: This is a string in which a few elements will be replaced
   * A Component: This is java script code that allow us to add code to the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) of a web page. This will allow us to render the Template on the page and also allows you to add event such as on click.
  
6. Let's look at the [template](https://github.com/encomp/codenext-workout/blob/03-branch/src/components/login_button/loginButton.template.js#L1) of the LoginButton.
   ```javascript
   export const buttonLoginTemplate = model => `
   <div class="col col-lg-2">
    <button id="${model.id}" type="button" class="btn btn-outline-light">
        <span class="fab ${model.image}" aria-hidden="true"></span>
    </button>
   </div>
   `;
   ```
7. Let's create the component that will render the template above. Type the following on the [loginButton.component.js](https://github.com/encomp/codenext-workout/blob/03-branch/src/components/login_button/loginButton.component.js).
   ```javascript
   import { buttonLoginTemplate } from './loginButton.template';

    export const LoginButtonComponent = {

        render(model) {
            return buttonLoginTemplate(model);
        },

        afterRender(model, onSuccess, onError) {
            const loginButton = document.querySelector('#' + model.id);
            loginButton.addEventListener('click', event => {
                console.log("User click");
            });
        },
    }
   ```  
8. dd
9. dd 
10. What is [Authentication](https://firebase.google.com/docs/auth)?
11.  Goto firebase [console](https://console.firebase.google.com) and open your project settings.
<p><img src="/img/project_settings.png" alt="" data-canonical-src="/img/project_settings.png" /></p> 

1.  Copy your project configuration and paste it on [firebaseConfig.js](https://github.com/encomp/codenext-workout/blob/03-branch/src/services/firebaseConfig.js#L2).
<p><img src="/img/firebase_config.png" alt="" data-canonical-src="/img/firebase_config.png" /></p>  
