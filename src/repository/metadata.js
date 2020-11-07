import { Exercises, converterExercises } from './../util/exercise';
import { firestore } from './../services/firebaseService';

// Helper function that retrieves a document reference from the exercises collection.
export function getMetaDataRef(userEmail, newDate) {
    return firestore.collection("exercises").doc(userEmail).collection("dates").doc(newDate);
}

// Helper function that retrieves a document from the exercises collection.
export function getMetaDataDoc(userEmail, newDate) {
    return firestore.collection("exercises").doc(userEmail).collection("dates").doc(newDate).withConverter(converterExercises).get();
}

// Helper function that paginates the documents from exercises collection.
export function getMetaDataDocuments(userEmail, limit, startAfter, endAt) {
    let query = firestore.collection("exercises").doc(userEmail).collection("dates");
    if (limit) {
        query = query.limit(limit);
    }
    if (startAfter) {
        query = query.startAfter(startAfter);
    }
    if (endAt) {
        query = query.endAt(endAt);
    }
    return query.withConverter(converterExercises).get();
}

// Helper function that save a document on the exercises collection.
export function saveMetaData(userEmail, newDate, data) {
    return firestore.collection("exercises")
        .doc(userEmail)
        .collection("dates")
        .doc(newDate)
        .withConverter(converterExercises)
        .set(data);
}

// Helper function that update a document on the exercises collection.
export function updateMetaData(docRef, data) {
    return docRef
        .withConverter(converterExercises)
        .update(data);
}
