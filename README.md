# Workout

### Exercise Two: Set up Firebase Authentication
1. What is [Authentication](https://firebase.google.com/docs/auth)?
2. Goto firebase [console](https://console.firebase.google.com) and open your project settings.
<p><img src="/img/project_settings.png" alt="" data-canonical-src="/img/project_settings.png" /></p> 

3. Copy your project configuration and paste it on [firebaseConfig.js](https://github.com/encomp/codenext-workout/blob/03-branch/src/services/firebaseConfig.js#L2).
<p><img src="/img/firebase_config.png" alt="" data-canonical-src="/img/firebase_config.png" /></p> 

4. Create a new [button](https://getbootstrap.com/docs/4.5/components/buttons/#outline-buttons) using Bootstrap.
   ```html
   <button type="button" class="btn btn-outline-light">
       <span class="fab" aria-hidden="true">Login</span>
   </button>
   ```
5. Use [Font Awesome](https://fontawesome.com/icons?d=gallery&q=google) to add an image to the button.
   ```html
   <button type="button" class="btn btn-outline-light">
       <span class="fab fa-google" aria-hidden="true"></span>
   </button>
   ```
6. Define a new on the [login.scss]() style called ```btn-floating``` to make the button round.
   ```css
   .btn-floating  {
        border-radius: 50%;
        width: 47px;
        height: 47px;
   }
   ```
7. 
