import { firestore } from './../services/firebaseService';

// Helper function that retrieves a document reference from a specific exercise collection.
export function getExerciseRef(exercise, userEmail, newDate) {
    return firestore.collection(exercise).doc(userEmail).collection("dates").doc(newDate);
}

// Helper function that retrieves a document from a specific exercise collection.
export function getExercise(exercise, userEmail, newDate) {
    return firestore.collection(exercise).doc(userEmail).collection("dates").doc(newDate).get();
}

// Helper function that saves a document from a specific exercise collection.
export function saveExercise(exercise, user, newDate, data) {
    return firestore.collection(exercise)
        .doc(user)
        .collection("dates")
        .doc(newDate)
        .set(data);
}

// Helper function that updates a document from a specific exercise collection.
export function updateExercise(docRef, data) {
    return docRef.update(data);
}
