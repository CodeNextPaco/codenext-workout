# Workout

### Exercise One: Set up Firebase
1. Open the following [link](https://firebase.google.com/docs/web/setup) and follow these steps.
2. Goto the firebase [console](https://console.firebase.google.com).
3. Setup a new project. The name of your project will be the URL.
<img src="/img/new_project.png" alt="" data-canonical-src="/img/new_project.png" />
4. Add Firebase SDKs and [initialize](https://firebase.google.com/docs/web/setup#add-sdks-initialize) Firebase. Use the Hosting URLs and copy the folliwng:
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
     * home.html
     * index.html
     * login.html
5. On VisualCode open a new terminal.
   ```shell
   foo@bar:~$ npm install --save firebase
   ```

   