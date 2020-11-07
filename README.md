# Workout

### Exercise Four: Storing data in Firestore
1. Use Firestore api and write a request to [get](https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document) a document from the exercises collection. The code should go in [exerciseCard.component.js](https://github.com/encomp/codenext-workout/blob/05-branch/src/components/exercise_card/exerciseCard.component.js#L103)
   ```javascript
       return firestore.collection("exercises").doc(userEmail).collection("dates").doc(newDate);
   ```
   
2. Use firestore to [store](https://firebase.google.com/docs/firestore/manage-data/add-data#set_a_document) an exercise document. Save a new [exercise](https://firebase.google.com/docs/firestore/manage-data/add-data#custom_objects) document on firestore.
   ```javascript
       return firestore.collection("exercises")
        .doc(userEmail)
        .collection("dates")
        .doc(newDate)
        .withConverter(converterExercises)
        .set(data);
   ```
   1. Write the code to store a new exercise document using the the function saveMetaData.
   ```javascript
   const exercisesData = new Exercises(false, false, false, false, false, false, false, false, false, false);
   exercisesData[exercise] = true;
   saveMetaData(userEmail, newDate, exercisesData)
      .then(function (docRef) {
         console.error("Document saved.");
      }).catch(function (error) {
         console.error("Error adding document: ", error);
      });
   ```
3.  Use firestore to [update](https://firebase.google.com/docs/firestore/manage-data/add-data#update-data) an exercise document. Update the existing [exercise](https://firebase.google.com/docs/firestore/manage-data/add-data#custom_objects)document on firestore.
   ```javascript
   return docRef
        .withConverter(converterExercises)
        .update(data);
   ```
   1. Write the code to update the excersice document with a new exercise type.
   ```javascript
   const exercisesData = doc.data();
   exercisesData[exercise] = true;
   updateMetaData(docMetaRef, exercisesData)
      .then(function () {
         console.error("Document updated.");
      })
      .catch(function (error) {
         console.error("Error updating document: ", error);
      });
   ```
4. Use Firestore api and write a request to [get](https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document) a specific document from a given exercise collection. 
   ```javascript
   return firestore.collection(exercise).doc(userEmail).collection("dates").doc(newDate);
   ```
5. Use firestore to [store](https://firebase.google.com/docs/firestore/manage-data/add-data#set_a_document) an exercise document. Save a new [exercise](https://firebase.google.com/docs/firestore/manage-data/add-data#custom_objects) document on a specific exercise collection.
   ```javascript
   return firestore.collection(exercise)
        .doc(user)
        .collection("dates")
        .doc(newDate)
        .set(data);
   ```
6. 