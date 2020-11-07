import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { firebaseConfig } from './firebaseConfig';

// Helper code that initialize firebase.
try {
    firebase.initializeApp(firebaseConfig);
    let app = firebase.app();
    let features = ['auth', 'firestore', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
    console.log(`Firebase SDK loaded with ${features.join(', ')}`);
} catch (e) {
    console.error(e);
    console.log('Error loading the Firebase SDK, check the console.');
}

export default firebase;
export const app = firebase.app;
export const auth = firebase.auth;
export const firestore = firebase.firestore;
