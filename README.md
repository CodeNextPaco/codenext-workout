# Workout

### Exercise One: Set up Firebase
1. Open the following [link](https://firebase.google.com/docs/web/setup) and follow these steps.
2. Goto the firebase [console](https://console.firebase.google.com).
3. Setup a new project. The name of your project will be the URL.
<p><img src="/img/new_project.png" alt="" data-canonical-src="/img/new_project.png" /></p>

4. Add a Firebase app on the Firebase console.
<p><img src="/img/firebase_app.png" alt="" data-canonical-src="/img/firebase_app.png" /></p>

<p><img src="/img/register_app_1.png" alt="" data-canonical-src="/img/register_app_1.png" /></p> 
<p><img src="/img/register_app_2.png" alt="" data-canonical-src="/img/register_app_2.png" /></p> 
<p><img src="/img/register_app_3.png" alt="" data-canonical-src="/img/register_app_3.png" /></p>
<p><img src="/img/register_app_4.png" alt="" data-canonical-src="/img/register_app_4.png" /></p> 

1. On VisualCode open a new terminal and type the following to install firebase CLI.
   ```shell
   foo@bar:~$ npm install -g firebase-tools
   ```
2. In the same terminal type the following to add firebase dependencies to your project.
   ```shell
   foo@bar:~$ npm install --save firebase
   ```
3. In the same terminal. Initialize your Firebase project.
   ```shell
   foo@bar:~$ firebase login
   foo@bar:~$ firebase init hosting
   ```
<p><img src="/img/firebase_init_hosting.png" alt="" data-canonical-src="/img/firebase_init_hosting.png" /></p>

8. In the same terminal. Initialize your Firebase project.
   ```shell
   foo@bar:~$ firebase deploy
   ```
<p><img src="/img/firebase_deploy.png" alt="" data-canonical-src="/img/firebase_deploy.png" /></p>

9. Goto your newly publish web site. Copy the URL and view it on a browser.
<p><img src="/img/website.png" alt="" data-canonical-src="/img/website.png" /></p>

10. Add Firebase SDKs and [initialize](https://firebase.google.com/docs/web/setup#add-sdks-initialize) Firebase. Use the Hosting URLs and copy the folliwng:

   ```html 
   <!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
   <script src="/__/firebase/8.0.1/firebase-app.js"></script>
   <!-- If you enabled Analytics in your project, add the Firebase SDK for Analytics -->
   <script src="/__/firebase/8.0.1/firebase-analytics.js"></script>
   <!-- Add Firebase products that you want to use -->
   <script src="/__/firebase/8.0.1/firebase-auth.js"></script>
   <script src="/__/firebase/8.0.1/firebase-firestore.js"></script>
   ``` 
   * Copy the above into the following files:
     * src/public/home.html
     * src/public/index.html
     * src/public/login.html
11.  Build your project. Open a new terminal on visual code and type the following.
   ```shell
   foo@bar:~$ npm run build
   ```
12. Deploy your changes to firebase.
   ```shell
   foo@bar:~$ firebase deploy
   ```
13. Go to your website and see your changes

<p><img src="/img/home_page.png" alt="" data-canonical-src="/img/home_page.png" /></p>

<p><img src="/img/login_page.png" alt="" data-canonical-src="/img/login_page.png" /></p>

14. Use a different Bootstrap [spinner](https://getbootstrap.com/docs/4.5/components/spinners/#size) on the [src/public/login.html](https://github.com/encomp/codenext-workout/blob/02-branch/src/public/login.html#L35).
    ```html
    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
    </div>
    ```
15. Build your app, deploy it and test it.
    ```shell
    foo@bar:~$ npm run build 
    foo@bar:~$ firebase deploy
    ```